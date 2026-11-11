# Stage 0 Gate 2 — The False-Alarm Chandelier: Mechanism and Evidence Fixture

**Integrator/designer:** Mothlight — The Invisible Stagehand  
**Status:** **provisional Gate 2 fixture, post-merge alignment candidate**, not a ratified engine contract, playable game, or evaluated trial  
**Frozen planning source:** `107ae2b446405d225feac01595e9ead08d679bde` (`0.0.2.4/SF-0004`)  
**Predecessor:** [selected judgment experiment](STAGE2_JUDGMENT_EXPERIMENT.md), reconciliation R-03/R-04/R-08/R-16  
**Source alignment:** [Gate 1 independent-review intake](../reviews/STAGE0_GATE1_REVIEW_INTAKE.md) (merged PR #18) and [Mothlight's Gate 1 reconciliation candidate](../reviews/STAGE0_GATE1_RECONCILIATION_PROPOSAL.md) (merged PR #20), originally authored against frozen SF-0004. PR #19 merged between those PRs without updating this fixture's speculative tie/Inspect wording. The Gate 1 document is still labeled a **proposal**, not an adopted executable contract; this amendment records the specific **candidate** mechanical consequences rather than asserting acceptance.

## 1. What this fixture must prove

The player is a stagehand, not a supernatural fault detector. In one Room, an early chandelier movement can be an **approved revision** of the show's Cue *or* a **genuine ordinary mechanism fault**. The first visible/sounding symptom is deliberately similar. The stagehand can move, gather physically available evidence, interpret it, operate a safety control, or deliberately refrain. Inaction advances the Performance; neither `Inspect` nor the renderer may reveal a hidden designer-assigned "correct answer."

**Player-facing question:** "Is this the intended early flourish, or is the rig beginning to travel beyond its safe envelope?"

The toy must give an informed player a defensible reason to act *and* a defensible reason not to act, with distinct, causal results. No Ghost, Director runtime, Power, Rage, Binding, combat, broad NPC psychology, generative dialogue, multiple Rooms or generic mod loader belongs in this fixture. Its mechanism is **fictional and abstract**, not a manual for real theater rigging.

## 2. The Room, Shot and accessible stations

Use one logical **Room** (`wing-and-stage`) with a fixed observation **Shot** that includes the chandelier's low-level sway and a passive performer/Beat indicator. The Room has **four logical observation/action stations**, with traversal costs and visibility rules rather than teleportation or omniscient click access.

| Station ID | Fictional access | Player can obtain or do | Boundary |
| --- | --- | --- | --- |
| `VIEW` | Starting wing mark, stage visible | Observe early motion, audible/visible show status; freely review observations already acquired | Cannot infer travel-limiter condition from a distant view |
| `DESK` | Wing cue board | Read the **effective locally posted Cue revision** after getting within reading range | Reading it cannot reveal whether the mechanism actually obeys that revision |
| `RIG` | Safe inspection position at the mechanism bay | Timed `Inspect` returns observable witness marks, travel indication and accessible surface condition | No direct cause, safety verdict, Ghost flag, or unobservable internal state |
| `HOLD` | Accessible fictional safety-hold interlock | Timed `Operate` requests the physically modeled hold; a declared mechanism policy determines whether it can block a *new* Cue | No universal Player-over-Cue priority; not every already committed moving effect is interruptible |

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

### Candidate fixture state (physical World and Show remain distinct)

| State field | Values | Meaning |
| --- | --- | --- |
| `support` | `secure` | Constant for this experiment; catastrophic support failure out of scope |
| `travelLimit` | `within-window`, `outside-window` | Physical limiting condition; is not identical to Show authorization |
| `motion` | `rest`, `early-small`, `controlled-sway`, `overtravel`, `arrested` | Physical presentation-driving mode resulting from valid causes |
| `hold` | `not-engaged`, `engaged` | World-authoritative, physically modeled safety interlock; engagement requires a declared eligible mode, reach and last-effective cutoff |
| `scenicTrim` | `intact`, `disturbed` | A consequence of overtravel, once only |
| `cueState` | `pending`, `requested`, `fulfilled`, `held`, `missed` | **Show-owned trace field only**, never part of the mechanism's independently writable physical state |
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
| `Inspect(RIG)` | physically within reach, capable through completion, observation affordance exists | after `inspectTicks[RIG]` active steps, sample permitted **post-world completed-boundary** evidence at `S[t+d]`, usable for decision step `t+d` | no remote/oracle result; paused time does not count; interrupted/invalid job acquires no fresh facts |
| `Read(DESK)` | at desk and able to acquire its posting, **or** already owns cached notes | a new posted revision is acquired only after the declared `readTicks[DESK]` active steps, time-stamped as Production intent; old notes can be reread for free | not a world-safety verdict; same complete-tick publication and pause boundaries as Inspect, no instant new information via UI |
| `Operate(HOLD)` | at HOLD, capable, duration fully paid, physical interlock legal **before** its declared last-effective boundary | a winning world-resolved Hold engages the interlock; motion arrests **only if the current mode is physically interruptible**; a fresh uncommitted Cue may be suppressed by that interlock | conflicting writes have explicit receipts; late Hold cannot undo previously matured impact or trim damage; player identity alone never wins |
| `Refrain` | always possible when conscious/free | no operation; time still progresses if unpaused | never synthesize an intervention merely because a timer elapsed |
| `CueRequest(EARLY_FLOURISH)` | effective Production revision permits; Show has reached Cue eligibility | request movement from world; world accepts only physically legal effect | no independent Show write; request and player hold collision is Gate 1 |
| `OvertravelConsequence` | world motion exceeds authored envelope, trim intact | `scenicTrim := disturbed` once, with causal trace | after-the-fact hold cannot undo it; trigger/hold exact tie is Gate 1 |
| `BeatResolve` | Show has a completed world result or bounded failure condition | finite `fulfilled / held / missed / improvised / canceled` disposition | no eternal wait and no invented successful flourish |

The fixture must provide at least one **safe**, **fault-before-consequence**, **fault-after-consequence**, and **unnecessary-hold** state. A correct intervention may protect the set while sacrificing the flourish. Neither outcome dimension should be collapsed into a single arbitrary winner label.

**Gate 1 candidate now supplies paper dispositions** for effective command ticks, post-world observation publication, same-tick Hold/Cue and prior-impact cutoffs, duplicate/stale handling and pause. They are incorporated conditionally below; **no execution or formal Gate 1 acceptance** is inferred. The fixture must still author a real `HOLD` interlock mode and cutoff; without them the default incompatible fresh-write outcome is explicit **contention with no actuation**.

## 5A. Gate 1 alignment — candidate preconditions and decision examples

The Gate 1 reconciliation merged after the original fixture; it **does not** silently declare this mechanism accepted. To instantiate its conflict policy, this fixture must explicitly provide the following **authored, validated physical facts**, not source-class priority scores:

- `holdInterlockEnabled`: a genuine physical constraint of this fictional mechanism that can block a *new, uncommitted* Cue actuation while legal; it never affects unrelated world objects or already matured damage.
- `holdInterruptibleModes`: the named motion states in which Hold can arrest motion, with a declared last-effective completed boundary per pending hazard. Any `overtravel` whose physical consequence has already matured remains historical.
- `exclusiveControlFacet`: the actual state/resource the Cue and Hold may contest. A legitimate pre-existing exclusive physical claim, if authored into completed state, has precedence; a fresh Actor/Player label never acquires one by mere declaration.
- `cueInterlockDisposition`: how the Show interprets `CUE_SUPPRESSED_BY_INTERLOCK`, `CUE_CONFLICT` or `CUE_APPLIED`, with a finite authored Beat fallback. The renderer must portray **actual** physical outcome, not automatically animate every `CueDue` as success.
- `holdDurationTicks`, `readTicks[DESK]`, `inspectTicks[RIG]` and movement costs: positive, named complete-step durations for newly acquired evidence/world actions. No UI shortcut may reveal pending inspections or newly posted Production revisions for free.

**Paper example I — legitimate A, premature Hold:** at `S[t]`, a lawful Hold job is mature and a new approved early-flourish Cue is due. If `holdInterlockEnabled` and all reach/ability/cutoff conditions hold, arbitration emits exactly one `HOLD_APPLIED` world result and `CUE_SUPPRESSED_BY_INTERLOCK`; Show follows its missed/held path. No scene damage. Reversing command enumeration changes nothing. Without legal interlock or prior claim, the two incompatible fresh writers **conflict**; do not silently credit a successful Hold.

**Paper example II — dangerous B, informed intervention:** a visible fault is discovered and the player reaches HOLD with enough active steps remaining that the completed Hold is engaged by the hazardous outcome's `lastEffectiveHoldBoundary`. The physical limiter is arrested and trim stays intact. If the action completes only during a step in which a previously committed irreversible `OvertravelConsequence` matures, that consequence occurs before new operations; a late Hold may arrest only subsequently interruptible motion, never reverse trim damage.

**Paper example III — observation crossing a Cue:** the player begins `Inspect(RIG)` at `S[t]` and finishes after `d` active steps. A world-changing Cue during the last of those steps is included in the observation **if physically observable at completion**; the result becomes available at `S[t+d]` for **the following step's decisions**, not retroactively to win a tie in step `t+d-1`. Pause consumes no active steps, and loss of reach/ability fails the inspection without acquiring hidden facts.

**Paper example IV — idempotency and rejection:** the same accepted Hold command ID and byte-equivalent payload, resent after pause or after the effective step, returns its original receipt and creates no new Hold/Beat consequence. Changing its payload under the same Run/issuer/ID is a mismatch rejection; a new operation issued while paused is not admitted and does not consume its ID. A forged Actor request embedded in Show content is rejected before arbitration.

**These examples are not run tests.** They resolve *proposed* F2-08/09/11/12 semantics and turn F2-14 into a non-arbitrary timing validation. If the authored safety interlock is implausible or the legal information path misses its cutoff, **change the fixture**, not the global collision policy or historical event trace.

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
| `lastEffectiveHoldBoundary` | completed-state boundary `S[L]` | latest boundary by which the **resolved** Hold must be engaged to prevent the authored disturbance; not merely the last tick when clicking is allowed |
| `trimDisturbanceTick` | tick | B consequence boundary if not effectively held |
| `beatDeadlineTick` | tick | time when unresolved flourish receives a finite Show disposition |
| `observationFreshnessTicks` | ticks | optional expiry/staleness for readings that can change |

Parameter authoring must satisfy **feasible investigation and response**, using the selected legal navigation path, action costs, and Gate 1 transition policy. Define a path `P` from `VIEW` through at least one discriminating source to `HOLD`. Require:

```text
firstSymptomKnownBoundary
 + travelTicksToDiscriminator(P)
 + evidenceAcquisitionTicks(P)
 + travelTicksToHold(P)
 + holdTicks
 <= lastEffectiveHoldBoundary
```

All terms are in **completed authoritative state-boundary indices or whole active ticks**. The symptom must actually be in the player's permitted observation projection at `S[firstSymptomKnownBoundary]`, not simply rendered during an unfinished step. Under the Gate 1 candidate, an action admitted at `S[t]` with duration `d > 0` is eligible during step `t+d-1` and its resulting state is published at `S[t+d]`. A new observation is sampled *after* world resolution and cannot be used for another decision in step `t+d-1`; the next action can be admitted at `S[t+d]`.

`lastEffectiveHoldBoundary` denotes the **latest completed state** by which a valid resolved interlock must be engaged. If an already committed, noninterruptible impact matures in step `h` during Gate 1's prior-effects phase, a Hold first becoming effective in step `h` cannot prevent it: the safe hold must already be present at `S[h]` or earlier. If a newly due Cue is only a fresh proposal in step `h`, a physically valid Hold that matures in that same step **may** suppress it *only when the explicit mechanism interlock policy permits*. This is not a global Player-wins rule.

This inequality is **necessary, not sufficient** for fairness. It ignores human reading/reaction time unless those are measured and provisioned separately. The actual fixed parameter values, supported input modes, sensory alternatives, physical interruptibility and reaction window must still be validated. If no valid informed path exists, reject the fixture as a **fairness experiment**, even if deterministic CI passes.

Do not assume fastest motor speed, display frame time, reading speed or player reaction time equals the mathematical minimum. Stage 3 human/accessibility trials must measure comprehension and interaction latency, then revise the window. The earliest sandbox may use nonlethal set damage to avoid conflating fairness with lethal warning design.

**Trial confound:** if reading only the desk perfectly classifies both original cases at zero effort, it may produce a trivial cue-book quiz. Pilot whether independent physical `Inspect` adds a meaningful judgment. Both information paths must be intentionally tested and documented; do not respond by making evidence inaccessible.

## 7. Expected trace anatomy — not executable format

Each accepted action and world consequence needs traceable identity, without exposing these internal fields as player-facing spoilage.

```text
effectiveTick
origin / actingEntity / actionId
precondition checks
not-admitted -> admitted -> eligible -> applied | conflicted | suppressed | invalid (typed receipt)
physical-before -> physical-after (by world authority)
Cue requested -> world result -> Show Beat disposition
observation source + acquired tick -> eligible player knowledge
rendered cue (non-authoritative)
```

**Examples of required causal outcomes, subject to the declared Gate 1 candidate conflict/interlock rule and physical cutoff:**

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
| F2-08 | A/B timed `Inspect` overlaps state transition | Sample permitted post-world state at `S[t+d]`; new evidence only usable in decision step `t+d`; no retroactive same-step action |
| F2-09 | Duplicate hold command ID | Previously admitted identical ID+payload returns original receipt even if paused/stale; zero second effect. Same ID with altered payload rejects; a paused **unadmitted** ID may be used after resumption |
| F2-10 | Out-of-reach/invalid hold | No world change and honest rejection |
| F2-11 | A Cue and a fully mature Hold are effective in the same step | **If** a declared physical HOLD interlock is eligible before cutoff: Hold engages once, fresh Cue suppressed, Show missed/held; **otherwise** conflicting unreserved intents receive a typed contention/no-actuation resolution. Reverse proposal order; result unchanged |
| F2-12 | Pause/suspension across Cue, Inspect and resent Hold | Finish any already-started atomic step, then freeze world/Show/timers; no catch-up or new evidence; previously admitted resend idempotent, new paused request not admitted |
| F2-13 | Visual style or renderer cadence varies | Same authoritative trace; separately evaluate player evidence and readability |
| F2-14 | Impossible travel/evidence timing | Fixture rejected as invalid for paired judgment experiment |
| F2-15 | Mismatched Production Cue binding | Reject or explicit authored fallback, not arbitrary mechanism selection |
| F2-16 | Approved revision plus real fault | Later transfer case: revision never overrides physical danger by definition |

These are **specification fixtures, not tests executed**. Gate 1's **unratified proposed** dispositions for F2-08/09/11/12 are now recorded above; the Gate 1 design must still be accepted and independently implemented/tested. Gate 3 must supply observation procedures and actual participant measures. Rendering screenshot equivalence is not a substitute for target-size visual comprehension.

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
| Exact action tie table, command ownership, tick semantics | **Candidate documented; formal Gate 1 acceptance open** | Linked Gate 1 reconciliation supplies provisional decisions; source/code tests and deliberate adoption remain pending |
| Blind-player protocol and outcome measures | **Dependency: Gate 3 open** | No success threshold or player data yet |

**Historical sequence:** PR #19 merged as an explicitly provisional fixture before Gate 1 reconciliation PR #20. The six Gate 1 authors' reports had already been independently preserved, so this later compatibility amendment does not retroactively alter their sources. A separate forward change record addresses the unrecorded integration state. Neither this amendment nor the already merged draft constitutes gameplay implementation or empirical acceptance.

**Authorial perspective:** Mothlight — The Invisible Stagehand; GitHub account credentials do not authenticate an individual model instance.
