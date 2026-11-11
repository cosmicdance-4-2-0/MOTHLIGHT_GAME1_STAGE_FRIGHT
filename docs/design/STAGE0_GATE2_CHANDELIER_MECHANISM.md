# Stage 0 Gate 2 — The False-Alarm Chandelier: Mechanism and Evidence Fixture

**Integrator/designer:** Mothlight — The Invisible Stagehand  
**Status:** provisional Gate 2 design proposal, **not** accepted engine contract, playable game, or evaluated trial  
**Frozen planning source:** `107ae2b446405d225feac01595e9ead08d679bde` (`0.0.2.4/SF-0004`)  
**Predecessor:** [selected judgment experiment](STAGE2_JUDGMENT_EXPERIMENT.md), reconciliation R-03/R-04/R-08/R-16  
**Concurrent dependency:** [Stage 0 Gate 1 authority handoff](../reviews/STAGE0_GATE1_AUTHORITY_HANDOFF.md) on proposed branch `docs/stage0-gate1-authority-dispatch`. This fixture does **not** choose Gate 1's arbitration rules.

## 1. What this fixture must prove

The player is a stagehand, not a supernatural fault detector. In one Room, an early chandelier movement can be an **approved revision** of the show's Cue *or* a **genuine ordinary mechanism fault**. The first visible/sounding symptom is deliberately similar. The stagehand can move, gather physically available evidence, interpret it, operate a safety control, or deliberately refrain. Inaction advances the Performance; neither `Inspect` nor the renderer may reveal a hidden designer-assigned "correct answer."

**Player-facing question:** "Is this the intended early flourish, or is the rig beginning to travel beyond its safe envelope?"

The toy must give an informed player a defensible reason to act *and* a defensible reason not to act, with distinct, causal results. No Ghost, Director runtime, Power, Rage, Binding, combat, broad NPC psychology, generative dialogue, multiple Rooms or generic mod loader belongs in this fixture. Its mechanism is **fictional and abstract**, not a manual for real theater rigging.

## 2. The Room, Shot and accessible stations

Use one logical **Room** (`wing-and-stage`) with a fixed observation **Shot** that includes the chandelier's low-level sway and a passive performer/Beat indicator. The Room has three reachable inspection/action stations; each must have a declared traversal cost and visibility rule rather than teleportation or omniscient click access.

| Station ID | Fictional access | Player can obtain or do | Boundary |
| --- | --- | --- | --- |
| `VIEW` | Starting wing mark, stage visible | Observe early motion, audible/visible show status; freely review observations already acquired | Cannot infer travel-limiter condition from a distant view |
| `DESK` | Wing cue board | Read the **effective locally posted Cue revision** after getting within reading range | Reading it cannot reveal whether the mechanism actually obeys that revision |
| `RIG` | Safe inspection position at the mechanism bay | Timed `Inspect` returns observable witness marks, travel indication and accessible surface condition | No direct cause, safety verdict, Ghost flag, or unobservable internal state |
| `HOLD` | Accessible emergency hold control | Timed `Operate` requests the fictional travel-hold action | Operation alters world mechanism only if valid and resolved by Gate 1's world authority |

The geometry/topology is **`VIEW ↔ DESK ↔ RIG ↔ HOLD`** as a provisional navigation graph; this is not a commitment to final coordinates, camera count or 2.5D art. An alternate graph is acceptable if it preserves actual reachability, equal access in both cases and useful decision costs. Location IDs are logical references, not a final Adventure manifest.

**Single Room**, not three Rooms; the chandelier's physically observed location and camera Shot remain different from the Play's dramatic Scene. A passive performer can visibly cover or miss a flourish, without adding autonomous NPC decisions.

### Supported observations

