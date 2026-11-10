<!-- Imported working draft. Its final 'no repo modified' line describes original authoring, not this repository import. -->

# STAGE FRIGHT
## Game Design & Systems Specification — v0.1 (Draft)

**Authoring perspective:** Mothlight — The Invisible Stagehand  
**Date:** 2026-11-09  
**Status:** Historical initial proposal; not an implementation or an approved production specification. For current planning decisions use [SF-0004 reconciliation](../reviews/STAGE0_RECONCILIATION.md) and the [roadmap](../ROADMAP.md). The body is preserved for provenance; superseded starting positions are not parallel requirements.
**Primary focus:** Ghost/Director, player loops, NPCs, Plays, dialogue, and modular content  
**Intended platform strategy:** TypeScript simulation core; PixiJS presentation initially; Node.js headless runner; other clients later

> **Pitch:** You are a stagehand in a haunted theater. The theater wants its performances ruined, its cast terrified, and—when the opportunity arises—you dead. Keep the show alive, or investigate the haunting, build a trap from stagecraft, and bind what lives in the walls.

## 0. Design status and decision ledger

This document consolidates our current design discussion. It distinguishes **established direction** (the intended game) from **proposal** (a recommended mechanism requiring testing) and **open questions**. All numeric tuning values are provisional configuration data; none are implied to be final balance.

**Established direction**

- Single-player first; build toward cooperative multiplayer without assuming a single acting human in the core simulation.
- One authoritative, deterministic, fixed-step rules simulation, independent of rendering and sound; no LLM in gameplay.
- The player is a physically present stagehand, not an omnipotent management cursor.
- The theater is genuinely hostile. The ghost aims to spoil performances, terrify or injure people, and may attempt to kill the player.
- Ghost Power is spent on supernatural interventions; Power regenerates over time and can be earned from achieved outcomes. Thwarted plans increase Rage, which accelerates regeneration.
- The performance is a real unfolding production. Its legitimate planned effects may resemble hauntings. Not every anomaly is hostile.
- At least two broad completion strategies: **preserve the performance** or **investigate and bind the haunting**; evacuation is a meaningful emergency outcome.
- Replayable episodes/adventures are selectable, modular packages.
- Visual direction: fixed-camera / authored 2.5D compositions, pixel art, layered theater sets, PixiJS as the initial renderer.

**Principal proposals to test**

- A two-policy Ghost Director: a hostile decision-maker inside a bounded pacing system.
- Five tiers of supernatural action, with explicit costs, constraints, cues, and counterplay.
- Distinct player/actor Health, actor Fear and Trust, prop Integrity and Operating State.
- Authored dialogue selected deterministically from context, with rehearsed lines, contingencies, and backstage conversations.
- A binding state that suppresses regeneration and steadily drains Power until either containment breaks or the ghost is bound.

**Non-goals for the first playable build:** procedural theater generation; fully dynamic English conversation; full-body rigid physics; sophisticated NPC pathfinding; online multiplayer; open-world navigation; elaborate meta-progression; a universal content creation editor.

## 1. Experience promise and design pillars

**Fantasy:** You know how a theater works. Something in the theater knows how *you* work. With a cue book, tools, and partial information, you keep people performing through escalating supernatural interference.

**Pillars**

1. **The show is alive.** A Play advances regardless of whether the player is ready. Its actors, cue timings, improvisations, and failures create an ongoing dramatic situation.
2. **Knowledge is leverage.** Learn mechanisms, interpret warnings, distinguish legitimate effects from tampering, and make interventions that actually matter.
3. **The House watches.** The ghost observes through defined senses, forms bounded plans, conserves Power, exploits patterns, and responds when thwarted.
4. **Everything has consequences.** Cast confidence, injuries, prop damage, lost time, depleted ghost Power, and compromised equipment persist within a run.
5. **The player chooses the ending.** Preserve the show, attempt the dangerous binding route, or stop the performance and save what can be saved.
6. **An adventure is a composition.** Plays, stages, cast, hauntings, equipment, and dialogue are individually authored modules joined through explicit capability contracts.

**Tone:** Evolving mystery and existential terror mixed with theatrical wit. A cue can be funny in rehearsal, frightening when altered, and heartbreaking when an actor insists on delivering it anyway. Humor should sharpen the tension, not negate the threat.

## 2. Terms and content hierarchy

