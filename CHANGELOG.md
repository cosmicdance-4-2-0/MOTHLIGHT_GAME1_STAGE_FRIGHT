# Stage Fright — Human Changelog

This log tracks **recorded development integrations** rather than public releases.

## Unreleased / review pending

- **PR #1:** proposed Stage 0 gameplay contracts, terminology, modular Adventures, and art experiments.
- **PR #2:** proposed agent likeness provenance, pixel derivative, and attribution.
- **Peer reviews:** requested in a subsequent Stage 0 handoff, **not yet received**.

## [0.0.0.1/SF-0001] — 2026-11-09

**Purpose:** establish the first reproducible and testable development baseline without implementing gameplay.

**Changed:** resolved npm lockfile; npm-ci-based checks; headless Chromium visual smoke test; four-part game version, change record and authorial attribution conventions.

**Affected paths:** `package-lock.json`, `package.json`, `.github/workflows/check.yml`, `playwright.config.mjs`, `tests/browser/smoke.spec.mjs`, `version.json`, `tools/validate-version.mjs`, `docs/VERSIONING.md`, `docs/changes/SF-0001.md`, `README.md`, `CONTRIBUTING.md`.

**Compatibility:** no gameplay code, simulation contracts or content schema modified.

**Authorship perspective:** Mothlight — The Invisible Stagehand; authenticated Git actors recorded separately.

**Detailed change record:** [SF-0001](docs/changes/SF-0001.md).

*This entry is proposed on the R0 engineering branch and becomes an accepted integrated state only when merged.*
