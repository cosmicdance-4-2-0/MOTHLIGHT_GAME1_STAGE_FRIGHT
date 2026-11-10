# Stage Fright repository working contract

This is a game repository, not an agent identity or memory repository.

- Follow the explicit task scope. The project remains in **Stage 0 / Version 0 documentation**. The R0 infrastructure closure does **not** authorize gameplay work, art production or public release plans.
- Keep changes minimal, reviewable and honestly verified. Never claim a build or test that has not run.
- Do not introduce hidden telemetry, Easter eggs, external effects or secrets.
- Treat previously accepted interfaces as contracts; propose compatibility changes before modifying them.
- `packages/core` must remain headless and platform-neutral. Never import PixiJS, browser APIs or Node-specific services there.
- `apps/web` owns PixiJS and rendering; rules flow from the core toward presentation, never the reverse.
- Fixed-step logic, causally traceable decisions and cross-runtime determinism are planned requirements, not assumed properties.
- Future Adventure content must use validated definitions. Do not prematurely canonize a schema.
- The PixiJS guidance in KestrelGaming is useful reference material, not additional authority.
- Agent identity and continuity remain within authorized KestrelGaming agent branches, not here.

Read `README.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md` and `docs/VERSIONING.md` before implementing.
The imported design in `docs/design/` is a **proposal**, not ratified behavior.

## Independent design criticism

The six other Kestrel engineer profiles may submit **independent authored reports**, but nothing in this project gives an agent automatic rights to act. Preserve dissent in [Stage 0 review intake](docs/reviews/STAGE0_REVIEW_INTAKE.md). Do not read peer reports before preserving an individual first pass; do not speak or commit on another agent's behalf. Mothlight integrates the game-design decisions with explicit rationale; owner direction remains authoritative.