| Term | Meaning | Ownership |
| --- | --- | --- |
| **Play** | The authored theatrical work: roles, scenes, rehearsed dialogue, required dramatic beats, intended stage cues, contingency lines, and endings. | `PlayDefinition` |
| **Venue** | Navigable theater layout, cameras, walk zones, stage machinery, prop interfaces, access routes, sensory topology, and physical hazards. | `VenueDefinition` |
| **Cast** | Actors cast into Play roles, with personality, capacities, preferences, fear/trust behavior, and authored voice/dialogue tags. | `CastDefinition` |
| **Haunting** | Ghost identity/archetype, powers, senses, preferences, anchor, clue network, and binding rules. | `HauntingDefinition` |
| **Adventure** | A validated combination of Play, Venue, Cast, Haunting, dialogue pack, rules profile, and scenario setup. What the player selects. | `AdventureManifest` |
| **Episode** | A player-facing, named Adventure release, such as *The Last Waltz*. | Catalog / UI |
| **Run** | One specific performance of an Adventure, including initial state, seed, commands, events, and outcome. | `RunRecord` |
| **Scene / Beat / Cue** | Scene: portion of a Play; beat: dramatic requirement or contingency; cue: scheduled or contingent operation performed by cast or machinery. | Play + Show Controller |
| **Incident** | One attempted ghost plan and its consequences, tracked by causal ID for Power rewards and Rage. | Ghost + Event Resolver |

**Critical distinction:** A Play is not a room, and a Ghost is not a script. A haunting may alter the same production across runs. Alternate cast and venue combinations are allowed **only when declared compatibility requirements are satisfied**; universal interchangeability is not promised.

## 3. Player-facing game loops

### 3.1 The heartbeat: Observe → Interpret → Intervene → Witness

The player spends most time **moving through a small backstage environment, observing the show and machinery, inspecting clues, and operating equipment**. The Show Controller keeps advancing.

1. **Observe:** Notice a changed sound, early cue, actor reaction, moving prop, unexpected darkness, or suspiciously normal silence.
2. **Interpret:** Compare what happened against visible rehearsal information, mechanism state, what the actor knows, and the current scene. An anomaly can be legitimate, accidental, or ghost-induced.
3. **Intervene (or refrain):** Move; inspect; adjust a control; brace a prop; change a cue; call to a performer; repair a mechanism; evacuate a danger zone. Inaction is valid and occasionally optimal.
4. **Witness:** See a resolved physical consequence, changed cast behavior, altered performance, expended ghost resources, or exposed clue. Update the player's understanding.

**Early interaction vocabulary:** Move, Inspect, Operate/Adjust, Communicate, and Use/Place a carried item. Reuse these verbs everywhere; don't introduce a bespoke minigame for each prop.

**Fun source:** Prior knowledge pays off under time pressure. The player is rewarded for identifying a problem correctly, acting at the right moment, and sometimes recognizing that *nothing needs fixing*. A player who solves a threat early should not receive an invented replacement threat simply because the game wanted a scare.

### 3.2 Three overlapping strategic loops

| Loop | Player question | Steps | Short-term reward | Risk |
| --- | --- | --- | --- | --- |
| **Showkeeping** | Can the performance continue? | Monitor cues → diagnose → adjust/repair → preserve performer confidence | Next beat plays; show integrity preserved | Time, disruption, making a false-positive repair |
| **Survival and rescue** | Who is about to be hurt? | Read hazard → warn or reposition → disable/redirect → tend to injuries | People survive, trust increases | Personal exposure; abandoned performance duty |
| **Investigation and binding** | Can I stop the ghost? | Collect evidence → form hypothesis → identify anchor → prepare vessel → expose/contain/drain | Permanent or run-long neutralization | Time, materials, compromised cast safety; ghost counterattack |

The player can switch between loops mid-run. Researching an anchor can cost precious showkeeping time. A planned binding can turn into an evacuation. A purely defensive run is valid.

### 3.3 Rhythm across time scales

- **Seconds:** Notice a cue, cross a room, throw a switch, avoid a hazard.
- **Tens of seconds:** Inspect, diagnose, resolve an incident, or stabilize a performer.
- **Minutes:** Survive a scene, change an improvisation route, prepare a containment component.
- **Run:** Complete or stop the Play, contain the ghost, save lives, learn new facts.
- **Between runs:** Choose another Adventure, replay a seed, compare outcomes, or revisit a known Play with different constraints. Avoid progression that makes old episodes trivially safe.

The player's UI should show understandable **production information** (current scene, upcoming cue, accessible cue-book notes, observed cast state) without displaying the ghost's private intentions or raw Power meter by default. Developer/debug modes may expose the full state.

## 4. The Ghost / Director mechanic

### 4.1 One antagonist, two separable policies

The player encounters **one hostile House**. Internally, two deterministic policies cooperate:

