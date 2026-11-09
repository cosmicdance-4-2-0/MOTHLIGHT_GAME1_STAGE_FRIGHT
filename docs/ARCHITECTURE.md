# Stage Fright — Architecture

**Status: proposed boundary; no gameplay contract or implementation accepted.**

## The core principle

One fixed-step authoritative TypeScript simulation, multiple hosts. PixiJS initially presents fixed-camera, layered, pixel-art/2.5D rooms. Node.js runs headless tests and may eventually host multiplayer.

| Module | Owns | Must not own |
| --- | --- | --- |
| `packages/core` | Future state, ordered commands, deterministic AI, physics rules, show events and outcomes | DOM, PixiJS, network, audio, renderer |
| `apps/web` | PixiJS display, camera, presentation, input UI | Authoritative gameplay decisions or damage |
| `docs/design` | Versioned design proposals | Runtime contracts |

```text
apps/web ------> packages/core
future server --> packages/core
future tests ---> packages/core
```

Core currently exports only a **package identity marker** to validate module wiring.

## Contracts still to be designed

Fixed-tick command ordering, causal events, reproducible random-number generation, number semantics, snapshots, saves, dialogue context, and versioned Adventure composition.

A Play defines scenes and cues; a Venue defines room/mechanism capabilities; a Cast defines actors and role assignments; a Haunting defines ghost capabilities; an Adventure validates and assembles them. These are design directions, not yet a ratified schema.

The renderer must never decide whether a chandelier hit, a cast member panicked, or a ghost gained Power. Non-authoritative animation and debris motion may use presentational physics later.

## Portability and scope

Browser/desktop first. Mobile and cooperative multiplayer remain possible future deployments, not implied completed features. No LLM runs the game.

See `docs/design/STAGE_FRIGHT_DESIGN_v0.1.md` for the current design draft.
