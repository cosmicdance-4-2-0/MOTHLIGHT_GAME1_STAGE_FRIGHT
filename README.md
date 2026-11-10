# Stage Fright

*A haunted theater. A hostile house. The show must go on.*

Stage Fright is a planned modular, replayable, single-player-first theatrical survival-horror game. The current repository is a **bootstrap**, not an implemented game.

## Intended stack

- **TypeScript** shared game simulation (headless, deterministic, fixed-step).
- **PixiJS v8** for initial fixed-camera, pixel-art / 2.5D presentation.
- **Node.js** for tooling, tests, and eventual authoritative multiplayer services.
- **npm workspaces** to keep the game rules independent of the renderer.

## Status

**R0 development environment verified. Stage 0 gameplay/design remains proposed.** No ghost AI, cast behavior, damage simulation, episode system, or playable game loop has been implemented.

See the [experimental development roadmap](docs/ROADMAP.md), [working terminology](docs/TERMINOLOGY.md), [Version 0 planned contracts](docs/contracts/V0_PLANNED_CONTRACTS.md), [gameplay specification](docs/design/V0_GAMEPLAY.md), [decision and experiment register](docs/design/V0_DECISION_REGISTER.md), [Stage 1 visual exploration](docs/design/STAGE1_VISUAL_DIRECTION.md), [initial GDD](docs/design/STAGE_FRIGHT_DESIGN_v0.1.md), [architecture](docs/ARCHITECTURE.md), [versioning](docs/VERSIONING.md) and [human changelog](CHANGELOG.md).

## Development

Once dependencies are installed:

```sh
npm ci
npm run dev
npm run check
npx playwright install chromium
npm run smoke
```

For now, `npm run dev` is intended to display only a rendering smoke screen.

## Design boundaries

- The simulation must not import PixiJS, browser APIs, or runtime-specific modules.
- Game rules must remain testable headlessly; visual physics must not silently decide authoritative damage.
- Content should compose through explicit validated interfaces rather than hidden global state.
- Designs and balancing values are proposals until tested and accepted.
- Do not implement gameplay systems until the relevant Stage 0 design contracts are reviewed and authorized.

The project is in early design. Licensing and redistribution terms have not yet been selected.

## Independent Stage 0 reviews

Mothlight is the integrating game designer. Axiom, Flint, Kite, Gauge, Harbor, and Latch each have a separately tracked **independent review invitation**. All six must use the same [source-pinned brief](docs/reviews/STAGE0_SIX_AGENT_HANDOFF.md), with submissions and disagreements preserved in the [intake ledger](docs/reviews/STAGE0_REVIEW_INTAKE.md). Issued invitations are **not** recorded as approvals or completed reviews.