- **Ghost Strategist:** Tries to achieve the haunting's goals, ultimately including show collapse and potentially lethal attacks. It chooses targets and legal plans, values Power, remembers observed counterplay, and reacts to binding threats.
- **Director / Pacing Policy:** Governs *when* eligible pressure may be applied, establishes recovery opportunities, controls encounter intensity bands, and protects minimum fairness/telegraph rules. It is a constraint system, not a second omnipotent intelligence that forces results.

Thus the ghost can be genuinely murderous while the experience remains legible and replayable. The Director can withhold an opportunity or adjust the timing of a plan, but **cannot create an illegal action, retroactively move a clue, reverse a successful intervention, or guarantee a death**.

### 4.2 Ghost knowledge and senses

The ghost may observe only through defined **hauntable zones, anchor links, possessed fixtures, manifestations, and audible/physical events**. It retains observed facts, such as "the stagehand repaired this winch twice," but does not read hidden player objectives or unobserved inventory. Evidence of ghost surveillance may itself be detectable: a watchful mirror, a moving switch before the player touches it, or repeated targeting of a habitual route.

A deterministic plan evaluator may consider: available Power; Rage; observed player location/actions; accessible target states; current Play beat; estimated actor vulnerabilities; probability of counterplay based on remembered observations; and whether its anchor is threatened. Estimate uncertainty explicitly. Avoid pretending the AI knows what it has not observed.

### 4.3 Power, Rage, and the economy

**Proposed defaults for early balancing** (all in data, per haunting/difficulty):

| Parameter | Proposal | Purpose |
| --- | ---: | --- |
| Power range | 0–100 | Spendable supernatural energy |
| Starting Power | 18 | Allows low-tier early activity |
| Rage range | 0–100 | Increases replenishment speed, not direct damage |
| Starting Rage | 20 | Mild initial recovery |
| Passive regeneration | `6 × (1 + Rage / 100)` Power/minute | 6–12/minute, capped by reservoir |
| Thwarted committed plan | +10 Rage | Future recovery increases; already-spent Power stays spent |
| Outcome reward | Max +12 Power per incident | Rewards ghost-attributable success without cascading farming |
| Rage decay | Configurable, initially very slow or absent within a short run | Prevents arbitrary tactical forgetting |

**Economic rules:**

- Power is deducted when an action commits, even if the player defeats its consequence.
- Rewards are paid **once per causally attributed incident**, at its resolution. Never pay repeatedly for the same lingering fear, damaged prop, or downstream cue failure.
- A successful plan can earn a reward; it need not be profitable after cost. A large disaster may be tactically worthwhile even if net Power decreases.
- At 0 Power while unbound, the ghost is **exhausted**, not dead; passive regeneration resumes.
- Rage is neither a second fuel nor a free damage multiplier. It cannot be spent to circumvent Power costs.
- At capped Power, waiting stops increasing reserves, creating an opportunity cost to indefinite patience.
- Ghost resource accounting and physical outcome attribution are inspectable in replay logs, not disclosed in normal play.

### 4.4 Capability ladder

| Tier | Nominal cost | Capabilities | Counterplay requirement |
| --- | ---: | --- | --- |
| **I — Presence** | 6 | Whispers, cold drafts, dust movement, faint prop tremors, misleading sound | Observable source or pattern; low physical risk |
| **II — Interference** | 15 | Small-object displacement, accessible switches, unlocked doors, light controls | Physical access/preconditions; inspectable changed state |
| **III — Sabotage** | 28 | Jam a winch, release a restraint, overload a fixture, exploit pre-existing damage | Detectable setup or mechanical warning; real preventive action |
| **IV — Manifestation** | 48 | Brief localized sustained force, destructive intervention, direct character threat | Warned/locatable event with defensible escape or mitigation |
| **V — The House Awakens** | 75 | Major coordinated multi-system crisis, room-scale manifestation | Expensive, committed, signaled, and physically defeatable/escapable |

Tier is **not damage severity**. A Tier II action can cause a lethal accident by releasing stored ordinary mechanical energy. High-tier attacks cannot arbitrarily ignore safe supports or reposition characters. Costs are examples, not authorization to trigger an action with false physical preconditions.

**Every action definition requires:** ID/version; target type and scope; sensory visibility; physical preconditions; Power cost; startup/commit/resolution timing; minimum warning rule; candidate effects; interrupt conditions; recovery/cooldown; reward attribution; optional dialogue/event tags; and deterministic tie-break order.

### 4.5 A deterministic decision cycle

