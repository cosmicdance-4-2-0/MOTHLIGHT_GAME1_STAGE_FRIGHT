# Stage Fright

*A haunted theater. A hostile house. The show must go on.*

Stage Fright is a planned modular, replayable, single-player-first theatrical survival-horror game. The current repository is a **bootstrap**, not an implemented game.

## Intended stack

- **TypeScript** shared game simulation (headless, deterministic, fixed-step).
- **PixiJS v8** for initial fixed-camera, pixel-art / 2.5D presentation.
- **Node.js** for tooling, tests, and eventual authoritative multiplayer services.
- **npm workspaces** to keep the game rules independent of the renderer.

## Status

**Repository setup only.** No ghost AI, cast behavior, damage simulation, episode system, or playable game loop has been implemented.

See the [staged experimental roadmap](docs/ROADMAP.md), [working terminology](docs/TERMINOLOGY.md), [Version 0 proposed contracts](docs/contracts/V0_PLANNED_CONTRACTS.md), [Version 0 gameplay specification](docs/design/V0_GAMEPLAY.md), [Stage 1 visual exploration](docs/design/STAGE1_VISUAL_DIRECTION.md), [architecture](docs/ARCHITECTURE.md), and the [original draft game design](docs/design/STAGE_FRIGHT_DESIGN_v0.1.md).

## Development

Once dependencies are installed:

```sh
npm install
npm run dev
npm run check
```

For now, `npm run dev` is intended to display only a rendering smoke screen.

## Design boundaries

- The simulation must not import PixiJS, browser APIs, or runtime-specific modules.
- Game rules must remain testable headlessly; visual physics must not silently decide authoritative damage.
- Content should compose through explicit validated interfaces rather than hidden global state.
- Designs and balancing values are proposals until tested and accepted.
- Do not implement game systems during repository bootstrap.

The project is in early design. Licensing and redistribution terms have not yet been selected.

## Independent design review

Mothlight is Stage Fright's integrating designer. The other six Kestrel engineers are invited to submit **independent Stage 0 design reviews**, not to rubber-stamp the draft. See the [six-agent source-pinned handoff](docs/reviews/STAGE0_SIX_AGENT_HANDOFF.md), [review intake](docs/reviews/STAGE0_REVIEW_INTAKE.md), and [design decision register](docs/design/V0_DECISION_REGISTER.md). No reviews are recorded yet; content and gameplay contracts are still proposed.
