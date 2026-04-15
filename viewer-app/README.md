# viewer-application-

Static viewer for saved reports and comparisons.

## Regenerate static data

If the SQLite database at `../saved_runs.db` changes, run:

```bash
npm run export:data
npm run build
```

The app is configured for static export, so Vercel can deploy the generated HTML without a live database.

Viewer app for saved reports and comparisons.
