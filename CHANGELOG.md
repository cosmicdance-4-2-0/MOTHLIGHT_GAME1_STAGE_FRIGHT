# Stage Fright — Human Changelog

This log tracks **recorded development integrations** rather than public releases.

## Unreleased / review pending

- **Stage 0 contract reconciliation:** all six independent first passes have been received; Adopt / Reject / Defer / Experiment decisions are **not yet integrated**.
- **PR #2:** proposed Mothlight likeness provenance, pixel derivative, and attribution remains a separate art draft.
- **Gameplay tests:** no Stage 2 player trials or new simulation code authorized by this record.

## [0.0.1.3/SF-0003] — 2026-11-09

**Purpose:** preserve and index all six independent Stage 0 design audits before reconciliation, with source revision, distinct verdicts, findings, experimental proposals, and each reviewer's dissent.

**Changed:** six first-pass receipts and original-source links for Axiom, Flint, Kite, Gauge, Harbor, and Latch; updated their GitHub review invitation issues and the source-pinned intake ledger; marked review **collection** complete in the research roadmap.

**Affected paths:** `docs/reviews/STAGE0_REVIEW_INTAKE.md`, `docs/ROADMAP.md`, `version.json`, `CHANGELOG.md`, `docs/changes/SF-0003.md`.

**Compatibility:** documentation only. No gameplay authority, run-time contract, mod schema, numeric balance, Art Pack or simulation source changed. **Review collection is complete; Stage 0 contract reconciliation and adoption are not.**

**Authorship perspective:** Mothlight — The Invisible Stagehand (intake/integration); the six source reports remain attributed to their original agents, not jointly rewritten. GitHub credentials are shared.

**Detailed change record:** [SF-0003](docs/changes/SF-0003.md).

## [0.0.1.2/SF-0002] — 2026-11-09

**Purpose:** publish Stage 0 / Version 0 initial plans as a **reviewable design baseline**, without ratifying gameplay mechanics or starting implementation.

**Added/changed:** staged research roadmap, terminology (Room/Stage/Set/Shot/Play/Scene/Production/Performance), planned contract inventory, initial player/Ghost/Director/NPC/Play/dialogue architecture, modular Adventures and art-profile design, decision and falsification register, and independent six-agent review handoff plus intake ledger.

**Affected paths:** `README.md`, `AGENTS.md`, `docs/ROADMAP.md`, `docs/TERMINOLOGY.md`, `docs/contracts/V0_PLANNED_CONTRACTS.md`, `docs/design/V0_GAMEPLAY.md`, `docs/design/V0_DECISION_REGISTER.md`, `docs/design/STAGE1_VISUAL_DIRECTION.md`, `docs/reviews/STAGE0_SIX_AGENT_HANDOFF.md`, `docs/reviews/STAGE0_REVIEW_INTAKE.md`, `version.json`, `CHANGELOG.md`, `docs/VERSIONING.md`, `docs/changes/SF-0001.md`, `docs/changes/SF-0002.md`.

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