1. Advance world and Show Controller on the fixed simulation tick.
2. Update ghost senses and memory from only permitted observations.
3. Enumerate currently legal actions/plans.
4. Reject plans that exceed Power, fail physical preconditions, violate pacing/fairness rules, or target inaccessible entities.
5. Score plans by ghost-specific preferences: expected show disruption, fear, injury, Power return, exposure risk, and threat to the haunting's anchor.
6. Apply configured deterministic tie-breaks/seeded random selection among eligible candidates.
7. Commit cost, publish discoverable warnings, execute through ordinary world operations, and resolve effects.
8. Pay once-per-incident rewards or Rage, update tactical memory, and repeat.

The Director's pressure curve alternates opportunities and recovery without being a fixed difficulty escalator. It may permit silence; sometimes the ghost waits. The ghost's actual goal remains hostile.

### 4.6 Failure, exhaustion, binding, and ghost self-preservation

The binding route adds a **new adversarial problem**: the ghost can become afraid of the stagehand.

- **Free:** Power regenerates; ghost plans normally.
- **Exhausted:** Power is zero; no affordable intervention, but regeneration continues.
- **Bound-in-progress:** A discovered/constructed vessel and anchor arrangement have been activated. Regeneration and success rewards are suppressed *while the binding remains valid*. Containment automatically drains remaining Power at a configurable rate (initial proposal: **45 Power/minute**). The ghost can spend its remaining Power attempting to break physical dependencies, escape the hauntable zone, or threaten the player. If the seal breaks, ordinary regeneration resumes.
- **Contained / Banished:** Power reaches zero **while valid binding persists**. A specified resolution is recorded: sealed in prop, expelled from this venue, or destroyed if that haunting's authored rules permit it.

**Why automatic binding drain matters:** Without it, a rational ghost could simply refuse to act and wait forever, creating an unwinnable stalemate. The trap itself must force a choice: expend Power attempting escape or lose Power through containment.

The vessel is not a universal magical gun. It is an authored episode component—e.g., lantern, mirror, music box—whose requirements are discovered through clues and fulfilled through normal stagehand interactions. The ghost may defend its anchor only when it observes a credible threat.

### 4.7 Danger and fairness invariants

- The ghost can kill the player or actors, but cannot apply unexplained direct HP subtraction. Damage comes from simulated world effects or a declared physical manifestation.
- Warnings must be learnable. They need not be obvious, but unavoidable lethal hits with no possible prediction or mitigation fail the design.
- A thwarted plan stays thwarted. The Director may choose a *later, independently funded* plan, never invent an immediate replacement as punishment for skill.
- A genuine equipment defect, legitimate cue, actor improvisation, or player mistake may look like haunting. The ghost receives no reward for events it did not cause.
- Ghost plans must have identifiable causal chains and replayable outcomes.
- Modest Power can be terrifying when the environment contains large stored energy; enormous Power does not override the world's rules.

## 5. The physical world and damage

The world model owns **positions, traversable zones, equipment state, loads, injuries, integrity, and hazards**. Rendering is observational, not authoritative.

| Entity | Core state | Behaviors |
| --- | --- | --- |
| Player | Health, position, movement, status/injuries, tools, current action | Investigate, operate, rescue, suffer damage, escape |
| Actor | Health, position, fear, trust, composure, current cue/role, knowledge | Perform, hesitate, improvise, panic, retreat, become incapacitated |
| Prop/mechanism | Integrity, operating mode, attachments, restraints, load, interactable affordances | Execute cue, be inspected, fail, be repaired/disabled, be destroyed |
| Environment | Rooms, links, hazard volumes, lighting/audio state, hauntable zones | Route characters, deliver ordinary consequences of supernatural actions |

**Integrity and state are different.** A healthy chandelier can be dangerously unlocked; a damaged spotlight can still operate until stressed. Damage and repair must alter the correct variable. Destruction can remove equipment or close an entire contingency route for the rest of the run.

**Early physics:** deterministic discrete hazards (falling object enters authored danger zone, impact resolves based on exposure and configured severity), simple traversal, and stateful mechanical dependencies. Later, optional rigid-body/cloth/debris simulation may enhance visuals. For reproducible gameplay, authoritative collision/damage remains in a specified simulation layer; PixiJS animation and cosmetic debris cannot overrule results.

## 6. NPCs: performers with agency, not morale meters

### 6.1 Actor vs role

The **role** belongs to the Play: where a character should stand, what dramatic beat must occur, rehearsed lines, and contingencies. The **actor** belongs to the Cast: who is performing it, their temperament, health, fear, trust, knowledge, and ability to improvise.

