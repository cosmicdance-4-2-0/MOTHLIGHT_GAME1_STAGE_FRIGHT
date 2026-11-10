# Stage Fright — Roadmap

Future checkpoints are proposed, not pre-authorized implementation.

## R0 — Repository setup

- [x] Initialize GitHub repository and README
- [x] Establish TypeScript npm workspaces
- [x] Add separate headless and PixiJS presentation packages
- [x] Include a non-gameplay rendering smoke screen
- [x] Import the existing draft design and architecture documentation
- [x] Add a smoke test and CI check definition
- [x] Generate a committed lockfile matching a runner artifact (Git blob `420b864851ac24178bceac4cd45e78c16aee2b00`)
- [x] Run dependency-backed build, typecheck and tests (CI success at `cc43763ed997ed863e809eb2051624168bcd177a`)
- [x] Verify actual browser-rendered pixels using Chromium ([successful workflow](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/actions/runs/42732657668))

R0 **engineering gates passed in GitHub Actions** at `8e1b3824dd78c2f1bb8e11e5ef9a01dc8b1df866`. Headless Chromium pixel verification is recorded; manual aesthetic/art approval is a separate Stage 1 task.

## R1 — Headless simulation (future)

An agreed fixed-tick command/event API; deterministic seeded tests; one mechanism and bounded Ghost Power/Rage decisions.

## R2 — First room (future)

Fixed-camera stage, player movement, observation and adjustment, one performer and one ghost interference.

## R3 — Performance variability (future)

Cast Fear/Trust, injuries and prop integrity; rehearsed and contingency dialogue; show outcomes.

## R4 — Adventure composition (future)

Binding route, clue network, modular Play/Venue/Cast/Haunting manifests, second distinct Adventure.

## Deferred

Full physics destruction, multiplayer networking, procedural venues, voice acting, content editor, meta-progression.
