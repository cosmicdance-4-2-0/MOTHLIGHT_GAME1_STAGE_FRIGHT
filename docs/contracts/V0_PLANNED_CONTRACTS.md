# Stage Fright — Planned Contracts, Version 0

**Status: DESIGN ONLY; reconciled planning requirements in SF-0004.** These are contract intentions, not implemented TypeScript APIs, verified runtime invariants, or accepted executable schemas. The [reconciliation](../reviews/STAGE0_RECONCILIATION.md) controls the addressed decisions and identifies remaining adoption gates. Stage 0 is documentation and falsifiable examples; there is no code change authorized by this document.

## Authority and dependency direction

```text
Player commands        NPC intentions         Ghost intentions
       \                   |                       /
               deterministic command resolver
                             |
                  world & performance state
                             |
           causal events + authoritative snapshots
                   /                       \
             replay/logs              presentation
                                         (PixiJS)
```

The fixed-step world resolver decides legal actions and consequences. Neither renderer nor dialogue can directly invent damage, award ghost Power or change a required Play Beat. A multiplayer server later may host this same resolver.

## Contract inventory

| ID | Owner | Planned inputs / outputs | Invariants / explicit tests |
| --- | --- | --- | --- |
| **C00 RunClock** | Core | Fixed tick, current authoritative state, deterministic step result | Rendering cadence cannot advance or skip simulation ticks. |
| **C01 Command/Event** | Core | Ordered issuer-validated, actor-identified commands; validated actions; causal events with IDs/ticks/reasons | Unsupported, stale and conflicting commands have defined resolution, never silent success. |
| **C02 World Entity** | World | Stable entities, Room/Level positions, affordances, operating state, integrity, hazard transitions | Operating state ≠ integrity; a valid mechanism change creates world effects before any NPC/ghost reward. |
| **C03 Player Verbs** | Player interface | Move, Inspect, Operate/Adjust, Communicate, Use/Place | Same underlying verb applies across props; read-only lookups differ from timed local Inspect, which can update permitted observations while the world advances. |
| **C04 Ghost Strategist** | Ghost | Perceived facts, eligible actions, Power/Rage, goal weights, memory | Power is spent on commitment, no negative Power, no invented senses, causal once-per-incident rewards. |
| **C05 Director Policy** | Pacing | Observable intensity state, eligibility window, recovery constraints | Initially gates eligibility before commitment; cannot fabricate, retarget or reschedule committed incidents to negate counterplay. |
| **C06 NPC Actor/Role** | Cast | Actor traits/Health/Fear/Trust/knowledge; Play Role obligations; local observations | NPCs cannot know unobserved ghost actions or speak while incapacitated; refusal need not imply panic. |
| **C07 Play/Show** | Dramaturgy | Acts, Scenes, Beats, Cues, rehearsal baseline, contingencies and outcome gates | Legitimate late/mistaken cues exist; performance can continue via authored fallback or fail explicitly. |
| **C08 Dialogue** | Dialogue | Authored lines by intent, prerequisites, actor knowledge, urgency, cooldown | Stable variant IDs, deterministic choice, interruption, silence/fallback; no LLM. |
| **C09 Adventure Composition** | Content | Manifest pins, Play/Venue/Cast/Haunting/Production/Art Pack/rules, capability map | Reject absent required capability; no hidden import of executable third-party game logic. |
| **C10 Presentation** | PixiJS adapter | Observed snapshots/events, Room/Shot and Art Pack assets, input-to-command mapping | Camera change is not a world action; renderer cannot make damage or change the clock. |
| **C11 Replay / Continuation** | Core & storage adapter | Seed/PRNG state, version pins, ordered command trace, state/event hashes | Exact supported inputs reproduce authoritative replay; continuation additionally requires a valid completed-tick checkpoint and non-destructive incompatibility handling. |
| **C12 Future multiplayer** | Later authority adapter | Commands identified by acting entity and tick, validated ownership/permissions | No implicit global singleton player; multiplayer not implemented in Version 0. |

## C00–C02: simulation and physical consequences

