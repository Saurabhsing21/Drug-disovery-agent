import psycopg2
import ast

def fix_db():
    conn = psycopg2.connect("postgresql://drugagent:password@localhost:5432/drugagent")
    cur = conn.cursor()
    cur.execute("SELECT id, compare_markdown FROM saved_comparisons;")
    rows = cur.fetchall()
    
    for row_id, mkd in rows:
        if mkd and mkd.startswith("content=[") and mkd.endswith("]"):
            try:
                # The string is `content=[{...}]`
                # So we extract everything after `content=`
                val = mkd.split("content=", 1)[1]
                data = ast.literal_eval(val)
                if isinstance(data, list) and len(data) > 0 and isinstance(data[0], dict):
                    extracted = data[0].get("text", "")
                    if extracted:
                        cur.execute("UPDATE saved_comparisons SET compare_markdown = %s WHERE id = %s", (extracted, row_id))
                        print(f"Fixed report {row_id}")
            except Exception as e:
                print(f"Failed {row_id}: {e}")
                
    conn.commit()
    cur.close()
    conn.close()

fix_db()
