# Stage Fright — Human Changelog

This log tracks **recorded development integrations** rather than public releases.

## Unreleased / review pending

- **Stage 0 remains open:** reconciliation planning decisions are recorded below; exact executable contracts and focused reviewer follow-up remain open.
- **Art status correction:** PR #2 merged at `3e6386f258c73141b35e109a3c1b510e5b2e30b9`; its derivative/provenance are present, while original full-resolution PNGs remain outside this repository. SF-0004 does not claim that PR #2 had a separate version record.
- **Gameplay tests:** no Stage 2 player trials or simulation implementation is authorized by this record.

## [0.0.2.5/SF-0005] — 2026-11-11

**Purpose:** reconcile a safely merged but incompletely versioned Stage 0 design-document stack, and align the provisional Gate 2 chandelier fixture with the independently authored Gate 1 authority proposal.

**Historical integration receipt (retrospective and explicit):** PR #18 (six individual Gate 1 reports), PR #19 (provisional chandelier fixture), and PR #20 (Mothlight's candidate Gate 1 transition) merged sequentially as `0b388846`, `6ff94b23`, and `514ce104` without updating `version.json`. Their original merge commits and dates **are not rewritten**, and this entry does **not** pretend that any of them had a ChangeID at merge time. SF-0005 is a **single forward catch-up record**, not one fabricated record for each prior PR. This missed per-integration ledger step is documented as an exception to the normal policy.

**Changed in this proposed integration:** Gate 2's physical Hold interlock, explicit precommitted-impact cutoff and costed evidence timing; candidate G1-aligned F2-08/09/11/12 outcomes; exact completed-boundary feasibility inequality; corrected four-station description; roadmap and intake distinction between merged design proposals and adopted executable contracts.

**Affected paths:** `docs/design/STAGE0_GATE2_CHANDELIER_MECHANISM.md`, `docs/reviews/STAGE0_GATE1_RECONCILIATION_PROPOSAL.md`, `docs/reviews/STAGE0_GATE1_REVIEW_INTAKE.md`, `docs/ROADMAP.md`, `version.json`, `CHANGELOG.md`, `docs/changes/SF-0005.md`.

**Compatibility:** design documentation only; no actual game physics, commands, API, saves, visual assets or runtime changes. `Revision=2` remains unchanged: Gate 1 and Gate 2 executable/adopted contracts are still open. `Build=5` records only this accepted forward documentation integration **if the proposed PR is merged**. No public release and no human or simulation result claimed.

**Detailed change record:** [SF-0005](docs/changes/SF-0005.md).

## [0.0.2.4/SF-0004] — 2026-11-09

**Purpose:** record the owner-directed six-review reconciliation and smaller first gameplay experiment.

**Changed:** source-pinned dispositions with preserved dissent; clock/authority, evidence, fair hazards, Director/economy, Production, Bell/Beat, replay/recovery and pause requirements; mundane judgment experiment; staged roadmap and current-document precedence. Exact runtime contracts and empirical results remain open.

**Affected paths:** `README.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, `docs/contracts/V0_PLANNED_CONTRACTS.md`, `docs/design/V0_GAMEPLAY.md`, `docs/design/V0_DECISION_REGISTER.md`, `docs/design/STAGE1_VISUAL_DIRECTION.md`, `docs/design/STAGE_FRIGHT_DESIGN_v0.1.md`, `docs/design/STAGE2_JUDGMENT_EXPERIMENT.md`, `docs/reviews/STAGE0_REVIEW_INTAKE.md`, `docs/reviews/STAGE0_RECONCILIATION.md`, `version.json`, `CHANGELOG.md`, `docs/changes/SF-0004.md`.

**Compatibility:** documentation only; no gameplay, schema, dependencies, art or agent identity changes. Revision 2 records meaningful planning corrections; Build 4 becomes current on integration. No release or Stage 0 completion.

**Attribution:** Mothlight — The Invisible Stagehand; original review authors and dissent retained.

**Detailed change record:** [SF-0004](docs/changes/SF-0004.md).

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