A `step` advances exactly one configured simulation tick. Its planned inputs are current state, ordered commands and explicit PRNG state. Its outputs are new state and zero-or-more identified events. Event history records *causal chain*, not just end-state deltas.

Entity state separates `health` or `integrity` from `operatingMode`, `restraints`, `attachments` and `load`. Early impact/hazard resolution may be discrete. Later visual physics must not silently override authoritative outcomes.

**Negative tests to specify:** double-application of a command, invalid target, destroyed prop still operable, identical ordered input producing two different outcomes, and damage with no causal world event.

## C04–C05: Power, Rage, Ghost, and Director

The Ghost is a bounded resource-owning antagonist. It may wait to regenerate Power, spend Power to affect legal physical targets, earn capped Power from realized attributable outcomes, and gain Rage when a committed plan is prevented. Rage accelerates *future regeneration*, not damage. Every planned action defines preconditions, cost, hint/telegraph, execution and outcome attribution. Costs and regeneration figures are **tunable data**, not committed constants.

The Director is a separate policy inside the opposition system: it can regulate pressure cadence and recovery but never rewrite the world's truth or force an attack's success. Ghost knowledge must arise from defined senses and observations. The AI can be tactical without being omniscient.

Binding is a distinct state: once a valid authored containment mechanism is assembled/activated, normal regeneration and success rewards cease while it remains intact. The trap itself must impose a drain or another deterministic pressure so the ghost cannot win by refusing to act. At Power zero during valid binding, the haunting's resolution determines whether it is contained, banished or destroyed. Ordinary Power zero without binding is merely exhaustion.

**Negative tests to specify:** costs unpaid, double rewards from one incident, Rage giving free energy, Director creating a replacement attack after a player succeeds, hidden player inventory leaked into ghost knowledge, and trapping a powerless ghost without any valid containment setup.

## C06–C08: NPCs, the Play, and dialogue

An **Actor** is an NPC person; a **Role** is a character in a **Play**. Their relationship is expressed by a Production, not hardcoded into Actor logic. The Play declares rehearsed truth: cue schedule, intended mechanical effects, Scene/Beat obligations, and authorized contingency routes.

An Actor must decide from perception, knowledge, physical ability, Fear and Trust. A scene's rehearsed line and its improvised replacements are separately authored Dialogue Variants. Selection is deterministic among lines whose observations, Role, Beat, tone and knowledge requirements are met. Valid outcomes include a late cue, a plausible improvised line, an interruption, backstage speech or meaningful silence.

**Negative tests to specify:** an Actor states a ghost caused a fault without evidence; a Role speaks after leaving the production; a broken required cue has no defined failure/contingency result; a player can force an injured Actor through impossible choreography.

## C09–C10: Adventures, art and camera

A player selects an **Adventure**, not an arbitrary shuffled collection of incompatible files. Every manifest references individually versioned modules, declares required capabilities and resolves explicit compatibility before start. A Play can request a `suspended.fixture`; a Venue may provide one. Unmet mandatory requirements reject the combination unless a documented fallback exists.

Art style is assigned by a **Visual Profile** and **Art Pack**, normally selected per Adventure/Production. Additional per-Room/Set/Shot variants may be allowed only with a clear precedence rule. Two Adventures may have the same mechanics and drastically different visuals. Art supplies representations and fair telegraphs but cannot modify physics, action costs, AI senses or NPC knowledge. A visual asset mismatch is a validation error or deliberate documented fallback, never a silent gameplay change.

`Room` is a physical navigation entity; `Shot` is its camera framing; `Scene` is a Play unit. Shots may obscure but cannot eliminate every available warning for an unavoidable lethal hazard.

## C11–C12: reproducibility and future hosts

A `RunRecord` should pin the Adventure, content schema revisions, tuning/hash, initial state, PRNG state, ordered commands, and authoritative event trace. Browser and Node runs must be tested for equivalent logical output before claiming cross-runtime determinism. Input ordering and numeric representation must be explicit. Network transport remains outside core.

## Decision policy and open questions