A veteran may tolerate apparitions but distrust unsafe rigging. An understudy may frighten easily yet be excellent at covering a missed cue. The same Play should behave differently with another cast without rewriting the script.

### 6.2 Minimum NPC state machine

`PREPARING → ON_CUE → HESITATING / IMPROVISING → ON_CUE`, with branches to `RETREATING`, `INCAPACITATED`, or `LEFT_PRODUCTION`. Specific transition preconditions are authored/configured; avoid a globally rigid psychology model.

NPC decisions consume their **own observations and knowledge**, not the complete world state. A performer who sees a chandelier move may know it's early without knowing whether a ghost released the latch. Their dialogue must respect that uncertainty.

### 6.3 Fear, trust, and health

- **Fear:** Immediate susceptibility to hesitations, rushed lines, flight, freezing, or refusal to perform. Elevated by perceived threats, near misses, pain, and witnessed injuries.
- **Trust:** Confidence that stage staff and fellow actors will protect them. Raised by competent intervention, communication, and successful recoveries; harmed by preventable accidents and visibly reckless changes.
- **Health/injury:** Physical capacity, independent of fear. A brave injured actor still may be unable to perform.

These are distinct dimensions. A frightened actor may perform because they trust the stagehand. A calm actor may refuse an unsafe cue because trust is gone. High fear need not always induce panic; personality and context matter.

### 6.4 NPC responsibilities in the simulation

- Follow planned stage marks and cue obligations when able.
- Recognize local deviations and attempt authored contingencies when feasible.
- Communicate warnings, requests, and emotional reactions through dialogue.
- Respond to player instructions according to trust, comprehension, position, and current cue obligations; never obey remotely impossible commands.
- Protect themselves when immediate danger exceeds tolerance, even if this costs the show.
- Persist their experiences through the run; subsequent lines and choices reference what they actually witnessed.

Cast agency is an important source of uncertainty, but it must remain explainable. A performer should not become capricious because a random event demanded drama.

## 7. Plays, rehearsal truth, and the live production

### 7.1 Plays are authored dramatic state machines

A Play is **not** a single fixed timeline. It consists of scenes and beats with required outcomes, optional performances, cues, and contingency routes. The Show Controller advances when time and world-state requirements permit.

Each scene defines:

- Roles needed and staging requirements.
- Intended/rehearsed dialogue and legal cue timing windows.
- Mechanical capabilities needed from the venue (e.g., `suspended.fixture`, `dimmable.spotlight`, `curtain.move`).
- Success conditions, graceful-degradation possibilities, abandonment triggers.
- Contingency beats and lines for missing cue, prop failure, interrupted actor, blackout, improvised entrance, or partial cast.
- The audience-facing outcome: intact, improvised, disrupted, canceled, or unsafe.

A deviation can be perfectly legitimate: an updated rehearsal note, performer improvisation, ordinary mechanical fault, or a ghost plan. The cue book is evidence, not an oracle. Sources of uncertainty must be authored and traceable; arbitrary hidden changes erode trust in the rules.

### 7.2 Show integrity and endings

A production has required beats, optional flourishes, tolerated substitutions, and hard safety/participation boundaries. Avoid a single arbitrary 'show HP' bar. Derive progress from the beat graph, cast availability, and incidents.

Possible run outcomes:

1. **Curtain call:** Required dramatic beats completed, acceptable cast survival, the show reaches its finale even if modified.
2. **Bound house:** Ghost successfully contained or banished. Record the performance separately; binding can succeed after the show has failed.
3. **Fifth bell:** Player deliberately evacuates or cancels to save lives. A deliberate partial outcome, not a mislabeled perfect win.
4. **Collapse:** Required beats become impossible, cast abandon, or a fatal event ends the run.
5. **Player death:** A distinct failure with a replayable causal record.

A run may satisfy more than one outcome dimension (e.g., ghost contained, performance ruined, cast rescued). Report these dimensions rather than forcing all endings into a single score.

### 7.3 Two clocks

- **Performance clock:** Beats, entrances, line timing, scenes, audience tolerance; can delay or branch within authored limits.
- **Simulation clock:** Fixed ticks for movement, injury, ghost regeneration, mechanics, and actions.

Rendering cadence is neither clock. A dropped frame cannot change a ghost's economy or which cue fired.

## 8. Dialogue: rehearsal, improvisation, and consequences

**Design objective:** The Play must sound like a play when everything works, and remain dramatically convincing when things go wrong. The dialogue system is **authored and deterministic**, not generative. It should create the *appearance of improvisation* through context-appropriate performance, not unlimited free-form text.

### 8.1 Four dialogue channels

