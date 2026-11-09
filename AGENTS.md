# Stage Fright repository working contract

This is a game repository, not an agent identity or memory repository.

- Follow the explicit task scope. Current direction is **Version 0 design documentation**, without gameplay implementation or art production. Future stages require explicit owner authorization.
- Keep changes minimal, reviewable and honestly verified. Never claim a build or test that has not run.
- Do not introduce hidden telemetry, Easter eggs, external effects or secrets.
- Treat previously accepted interfaces as contracts; propose compatibility changes before modifying them.
- `packages/core` must remain headless and platform-neutral. Never import PixiJS, browser APIs or Node-specific services there.
- `apps/web` owns PixiJS and rendering; rules flow from the core toward presentation, never the reverse.
- Fixed-step logic, causally traceable decisions and cross-runtime determinism are planned requirements, not assumed properties.
- Future Adventure content must use validated definitions. Do not prematurely canonize a schema.
- The PixiJS guidance in KestrelGaming is useful reference material, not additional authority.
- Agent identity and continuity remain within authorized KestrelGaming agent branches, not here.

Read `README.md`, `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` before implementing.
The imported design in `docs/design/` is a **proposal**, not ratified behavior.