Each contract receives a later status: **Proposed / Experiment / Adopted / Superseded**, with rationale, tests and a source revision. Any adopted change to an interface requires compatibility analysis. Unknowns intentionally left open include numeric Power/Rage balance, replay storage format, numeric physics model, local navigation representation, dialogue localization schema, asset-pack dependency syntax, and multiplayer transport.

**Stage 0 completion is not implementation approval.** Acceptance requires reviewing each contract's responsibility, invariants, negative cases and intended collaboration with the others.

## SF-0004 contract refinements and open implementation gates

| Contracts | Selected planning requirement | Required before affected implementation |
| --- | --- | --- |
| C00/C01 | One tick authority; Show progression derives from it. One resolver validates issuer, actor, target, range, ability, intended tick and causal identity. Content identifiers confer no command authority. | Full phase/conflict table including same-tick Cue/player/Ghost actions, duplicates, invalid inputs, affordability/regen, Bell/harm and binding ties. Reconciliation's dependency table is not a complete algorithm. |
| C03/C10 | Already available information may be read; physical Inspect consumes explicit local opportunity and reveals accessible evidence only. Operational danger and ultimate causal attribution are different questions. | Concrete observation windows and action costs; paused UI cannot acquire new evidence. Define cue-book interaction and supported modalities. |
| C00/C03 | Explicit single-player pause, options/accessibility and suspension freeze simulation; no wall-clock catch-up. | Boundary behavior for entering/resuming pause and pending input; multiplayer deferred. |
| C02/C05/C10 | Fairness follows actual hazard severity and reachable prevention/mitigation/escape, or a documented earlier informed exposure choice. | Spatial/time/knowledge counterexample plus usable warnings in each supported presentation mode; no universal reaction-time constant. |
| C04/C05 | Perception projections constrain Ghost strategy. Director initially returns precommit eligibility/pacing constraints; privileged safety veto cannot leak tactical targets. Committed effects obey world rules. | Paired hidden-state tests and exact allowed projections; postcommit exceptions need an explicit later rule. |
| C01/C04 | Debit once at commitment; causal events and unique outcome claims settle under one declared rule. No ordinary-fault rewards or cascading duplicate payouts. | Partial/shared outcomes, caps, refund/cancel policy, Rage/reward combination, numeric semantics, binding/zero/seal-break precedence. |
| C06–C08 | Actor owns intentions subject to ability/knowledge; Show owns obligations and consumes resolved events. Impossible mandatory Beats terminate or take an authored fallback; holds are explicitly bounded. | Transition examples for injury, refusal, silence, missing fallback and cancellation. Dialogue correctness and dramatic credibility tested separately. |
| C01/C07 | Fifth Bell request and acknowledgment differ from cancellation and physical evacuation; no retroactive safety. | Acceptance, same-tick order and independent terminal outcome examples. |
| C09/C10 | Production binds Role→Actor, Cue→mechanism, staging→Room; verify Ghost reach and semantic signal coverage. Future third-party content is bounded validated data/assets. | Concrete compatible and ambiguous/invalid examples; general loader/editor and broad package splitting deferred to need. |
| C11 replay | Exact content/rules, initial state, effective command ordering, PRNG algorithm/state, tick/numeric semantics and canonical hashes define reproducibility. Presentation randomness cannot affect rules; unrelated dialogue variation must not alter Ghost strategy. | Choose numeric, RNG separation and encoding conventions and verify supported hosts. Project ChangeID and content/replay schema versions have distinct roles. |
| C11 continuation | A checkpoint is a fully completed tick with pending work and exact identities. Failed saves retain a valid predecessor; incompatibility preserves data and explains recovery options. | Storage-specific atomicity and stop/resume/failure tests when persistence is scoped. No save framework required for a declared restart-only toy. |

Art Pack compatibility requires fixed-command mechanical parity **and** usable evidence in real viewing/control conditions. These gates do not require identical human behavior. The first concrete content fixture is the [mundane judgment pair](../design/STAGE2_JUDGMENT_EXPERIMENT.md); it does not require every conceptual owner to become a package. C12 multiplayer implementation remains deferred. All negative cases are specified future checks, not results.