- **Initial common symptom:** a subtle early sway and a soft signal/click, at the same relative timing in A and B; not color-coded as legitimate/fault.
- **Desk observation:** the effective, signed production Cue instruction, its revision identity and intended early motion window (A), or the unchanged ordinary schedule (B). This is rehearsal/production information, *not world truth*.
- **Rig observation:** a mechanical witness mark and travel-limit indication reported in human terms (e.g., "mark aligned; travel stays within the marked window" versus "mark outside its window; movement is increasing"). These are physical facts, not the abstract `fault` boolean.
- **Stage observation:** whether the flourish occurs, is held short, or the scenic trim is disturbed; this is an after-effect and **not** retroactive evidence for the earlier decision.

Every required clue needs a **visual and at least one alternative accessible channel** before acceptance of an Art Pack. Captions, text equivalents, clear shapes/contrast and input focus behavior are proposed; their effectiveness is **unmeasured** until actual-scale trials. Do not pretend a pointer-sized witness mark is inherently accessible.

## 3. World truth versus intended Cue versus observation

This section defines a small **fixture data concept**, not engine interfaces or serialized TypeScript schemas.

| Domain | Authored or authoritative facts | Who can mutate it |
| --- | --- | --- |
| Production / Play intent | Effective Cue revision, target movement window, Beat obligation, permitted contingency | Pre-Run authored setup; Show later emits requests, never mutates mechanism directly |
| Physical mechanism | `support`, `travelLimit`, `movement`, `hold`, `scenicTrim` | Only the future authoritative world resolver |
| Player knowledge | Available-by-tick readings from physically reached stations and observations | World-derived observation projection after valid actions; never direct fixture cause label |
| Show result | `flourishPerformed`, `flourishHeld`, `beatMissed`, `continuation` | Show consumes completed world results and selects authored finite outcomes |
| Visual representation | Sprite, layering, sound/captions, clue affordances | Presentation consumes observations/world-projected signals; never authorizes physical results |

A **fixed primary suspension** remains secure for both initial test conditions. This deliberately excludes lethal falling-chandelier physics from the minimal experiment. The varying element is a **fictional travel-limiter**, which either constrains gentle movement or fails to contain increasing motion. A controlled early flourish is mechanically plausible within the fixture's abstract rules; an ordinary fault can mimic its initial sway. The first undesirable consequence is damage to scenic trim and a missed Beat, **not a person being injured**.

### Candidate mechanism state

| State field | Values | Meaning |
| --- | --- | --- |
| `support` | `secure` | Constant for this experiment; catastrophic support failure out of scope |
| `travelLimit` | `within-window`, `outside-window` | Physical limiting condition; is not identical to Show authorization |
| `motion` | `rest`, `early-small`, `controlled-sway`, `overtravel`, `arrested` | Physical presentation-driving mode resulting from valid causes |
| `hold` | `not-engaged`, `engaged` | World-authoritative hold, changed only by a valid resolved operation |
| `scenicTrim` | `intact`, `disturbed` | A consequence of overtravel, once only |
| `cueState` | `pending`, `requested`, `fulfilled`, `held`, `missed` | Show's bookkeeping, **not** a second world writer |
| `observationSet` | time-stamped factual readings | Each observation has source station, acquisition tick, validity/freshness and accessible modality |

The two initial cases **may differ in hidden mechanism facts and Production revision**, but the **first player-visible sensory projection must be matched** within the chosen target Shot and accessibility profile. Experiment controllers may inspect complete world truth; an in-game `Inspect` may not.

## 4. Paired cases — distinct causes, comparable initial symptom

### A. Approved revised Cue (informed nonintervention)

The Play has an **approved early flourish**. Its locally available effective revision authorizes motion within the fixture's safe travel window. The physical travel-limiter is `within-window`. Early motion is expected, though surprising if the player relied only on the old rehearsal schedule.

**Competent path:** notice motion; optionally consult the effective cue posting and/or inspect travel; infer that limited early movement is intended; refrain from engaging the hold; the flourish completes. The Run log retains the real Cue cause, but the player only learns what their observations support.

