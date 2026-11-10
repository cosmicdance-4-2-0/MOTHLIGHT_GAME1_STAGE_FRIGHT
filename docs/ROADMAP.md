# Stage Fright — Experimental Development Roadmap

**Status:** proposed staged development plan, **not a release plan**. No dates, public releases, shipping commitments, or feature-freeze promises. **Version 0** is an open research/design era. Stage numbers are work checkpoints, not software versions and not an obligation to implement the next stage.

A checkpoint becomes accepted only when the human project owner explicitly approves its demonstrated evidence. A failed playtest may reopen any earlier decision. Keep design alternatives and discarded hypotheses recorded; do not substitute a larger feature list for proof of fun.

## Existing repository bootstrap — B0 (historical)

This repository has TypeScript/npm workspaces, a separate headless package, PixiJS/Vite, pinned dependencies, and passing real-browser pixel tests. **R0 was integrated on main at `c0d2b468f8e5a706ed8af0773f52545c618f7312`**, with passing CI [run 42733121763](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/actions/runs/42733121763). Its development-state identifier is `0.0.0.1/SF-0001`; **it is not a release and not a playable game**. The design stages below remain separate experiments.

## Stage 0 · Version 0 — Define the game in documents

**Purpose:** make the smallest coherent *planned* contract set explicit before we implement gameplay.

**Deliverables**
- [x] A working vocabulary that distinguishes Adventure, Venue, Level, Room, Stage, Set, Shot, Play, Scene, Production, Performance and Run: [terminology](TERMINOLOGY.md).
- [x] Planned boundaries, data ownership and compatibility invariants: [version-zero contracts](contracts/V0_PLANNED_CONTRACTS.md).
- [x] The player heartbeat, ghost economy and Director policy, cast reactions, outcomes, rehearsed and improvised dialogue: [gameplay specification](design/V0_GAMEPLAY.md).
- [x] A Stage 1 art decision protocol: [art direction exploration](design/STAGE1_VISUAL_DIRECTION.md).
- [ ] Review and reconcile these documents with the [original draft GDD](design/STAGE_FRIGHT_DESIGN_v0.1.md).
- [x] Publish a source-pinned independent [six-agent review handoff](reviews/STAGE0_SIX_AGENT_HANDOFF.md).
- [ ] Receive and preserve six independent first-pass reports; maintain [review intake](reviews/STAGE0_REVIEW_INTAKE.md).
- [ ] Publish reconciliation with dissent intact before approving gameplay contracts.
- [ ] Resolve or explicitly defer the blocking open questions; distinguish **proposed**, **adopted** and **experiment** decisions.
- [ ] Record falsifiable acceptance examples and negative cases for every contract before implementation.

**Exit evidence:** the owner can describe one small playable Adventure and the interactions/contracts required to run it, without mistaking an illustration for a settled API. No gameplay implementation required. Any numerical tuning remains provisional.

**Non-goals:** implementing AI, creating art assets, writing episode tooling, choosing a release window, or freezing all future interfaces.

## Stage 1 — Choose a visual language, then validate it

**Purpose:** decide how the *first Adventure* should look and feel, without baking art style into gameplay rules.

**Work**
- Explore fixed-camera, layered 2.5D composition using pixel art as the anchor.
- Compare at least two coherent candidates (e.g., wholly pixel-painted rooms and pixel sprites over painterly plates) at the **same readability requirements**.
- Choose tentative world scale, character proportions, walk-plane treatment, lighting/occlusion conventions, visible ghost tells and interaction feedback.
- Select the first Adventure's tentative **Rooms, Shots, Set variations and Play Scenes** as separate design choices (see the art exploration).
- Define a versioned **Visual Profile / Art Pack** boundary so one Adventure can use different assets and aesthetics than another; no simulation rewrites.
- Inspect visual mockups at target play sizes; test whether a player can recognize a person, hazard, interactable and cue.

**Exit evidence:** reviewed style guide plus a coherent small asset/Shot test demonstrating legibility and atmosphere. **No requirement to deliver a finished episode or full art pipeline.**

## Stage 2 — Find the moment-to-moment fun

**Hypothesis:** moving, observing, inspecting and adjusting a mechanism while the clock advances is enjoyable without a reward treadmill.

**Smallest experiment:** a navigable Room, one meaningful mechanism, one legitimate cue and one suspicious deviation. No complex ghost or dialogue AI required.

**Gate:** players can distinguish observation from assumption, intentionally choose to act or refrain, and explain a consequence. If this is dull, change the loop before adding systems.

## Stage 3 — Make a Play actually play

**Hypothesis:** rehearsed dramatic structure with contingency beats creates satisfying unscripted outcomes.

**Experiment:** one actor in one role, a short Play with real Scenes/Beats/Cues, one ordinary fault, several context-appropriate line variations, and a possible canceled performance.

**Gate:** the show is legible when normal, late, interrupted or improvised; line selection never gives NPCs knowledge they lacked.

## Stage 4 — Give the House strategic agency

**Hypothesis:** a rule-based Ghost Strategist constrained by an independent Director pacing policy creates fair, escalating tension.

**Experiment:** a bounded legal action catalog, Power/Rage, cost-on-commit, causal attribution, warnings, independent normal faults and replay logs.

**Gate:** foiling an attack always counts; the ghost cannot invent resources, know hidden plans or compensate automatically for a clever player.

## Stage 5 — Make survival and relationships matter

**Hypothesis:** character Health, Fear, Trust and prop Integrity produce interesting priorities rather than extra meters.

**Experiment:** observable near-misses, injuries and damaged props; cast rescue, refusal and backstage communication.

**Gate:** protecting lives can conflict with maintaining the show; NPC choices remain local, motivated and explainable.

## Stage 6 — Make the ghost vulnerable

**Hypothesis:** an optional investigation-and-binding route adds a distinct strategic loop without requiring combat mechanics.

**Experiment:** discover clues, identify an anchor, prepare a trap using existing verbs, suppress Power regeneration and resolve containment or escape.

**Gate:** both the defensive curtain-call route and the binding route are viable. The ghost can defend itself without omniscience.

## Stage 7 — Prove modular Adventures

**Hypothesis:** the core can host distinctly authored content without rebuilding gameplay systems.

**Experiment:** assemble a **second** valid Adventure from compatible Play, Venue, Cast, Haunting, dialogue and art modules; deliberately exercise one alternate Visual Profile.

**Gate:** incompatible modules fail loudly before play; neither Play scripts nor art packs own simulation logic. Same simulation, different experience.

## Stage 8 — Evidence-driven revision

**Purpose:** replay many seeds, record what is fun, unfun, unfair, opaque or expensive; revisit Stage 0–7 assumptions.

**Gate:** reproducibility, negative cases and observed player experience justify the next experiments. This stage may loop backward indefinitely.

## Future exploration — deliberately unscheduled

Online cooperation, authoritative servers, richer physical destruction, mobile packaging, localized voice work, third-party Adventure tooling, custom ghost archetypes, user-authored Plays, and possible public distribution.

**There is no release stage, date, or commitment in this roadmap.** The owner decides if and when one is appropriate.

## Process for changing the roadmap

For any gate: record the hypothesis, smallest test, observed evidence, retained decisions, rejected alternatives, unresolved questions and regression risk. No stage automatically ratifies the next. Preserve working prototypes, avoid unasked-for rewrites, and document compatibility consequences of interface changes.