1. **Scripted in-character lines:** The rehearsed Play text; timing, role, and beat controlled.
2. **Onstage cover/improvisation:** Authored alternates preserving dramatic tone despite a late cue, missing prop, absent role, or interruption.
3. **Backstage dialogue:** Natural speech, warnings, coordination, arguments, reassurance, and character relationships.
4. **Reactions and silence:** Gasps, halted lines, forgotten words, audible breathing, refusal, and deliberate pauses. Silence can be the correct consequence, not a missing asset.

### 8.2 Dialogue selection contract

Each line variant has a stable ID, speaker/role, channel, trigger event or beat, observable prerequisites, knowledge requirements, emotional/relationship conditions, priority, cooldown, subtitle/audio references, and optional downstream cue request.

Selection order is explicit and replayable: filter for speaker knowledge and local state; resolve critical interruption precedence; prefer the most specific eligible authored variant; apply deterministic tie-break; enforce cooldowns; log the selected line ID. If no valid variant exists, use a declared generic fallback or intentional silence. Never invent facts the NPC could not know.

To avoid combinatorial explosion, author by **dramatic intent** rather than every state permutation: `cover_late_light`, `warn_unsafe_rig`, `calm_partner`, `conceal_missing_prop`, `refuse_cue`. Shared fallback sets may be role- or persona-tagged, while signature lines remain Play-specific.

### 8.3 Example: *The Last Waltz*, one beat, four performances

**Rehearsed cue:** At the final waltz, the chandelier sways once, the spotlight dims, the actor says:

> **MARA (onstage):** “Even the stars remember how to dance.”

**Legitimate late lighting cue:** The cue is delayed, but no dangerous mechanical change occurred.

> **MARA (onstage, covering):** “Perhaps tonight, the stars are keeping their secrets.”
> **STAGEHAND (backstage, low):** “Light cue delayed. Stand by for the second mark.”

**Ghost-caused premature sway:** Mara sees movement before the intended cue. Her knowledge supports alarm, not identification of a ghost.

> **MARA (onstage, fighting composure):** “And some stars… refuse to stay in the sky.”
> **MARA (backstage after scene):** “That wasn't my cue. Tell me you know why it moved.”

**Successful rescue, damaged prop:** The chandelier is lost, but the player creates a replacement shadow effect.

> **MARA (onstage, recovering):** “Then let us dance beneath the stars we have left.”
> **MARA (backstage):** “I saw you catch that. I can finish the next act.”

**Abandonment:** Mara is injured or no longer trusts the rigging; the show cannot proceed in the intended form.

> **MARA (backstage):** “I can play a woman who isn't afraid. I cannot be one for you.”

The exact wording is placeholder narrative content; the architectural requirement is that lines are **causally and emotionally appropriate** to what actually occurred. Actor idiosyncrasies and past events should shape later choices.

### 8.4 Dialogue production and testability

- Use a structured dialogue catalog with localization keys, subtitle timing, and optional voice assets; avoid embedding long prose in game logic.
- Distinguish line-selection intent from sound performance, allowing text-only first and voice acting later.
- Support interruption policy: stage lines can be cut off by pain, dropped props, actor flight, or the fifth bell, but interruption must not silently lose required cue resolution.
- Unit-test knowledge fidelity, availability of contingency dialogue, no impossible speaking while incapacitated, cooldowns, and deterministic output for a recorded seed.
- Audit repetition and tonal consistency across multiple runs. Good dialogue is a content-authoring task as much as an engine feature.

## 9. Modular Adventure packaging

### 9.1 Module boundaries

- `simulation-core`: rules, clock, commands, events, authoritative state, replay; **no PixiJS, DOM, audio, or network imports**.
- `ghost-ai`: policy interface, senses, legal action catalog, Power/Rage economy, pacing policy.
- `show-engine`: beat graph, cue scheduling, rehearsal baselines, outcome evaluation.
- `npc-ai`: cast behavior and knowledge-limited responses.
- `dialogue-engine`: eligible line selection and interruption arbitration.
- `world-physics`: mechanics, hazards, health/integrity and causal effects, initially discrete.
- `adventure-loader`: schema validation, dependencies, compatibility, assets.
- `presentation-pixi`: fixed-angle camera rooms, sprites, occlusion layers, lighting, animation, UI, audio mapping.
- `headless-runner`: Node-based repeatability, balance search, and trace tools.

Modules communicate through **versioned data contracts and events**. Do not let the Play invoke renderer methods or let the ghost modify NPC HP directly.

### 9.2 Adventure manifest (historical illustration, not locked schema)

