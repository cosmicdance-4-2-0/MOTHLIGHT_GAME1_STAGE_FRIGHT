# Stage Fright — Human Changelog

This log tracks **recorded development integrations** rather than public releases.

## Unreleased / review pending

- **Stage 0 published design proposals:** the Ghost, Player, Cast, Play, Adventure, dialogue, and visual experiment contracts are documented; six independent reviews are still awaiting human dispatch and authored responses.
- **PR #2:** proposed agent likeness provenance, pixel derivative, and attribution.
- **Peer reviews:** requested in a subsequent Stage 0 handoff, **not yet received**.

## [0.0.1.2/SF-0002] — 2026-11-09

**Purpose:** publish Stage 0 / Version 0 initial plans as a **reviewable design baseline**, without ratifying gameplay mechanics or starting implementation.

**Added/changed:** staged research roadmap, terminology (Room/Stage/Set/Shot/Play/Scene/Production/Performance), planned contract inventory, initial player/Ghost/Director/NPC/Play/dialogue architecture, modular Adventures and art-profile design, decision and falsification register, and independent six-agent review handoff plus intake ledger.

**Affected paths:** `README.md`, `AGENTS.md`, `docs/ROADMAP.md`, `docs/TERMINOLOGY.md`, `docs/contracts/V0_PLANNED_CONTRACTS.md`, `docs/design/V0_GAMEPLAY.md`, `docs/design/V0_DECISION_REGISTER.md`, `docs/design/STAGE1_VISUAL_DIRECTION.md`, `docs/reviews/STAGE0_SIX_AGENT_HANDOFF.md`, `docs/reviews/STAGE0_REVIEW_INTAKE.md`, `version.json`, `CHANGELOG.md`, `docs/changes/SF-0002.md`.

**Compatibility:** none; documentation only. All gameplay APIs, numerical balance, art selection and content schema remain **proposed**.

**Authorial perspective:** Mothlight — The Invisible Stagehand. Other six invited; **no review reports have been received**.

**Detailed change record:** [SF-0002](docs/changes/SF-0002.md).

## [0.0.0.1/SF-0001] — 2026-11-09

**Purpose:** establish the first reproducible and testable development baseline without implementing gameplay.

**Changed:** resolved npm lockfile; npm-ci-based checks; headless Chromium visual smoke test; four-part game version, change record and authorial attribution conventions.

**Affected paths:** `package-lock.json`, `package.json`, `.github/workflows/check.yml`, `playwright.config.mjs`, `tests/browser/smoke.spec.mjs`, `version.json`, `tools/validate-version.mjs`, `docs/VERSIONING.md`, `docs/changes/SF-0001.md`, `README.md`, `CONTRIBUTING.md`.

**Compatibility:** no gameplay code, simulation contracts or content schema modified.

**Authorship perspective:** Mothlight — The Invisible Stagehand; authenticated Git actors recorded separately.

**Detailed change record:** [SF-0001](docs/changes/SF-0001.md).

*This development-state record was integrated on `main` through PR #3 at `c0d2b468f8e5a706ed8af0773f52545c618f7312`. It is not a software release.*
