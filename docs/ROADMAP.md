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
- [x] Record reconciliation with the [original draft GDD](design/STAGE_FRIGHT_DESIGN_v0.1.md); its CP0–CP5 sequence and larger first-playable checklist are historical integration proposals, not prerequisites for Stage 2.
- [x] Publish a source-pinned independent [six-agent review handoff](reviews/STAGE0_SIX_AGENT_HANDOFF.md).
- [x] Receive and preserve six independently authored first-pass reports; maintain [review intake](reviews/STAGE0_REVIEW_INTAKE.md). **Collection complete; original reports and dissent remain preserved.**
- [x] Record [six-review reconciliation](reviews/STAGE0_RECONCILIATION.md) with source pins, Adopt / Reject / Defer / Experiment dispositions, dissent and focused follow-up questions. Planning adoption does not ratify executable contracts.
- [ ] Close the reconciliation's remaining gates: [Gate 1 authority proposal](reviews/STAGE0_GATE1_RECONCILIATION_PROPOSAL.md) and [Gate 2 chandelier fixture](design/STAGE0_GATE2_CHANDELIER_MECHANISM.md) were merged as **provisional design documentation** in PRs #18–20. Their post-merge alignment provides explicit **paper** tick/observation/interlock traces; formal acceptance, runnable tests, Ghost settlement/numerics, Bell/Beat execution and concrete bindings remain open at named later gates.
- [ ] Record falsifiable acceptance examples and negative cases for every contract before implementation.

**Stage 0 remains open.** No implementation, art-production or release authority follows from SF-0004.

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
- Use the judgment fixture's actual evidence requirements to compare the same mechanism/Shot in both styles at target play sizes. Test person, hazard, interactable and Cue recognition, accessible alternatives and atmosphere separately from fixed-command simulation parity. Do not require identical human choices.
- Treat selection as provisional through Stage 2. If both styles obscure essential evidence, reopen the visual direction; no full asset pipeline or generalized Art Pack loader is required.

**Exit evidence:** reviewed style guide plus a coherent small asset/Shot test demonstrating legibility and atmosphere. **No requirement to deliver a finished episode or full art pipeline.**

## Stage 2 — Find the moment-to-moment fun

**Hypothesis:** moving, observing, inspecting and adjusting a mechanism while the clock advances is enjoyable without a reward treadmill.

**Selected experiment:** [single-mechanism judgment experiment](design/STAGE2_JUDGMENT_EXPERIMENT.md): one navigable Room, one mechanism, one scheduled Cue, two mundane conditions (authorized revision versus ordinary fault) with similar initial symptoms and reachable discriminating evidence. No autonomous Ghost, Director runtime, Power/Rage, binding or generalized dialogue/content system. A passive performer can make the consequence legible.

**Gate:** players can use evidence to choose action or restraint and understand proportionate consequences; compare trivial strategies using controlled/held-out cases and pilot-calibrated criteria. Distinguish mechanical correctness from human comprehension/enjoyment. If the loop fails, diagnose and revise observation/interaction before expanding systems. One mechanism cannot establish sustained horror, competing-task priorities or whole-game quality; inspecting the only mechanism is not itself failure.

## Stage 3 — Make a Play actually play

**Hypothesis:** rehearsed dramatic structure with contingency beats creates satisfying unscripted outcomes.

**Experiment:** one actor in one role, a short Play with real Scenes/Beats/Cues, one ordinary fault, several context-appropriate line variations, and a possible canceled performance.

**Gate:** the show is legible when normal, late, interrupted or improvised; line selection never gives NPCs knowledge they lacked. Impossible Beats resolve through explicit fallback/failure/cancellation, never forced Actor compliance or indefinite waiting. Test dramatic credibility, repetition and authoring effort separately from semantic correctness. Test Fifth Bell request/acknowledgment/cancellation separately from actual evacuation.

## Stage 4 — Give the House strategic agency

**Hypothesis:** a rule-based Ghost Strategist constrained by an independent Director pacing policy creates fair, escalating tension.

**Experiment:** begin with one costed physical intervention, bounded perception, a simple precommit Director eligibility gate, causal settlement and a matched mundane/no-Ghost control. Expand the action catalog only for distinct decision value. Power/regeneration/Rage remain game direction; explicitly label any reduced fixture that postpones Rage rather than silently deleting it. Prices, rates and five-tier breadth remain provisional.

**Gate:** foiling an attack always counts; the Ghost cannot invent resources, know hidden plans or compensate automatically for a clever player. Prove unique outcome claims, partial-result accounting, exact replay identity and consequence-based reachable counterplay. A cheap action may cause severe ordinary physical harm; price is not a fairness classification.

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

**Gate:** concrete Role/Actor, Cue/mechanism, staging/Room, Ghost-reach and semantic-signal bindings work without core rewrites. Incompatible and ambiguous compositions fail before play. Third-party data/assets cross a validated bounded loading boundary. Art parity and human perceptual usability are separate gates; universal permutations and a content editor are not required.

## Stage 8 — Evidence-driven revision

**Purpose:** replay many seeds, record what is fun, unfun, unfair, opaque or expensive; revisit Stage 0–7 assumptions.

**Gate:** reproducibility, negative cases and observed player experience justify the next experiments. This stage may loop backward indefinitely.

## Future exploration — deliberately unscheduled

Online cooperation, authoritative servers, richer physical destruction, mobile packaging, localized voice work, third-party Adventure tooling, custom ghost archetypes, user-authored Plays, and possible public distribution.

**There is no release stage, date, or commitment in this roadmap.** The owner decides if and when one is appropriate.

## Process for changing the roadmap

For any gate: record the hypothesis, smallest test, observed evidence, retained decisions, rejected alternatives, unresolved questions and regression risk. No stage automatically ratifies the next. Preserve working prototypes, avoid unasked-for rewrites, and document compatibility consequences of interface changes.

## Cross-cutting gates and later integration

Pause/suspension freezes single-player simulation without wall-clock catch-up; already acquired notes cannot reveal new observations while paused. Replay identity, safe completed-tick checkpoints and non-destructive incompatibility handling are separate responsibilities. Full persistence remains deferred; a restart-only toy must disclose its limitation. Before save support, verify pending effects and failed writes against uninterrupted runs.

The larger **Last Waltz integrated Adventure** follows the relevant successful experiments; it is not the first judgment test. Its duration, mechanism/Beat counts and binding inclusion remain revisable. Stage 5–6 stakes and binding, sophisticated Director behavior, continuous psyche tuning, large dialogue catalogs, generalized loaders/editors and additional packages are deferred to demonstrated need. No deletion of protected game direction is implied.

For the next review, ask the original authors whether concrete revised rules resolve their counterexamples. Preserve their first passes and any remaining objection. These follow-ups have not yet been dispatched or approved.