**Known correction:** `entry_scene: ballroom` below conflates Room and Play Scene. A future example must distinguish entry Room from initial Play Scene and include explicit Production and presentation bindings. This preserved example is not accepted loader input; no replacement field schema is ratified here.

```yaml
id: stagefright.adventures.last-waltz
version: 0.1.0
schema: stagefright.adventure/0.1
modules:
  play: stagefright.plays.last-waltz@0.1.0
  venue: stagefright.venues.old-opera-house@0.1.0
  cast: stagefright.casts.mara-and-company@0.1.0
  haunting: stagefright.hauntings.the-watcher@0.1.0
  dialogue: stagefright.dialogue.last-waltz-en@0.1.0
  rules: stagefright.rules.prototype@0.1.0
entry_scene: ballroom
requires_capabilities:
  - suspended.fixture
  - curtain.move
  - spotlight.dimmable
  - player.inspect
  - player.operate
```

Each module explicitly declares capabilities it **provides** and **requires**. The loader must reject a venue that lacks an indispensable cue mechanism unless the Play provides an authored fallback. Modules must pin compatible schema versions; mismatched modules fail validation rather than silently degrade.

**Safety / mod boundary:** Third-party Adventures may provide validated declarative data and assets initially, **not arbitrary executable TypeScript** with filesystem/network privileges. If scripting is later supported, it requires a consciously designed sandbox and permissions model.

### 9.3 Swappability without incoherence

A player chooses among **curated compatible Adventures**, not arbitrary permutations of six unrelated modules. Later, a compatibility-aware workshop could offer selectable ghost archetypes, venues, casts, and optional rulesets. The composer shows what fits and why. A good Play must not depend on a prop named `chandelier_42`; it should depend on a declared capability such as `suspended.fixture` and bind to the specific venue object at Adventure assembly.

### 9.4 Replay record

Persist: Adventure and module version pins; rules configuration hash; initial state; seeded PRNG state; ordered player/AI commands; authoritative events; optional checkpoints and final outcome. Browser and Node must reproduce the same logical events for a test fixture. Presentation may differ by platform.

## 10. Presentation and camera contract

**Initial art direction:** Pixel-art figures and active props in fixed-camera 2.5D theater rooms, with authored layers and limited perspective, inspired by classic room-camera adventure/horror composition. The camera creates dread through framing but may not violate learnability.

A room definition supplies: background/foreground art layers, walkable polygons or graph, navigation exits, interaction anchors, occlusion/depth zones, light and sound emitters, ghost observation zones, and scripted camera cuts. A visible prop is a rendering of a world entity, not its source of truth.

**Fairness constraint:** Gameplay-critical hazards require accessible sensory information before consequence. A camera may hide a latch but must allow another clue—sound, sightline, inspectable mechanism, known cue history, alternate room view, or NPC warning. Do not let a fixed camera create unavoidable deaths by withholding all relevant information.

**Art/simulation separation:** Visual swaying, dust, curtains, and debris may be cosmetic; mechanical lock states, injury, prop destruction, and event causation remain authoritative and deterministic.

## 11. Historical integrated Adventure candidate: *The Last Waltz*

**SF-0004 sequencing correction:** this larger slice follows the relevant bounded experiments. The earliest gameplay test is the [mundane judgment pair](STAGE2_JUDGMENT_EXPERIMENT.md). Duration, mechanism count and binding scope below remain historical hypotheses, not first-test requirements.

**Target vertical slice:** Approximately 8–12 minutes, one fixed-camera ballroom/backstage room with one actor, one player, three mechanism classes (chandelier restraint, curtain winch, spotlight control), five show beats, and a narrowly capable ghost.

**Prototype ghost actions:** One Presence distraction, one Interference alteration, one Sabotage restraint release. Later validate a Manifestation attack before implementing full tier IV/V systems. Early resource values are deliberately tuned to this episode rather than assumed for every future ghost.

**Cast:** Mara, one rehearsed role with Fear, Trust, Health, and four dialogue routes: normal, legitimate delay, ghost disruption, and interrupted/abandoned show. A second speaking voice can be authored as stage radio or offscreen crew, without needing a second full AI actor.

**Two playable completion paths:**

- **Curtain call:** Keep Mara able and willing to complete the five beats; a changed ending is permitted if authored.
- **Binding:** Find a small clue chain to identify the haunting's anchor, prepare one stage prop as the vessel, activate a seal, maintain it through automatic Power drain, and resolve the ghost's attempt to escape. This can produce a different performance outcome.