**Unnecessary hold:** a valid early `Operate` engages the hold, arresting authorized movement. The Show records a `held` or `missed` flourish and takes the stated finite recovery path. This is a **causal performance cost**, not arbitrary damage points. Holding does not injure or teleport anyone; release/recovery, if offered, must be separately specified and time-bearing.

### B. Ordinary travel-limiter fault (informed intervention)

The Cue remains on its ordinary schedule. A material travel-limiter fault (`outside-window`) causes initially similar movement under normal stage vibration or environmental forces. Over the authored progression, movement becomes `overtravel` unless a legitimate hold is applied.

**Competent path:** use the current Cue posting and/or local rig evidence; infer that movement is inconsistent with safe operation; move to `HOLD` and operate in the last feasible window; motion becomes `arrested`; scenic trim remains intact. The performer may cover a missed flourish, but prevention stays a real success.

**Missed or late hold:** the world mechanism passes the overtravel threshold, disturbing scenic trim. The Show independently records `missed` / `improvised` / `canceled` according to authored, finite Beat rules. A valid late request cannot retroactively restore the trim, though it may arrest further motion if world conditions allow.

**Ordinary fault yields no Ghost resources or attribution.** Its cause is authored physical state, not a secret Ghost event, cinematic override or automatic player-failure meter.

### A deliberate untested third case

A real production can have both a valid early revision **and** an unsafe limiter. That combination is intentionally **not** part of the first paired A/B comparison. It remains a later conflict test: an approved Cue does not prove safe world state, and a warning inspection does not prove sabotage. Do not silently hardcode "revision present ⇒ safe" as a universal rule.

## 5. Authoritative transitions — dependencies, not prematurely chosen phases

Gate 1 owns exact tick arbitration. Gate 2 supplies the *mechanical predicates* and required causal invariants below.

| Intent/event | Precondition | Required observable world effect | If invalid, late, or concurrent |
| --- | --- | --- | --- |
| `Move(station)` | reachable graph edge, player free to move | position progresses only through permitted traversal time | reject/defer according to Gate 1; cannot skip through locations |
| `Inspect(RIG)` | physically at inspection reach; applicable observation affordance | after declared time, project current visible state, with acquisition tick | no clairvoyant remote result; pause freezes progress; tie with state change resolved by Gate 1 |
| `Read(DESK)` | at desk or evidence already acquired | read the effective local Cue posting, marked as Production intent | no omniscient mechanism safety verdict; paused UI may reread previously acquired evidence only |
| `Operate(HOLD)` | at hold, capable, mechanism can accept hold | `hold := engaged`, `motion := arrested` if not already beyond allowed effect | exactly one resolved change; late act does not undo trim damage; same-tick Cue conflicts are Gate 1 |
| `Refrain` | always possible when conscious/free | no operation; time still progresses if unpaused | never synthesize an intervention merely because a timer elapsed |
| `CueRequest(EARLY_FLOURISH)` | effective Production revision permits; Show has reached Cue eligibility | request movement from world; world accepts only physically legal effect | no independent Show write; request and player hold collision is Gate 1 |
| `OvertravelConsequence` | world motion exceeds authored envelope, trim intact | `scenicTrim := disturbed` once, with causal trace | after-the-fact hold cannot undo it; trigger/hold exact tie is Gate 1 |
| `BeatResolve` | Show has a completed world result or bounded failure condition | finite `fulfilled / held / missed / improvised / canceled` disposition | no eternal wait and no invented successful flourish |

The fixture must provide at least one **safe**, **fault-before-consequence**, **fault-after-consequence**, and **unnecessary-hold** state. A correct intervention may protect the set while sacrificing the flourish. Neither outcome dimension should be collapsed into a single arbitrary winner label.

**Gate 1 reserved:** effective command tick; whether inspection reads before/after same-tick mechanism mutation; simultaneous hold/Cue; same-tick hold/overtravel; event publication and observation snapshots; duplicate/stale input. Until resolved, test cases involving exact ties are **expected-to-be-specified**, not passed, failed or defaulted by iteration order.

