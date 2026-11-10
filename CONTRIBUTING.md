# Contributing

Use Node.js 22 and npm. After installing dependencies:

```sh
npm ci
npm run dev
npm run check
npx playwright install chromium
npm run smoke
```

The web entrypoint is a rendering smoke screen; **there is no playable game yet**.

For each change, record the scope, affected paths, actual verification results and remaining risks. Keep game rules out of presentation adapters.

The repository now pins `package-lock.json`; use `npm ci` for reproducible installs. The Chromium smoke test confirms visible PixiJS pixels. Consult `docs/VERSIONING.md` and record the affected paths, tests and attribution before accepting an integration.
