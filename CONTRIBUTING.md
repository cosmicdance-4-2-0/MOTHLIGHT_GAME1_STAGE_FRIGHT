# Contributing

Use Node.js 22 and npm. After installing dependencies:

```sh
npm install
npm run dev
npm run check
```

The web entrypoint is a rendering smoke screen; **there is no playable game yet**.

For each change, record the scope, affected paths, actual verification results and remaining risks. Keep game rules out of presentation adapters.

**Bootstrap limitation:** no dependency lockfile was available to generate and verify during the initial repository setup. Generate, check and commit it before production or release work. Until then, the CI installation is not dependency-reproducible.