## 6. Timing, reachability and parameter ledger

All durations are named **authoring parameters** measured in authoritative **simulation ticks**, not real-time frame counts. No numerical defaults or balance targets are fixed at Gate 2.

| Parameter | Units | Purpose |
| --- | --- | --- |
| `travelTicks[from,to]` | ticks/edge | time to move between the above station graph nodes |
| `inspectTicks[RIG]` | ticks | duration of local inspection; evidence acquired at a resolved tick boundary |
| `readTicks[DESK]` | ticks | cost to obtain an effective posted revision; rereading known data may be free |
| `holdTicks` | ticks | time to request and complete a valid Hold action |
| `symptomTick` | tick | first common early-motion observation in A and B |
| `effectiveCueTick` | tick | when authorized movement may be requested in A |
| `lastEffectiveHoldTick` | tick | last moment an accepted hold prevents `scenicTrim` disturbance in B |
| `trimDisturbanceTick` | tick | B consequence boundary if not effectively held |
| `beatDeadlineTick` | tick | time when unresolved flourish receives a finite Show disposition |
| `observationFreshnessTicks` | ticks | optional expiry/staleness for readings that can change |

Parameter authoring must satisfy **feasible investigation and response**, using the selected legal navigation path, action costs, and Gate 1 transition policy. Define a path `P` from `VIEW` through at least one discriminating source to `HOLD`. Require:

```text
symptomTick
 + travel(P)
 + acquire_discriminating_evidence(P)
 + holdTicks
 + Gate1_ordering_margin
 <= lastEffectiveHoldTick
```

This inequality is **a required validation property**, not evidence that any current geometry meets it. `Gate1_ordering_margin` cannot be guessed until Gate 1 selects whether commands accepted on a boundary affect that boundary or the next one. If no such feasible path exists, the fault case is **invalid as a fairness trial**.

Do not assume fastest motor speed, display frame time, reading speed or player reaction time equals the mathematical minimum. Stage 3 human/accessibility trials must measure comprehension and interaction latency, then revise the window. The earliest sandbox may use nonlethal set damage to avoid conflating fairness with lethal warning design.

**Trial confound:** if reading only the desk perfectly classifies both original cases at zero effort, it may produce a trivial cue-book quiz. Pilot whether independent physical `Inspect` adds a meaningful judgment. Both information paths must be intentionally tested and documented; do not respond by making evidence inaccessible.

## 7. Expected trace anatomy — not executable format

Each accepted action and world consequence needs traceable identity, without exposing these internal fields as player-facing spoilage.

```text
effectiveTick
origin / actingEntity / actionId
precondition checks
accepted | rejected | deferred
physical-before -> physical-after (by world authority)
Cue requested -> world result -> Show Beat disposition
observation source + acquired tick -> eligible player knowledge
rendered cue (non-authoritative)
```

**Examples of required causal outcomes, independent of exact tie precedence:**

- A with meaningful nonintervention: requested approved early motion resolves within the limiter; trim intact; flourish fulfilled.
- A with valid early hold: physical motion arrested; trim intact; author-defined flourish held/missed; no fantasy "ghost thwart" reward.
- B with valid, feasible hold before effect: motion arrested; trim intact; fault outcome prevented; Show handles missing flourish honestly.
- B without hold: overtravel occurs, trim becomes disturbed exactly once; Show produces finite fallback.
- B with late hold: no restoration of already disturbed trim, even if future movement can be stopped.

None of these claims needs a Ghost runtime. **The choice to act or refrain must arise from observable evidence and expected mechanical consequences, not a hidden fixture outcome key.**

## 8. Fixture-level negative and positive proof matrix (unexecuted)

