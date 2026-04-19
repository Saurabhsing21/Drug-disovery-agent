function tryParseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function decodeEscapedMarkdown(value: string): string {
  return value
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\f/g, "\f")
    .replace(/\\v/g, "\v")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function extractQuotedValue(input: string, startIndex: number): { value: string; endIndex: number } | null {
  const quote = input[startIndex];
  if (quote !== "'" && quote !== '"') return null;

  let value = "";
  let escaped = false;

  for (let i = startIndex + 1; i < input.length; i += 1) {
    const char = input[i];

    if (escaped) {
      value += `\\${char}`;
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === quote) {
      return { value, endIndex: i + 1 };
    }

    value += char;
  }

  return null;
}

function extractTextField(input: string): string | null {
  const textKeyPatterns = ['"text"', "'text'", "text"];

  for (const pattern of textKeyPatterns) {
    const keyIndex = input.indexOf(pattern);
    if (keyIndex < 0) continue;

    const colonIndex = input.indexOf(":", keyIndex + pattern.length);
    if (colonIndex < 0) continue;

    let valueIndex = colonIndex + 1;
    while (valueIndex < input.length && /\s/.test(input[valueIndex])) {
      valueIndex += 1;
    }

    const parsed = extractQuotedValue(input, valueIndex);
    if (parsed) {
      return decodeEscapedMarkdown(parsed.value);
    }
  }

  return null;
}

function unwrapStructuredValue(value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return "";

    const parsed = tryParseJson(trimmed);
    if (typeof parsed === "string") return unwrapStructuredValue(parsed);
    if (Array.isArray(parsed)) return unwrapStructuredValue(parsed);
    if (parsed && typeof parsed === "object") return unwrapStructuredValue(parsed);

    const obj = value.match(/^content\s*=\s*(.+)$/s);
    if (obj) {
      const extracted = extractTextField(obj[1].trim());
      if (extracted) return extracted;
      return decodeEscapedMarkdown(obj[1].trim());
    }

    const extracted = extractTextField(trimmed);
    if (extracted) return extracted;

    return decodeEscapedMarkdown(trimmed);
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const extracted = unwrapStructuredValue(item);
      if (extracted) return extracted;
    }
    return null;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;

    if (typeof record.text === "string") {
      return unwrapStructuredValue(record.text);
    }

    if (typeof record.content === "string") {
      return unwrapStructuredValue(record.content);
    }

    if (Array.isArray(record.content)) {
      const extracted = unwrapStructuredValue(record.content);
      if (extracted) return extracted;
    }

    if (typeof record.markdown === "string") {
      return unwrapStructuredValue(record.markdown);
    }
  }

  return null;
}

function convertListTables(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
  const tableLabels = new Set([
    "Summary table",
    "Metrics table",
    "Ranked table",
    "Association table",
    "Literature table",
  ]);

  const pipeCells = (value: string) => value.split("|").map((part) => part.trim());

  for (let i = 0; i < lines.length; ) {
    const line = lines[i];
    const stripped = line.trim();
    if (!tableLabels.has(stripped)) {
      out.push(line);
      i += 1;
      continue;
    }

    let j = i + 1;
    while (j < lines.length && !lines[j].trim()) j += 1;
    if (j >= lines.length) {
      out.push(line);
      i += 1;
      continue;
    }

    let headers: string[] | null = null;
    let rowStart = j;
    const next = lines[j].trim();

    if (next.startsWith("- Columns:")) {
      headers = pipeCells(next.slice("- Columns:".length).trim());
      rowStart = j + 1;
      if (rowStart < lines.length && lines[rowStart].trim() === "- Rows:") {
        rowStart += 1;
      }
    } else if (next.startsWith("- ") && next.includes("|")) {
      headers = pipeCells(next.slice(2).trim());
      rowStart = j + 1;
    }

    if (!headers || headers.some((cell) => !cell)) {
      out.push(line);
      i += 1;
      continue;
    }

    const rows: string[][] = [];
    let k = rowStart;
    while (k < lines.length) {
      const rowLine = lines[k].trim();
      if (!rowLine || rowLine.startsWith("## ") || rowLine.startsWith("### ")) break;
      if (!rowLine.startsWith("- ")) break;
      const rowText = rowLine.slice(2).trim();
      if (!rowText.includes("|")) break;
      const cells = pipeCells(rowText);
      if (cells.length !== headers.length) break;
      rows.push(cells);
      k += 1;
    }

    if (!rows.length) {
      out.push(line);
      i += 1;
      continue;
    }

    out.push(line);
    out.push(`| ${headers.join(" | ")} |`);
    out.push(`| ${headers.map(() => "---").join(" | ")} |`);
    for (const row of rows) {
      out.push(`| ${row.join(" | ")} |`);
    }
    i = k;
  }

  return out.join("\n");
}

export function normalizeMarkdownReport(markdown: string | null | undefined): string {
  if (!markdown) return "";

  const normalized = unwrapStructuredValue(markdown);
  const base = typeof normalized === "string" && normalized.length > 0 ? normalized.trim() : markdown.trim();
  return convertListTables(base).trim();
}
