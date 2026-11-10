# Stage Fright — Architecture

**Status: reconciled planning requirements (SF-0004); executable APIs and gameplay remain unimplemented.** See [reconciliation](reviews/STAGE0_RECONCILIATION.md) for precedence and unresolved gates.

## The core principle

One fixed-step authoritative TypeScript simulation, multiple hosts. PixiJS initially presents fixed-camera, layered, pixel-art/2.5D rooms. Node.js runs headless tests and may eventually host multiplayer.

| Module | Owns | Must not own |
| --- | --- | --- |
| `packages/core` | Future state, ordered commands, deterministic AI, physics rules, show events and outcomes | DOM, PixiJS, network, audio, renderer |
| `apps/web` | PixiJS display, camera, presentation, input UI | Authoritative gameplay decisions or damage |
| `docs/design` | Versioned planning decisions, experiments and historical proposals | Implemented runtime behavior |

```text
apps/web ------> packages/core
future server --> packages/core
future tests ---> packages/core
```

Core currently exports only a **package identity marker** to validate module wiring.

## Contracts still to be designed

Fixed-tick command ordering, causal events, reproducible random-number generation, number semantics, snapshots, saves, dialogue context, and versioned Adventure composition.

A Play defines Scenes and Cues; a Venue defines Room/mechanism capabilities; a Cast defines Actors; a Production explicitly binds Roles to Actors and Cues to Venue mechanisms; a Haunting defines bounded senses and abilities; an Adventure assembles a validated composition. These are design directions, not yet a ratified schema.

The renderer must never decide whether a chandelier hit, a cast member panicked, or a ghost gained Power. Non-authoritative animation and debris motion may use presentational physics later.

## Portability and scope

Browser/desktop first. Mobile and cooperative multiplayer remain possible future deployments, not implied completed features. No LLM runs the game.

The [original GDD](design/STAGE_FRIGHT_DESIGN_v0.1.md) preserves the initial proposal. The [reconciliation](reviews/STAGE0_RECONCILIATION.md), [planned contracts](contracts/V0_PLANNED_CONTRACTS.md), and [roadmap](ROADMAP.md) define the current planning direction. Conceptual owners do not mandate separate packages; core and presentation remain the necessary initial runtime boundary.