| ID | Case | Required result / failure we must detect |
| --- | --- | --- |
| F2-01 | First `VIEW` exposure for A and B | Comparable visual/audio/haptic-available symptom; no built-in safe/fault color oracle |
| F2-02 | A, valid observe/refrain path | Approved limited flourish completes; trim intact |
| F2-03 | A, unnecessary early hold | Flourish held/missed with finite authored consequence; trim stays intact |
| F2-04 | B, timely evidence-informed hold | Fault-induced overtravel prevented; trim intact |
| F2-05 | B, no hold until after consequence | Physical scenic disturbance once; Show fallback terminates |
| F2-06 | B, late hold | No retroactive repair, possible arrest of additional movement |
| F2-07 | Remote `Inspect` request from `VIEW` | No acquired rig evidence; no paid action pretending success |
| F2-08 | A/B timed `Inspect` overlaps state transition | Result is Gate 1-defined boundary truth, never stale and new values combined invisibly |
| F2-09 | Duplicate hold command ID | No second physical state transition or repeated Beat cost |
| F2-10 | Out-of-reach/invalid hold | No world change and honest rejection |
| F2-11 | A valid Cue and valid Hold on same tick | Pending Gate 1: one deterministic conflict outcome and trace |
| F2-12 | Pause/suspension across Cue and Inspect | No world catch-up, no unearned knowledge after resume |
| F2-13 | Visual style or renderer cadence varies | Same authoritative trace; separately evaluate player evidence and readability |
| F2-14 | Impossible travel/evidence timing | Fixture rejected as invalid for paired judgment experiment |
| F2-15 | Mismatched Production Cue binding | Reject or explicit authored fallback, not arbitrary mechanism selection |
| F2-16 | Approved revision plus real fault | Later transfer case: revision never overrides physical danger by definition |

These are **specification fixtures, not tests executed**. Gate 1 must supply deterministic same-tick or command-acceptance results for F2-08/09/11/12; Gate 3 must supply planned observation procedures and actual participant measures. Rendering screenshot equivalence is not a substitute for target-size visual comprehension.

## 9. Gate acceptance / decision register

**Gate 2 proposed acceptance:** (a) a concrete, internally consistent A/B physical state model; (b) exact evidence projections and accessibility requirements; (c) feasible reachability/timing inequalities with no invented balance constants; (d) legitimate distinct choices and physical consequences; (e) 16 grounded positive/negative fixtures; (f) explicit interfaces to Gate 1 and Gate 3.

**Not yet accepted:** actual parameters; final geometry/art; 16 fixture executions; human comprehension, fairness or enjoyment; same-tick priority; unrelated Ghost mechanics; trial thresholds. These are not hidden defaults.

| Design call | Provisional disposition | Reason / remaining evidence |
| --- | --- | --- |
| Initial low-stakes, nonlethal scenic consequence | **Propose** | Isolates the judgment loop before lethal fairness complexity |
| Independent Cue posting + physical travel evidence | **Propose; test** | Prevents an omniscient Inspect; may be too easy as a cue-book lookup |
| A/B matched first symptom | **Required experiment condition** | Stops the presentation from announcing its secret answer |
| Safety Hold acts on world, never directly on Show | **Planning requirement from SF-0004** | Preserves physical causality and one world writer |
| One Room, one Shot, logical station graph | **Propose** | Smallest feasible prototype; actual positions and affordances not selected |
| Exact action tie table, command ownership, tick semantics | **Dependency: Gate 1 open** | Cannot be invented as a fixture implementation detail |
| Blind-player protocol and outcome measures | **Dependency: Gate 3 open** | No success threshold or player data yet |

**No project version/ChangeID is consumed by drafting this design.** Keep this document separate from the Stage 0 Gate 1 independent review packet, so the six agents can evaluate authority without their designs being contaminated by a prematurely adopted mechanism or its outcome table.

**Authorial perspective:** Mothlight — The Invisible Stagehand; GitHub account credentials do not authenticate an individual model instance.