**Scenario variability:** Seed selects among legal intervention opportunities, one ordinary false alarm, authored clue placements, and the ghost's deterministic preferences. Never make a run unwinnable because a mandatory clue was placed behind an impossible prerequisite.

**Player controls:** Move, Inspect, Operate, Communicate, Use item; one context action at a time. The interface should remain comprehensible before texture polish or voice acting.

## 12. Historical CP0–CP5 proposal

**SF-0004 precedence:** the [experimental roadmap](../ROADMAP.md) supersedes this dependency sequence. Retain the following as initial design history; do not combine it with Stage 0–8 into a larger mandatory checklist.

### CP0 — Headless rules demonstration

- Core fixed-tick simulation in TypeScript; reproducible PRNG and ordered commands.
- Show clock, three mechanisms, one actor, ghost Power/Rage, valid actions, incident attribution.
- Evidence: same seed and command trace produce identical outcomes across supported JS runtimes; no Power underflow; no duplicate rewards; no illegal target action.

### CP1 — Playable stage

- PixiJS room, fixed camera, pixel placeholders, walking, inspection, interaction, cues, lighting/sound clues.
- Evidence: player can distinguish at least one legitimate effect from one sabotage; state transitions and damage originate from the simulation.

### CP2 — NPCs and dialogue

- Fear/Trust/Health behavior; rehearsed script and alternate lines; ordinary and haunted deviations.
- Evidence: no actor speaks unknown facts or while incapacitated; contingency routes do not strand the Show Controller; recorded runs pick stable dialogue lines.

### CP3 — Binding and dual victory paths

- Clues, anchor, vessel, binding state, forced Power drain, ghost defense; fifth-bell evacuation.
- Evidence: waiting out the bind cannot cause a permanent stalemate; both victory paths and partial outcomes are reachable; trapping has counterplay but no guaranteed escape.

### CP4 — Content modularity proof

- Content manifests and capability validation; a **second small Adventure or alternative Play** reusing the core without code modifications.
- Evidence: new Play/cast/haunting config loads through the same contracts; incompatible packs are refused with actionable errors.

### CP5 — Repetition and pacing trial

- Automated seed sweeps plus human sessions with replayable traces.
- Check that repeated runs demand different *decisions*, not merely randomly relocated clickable objects. Measure false-alarm judgment, warning readability, deaths perceived as fair, cast trust readability, ghost economy runaway, and dialogue repetition.

**Standing quality gates:** Every damaging event has a causal source; every ghost reward refers to a unique achieved goal; every planned clue route remains reachable; no visual frame timing changes logical outcomes; a correctly thwarted plan stays thwarted; non-ghost anomalies remain possible; completion state reflects separately the show, cast, player, and haunting.

## 13. Open design questions

1. **Player navigation:** strict room-to-room fixed viewpoints with directional movement, or more expressive 2.5D authored walk planes? Prototype one room before locking controls.
2. **Run duration:** 8–12-minute prototype; production Adventures may target ~20–40 minutes, subject to tests.
3. **Perception:** how much ghost Power/Rage information should the player infer through the environment versus explicit instruments?
4. **Actor injuries:** how much direct player medical intervention belongs in the stagehand fantasy without bloating the loop?
5. **Binding variation:** which hauntings permit containment, expulsion, or destruction, and what consequences persist beyond an individual Run?
6. **Dialogue depth:** text-first is safest; recorded speech, interruptions, and layered in-character/backstage voice require a distinct content budget.
7. **Content toolchain:** data-only mod packs first; whether to build visual authoring tools depends on proven content production needs.
8. **Multiplayer:** preserve actor IDs and command authority now, but defer transport/network prediction until single-player rules are credible.

## 14. Final design test

A good *Stage Fright* run should support all of these truthful player statements:

- “I knew that movement belonged in the show, so I left it alone.”
- “The ghost tricked me into fixing something that wasn't broken.”
- “I saw what it was planning, and I changed the stage so the attack couldn't matter.”
- “The actress was terrified, but trusted me enough to finish her line.”
- “I abandoned the show to save the cast.”
- “I learned what the haunting wanted, turned its own theater against it, and trapped it.”

If those statements emerge from the **same ordinary interactions and simulated causes**, the game has a coherent core. If each requires a special scripted minigame, we have lost the modular premise.

> **Design thesis:** *A Play supplies the performance. A Venue supplies the machinery. A Cast supplies the humanity. A Haunting supplies the adversary. An Adventure binds them together. The stagehand decides what survives opening night.*

---

**Document status:** Design proposal only. No repository files were modified. Do not treat provisional tuning constants, sample dialogue, or illustrative manifests as accepted canon until reviewed and tested.
