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

A **fixed primary suspension** remains secure for both initial test conditions. This deliberately excludes lethal falling-chandelier physics from the minimal experiment. The varying element is a **fictional travel-limiter**, which either constrains gentle movement or fails to contain increasing motion. A controlled early flourish is mechanically plausible within the fixture's abstract rules; an ordinary fault can mimic its initial sway. The first undesirable physical consequence is damage to scenic trim; its separate Show consequence is a blocked ordinary Beat, **not a person being injured**.

### Candidate fixture state (physical World and Show remain distinct)

| State field | Values | Meaning |
| --- | --- | --- |
| `support` | `secure` | Constant for this experiment; catastrophic support failure out of scope |
| `travelLimit` | `within-window`, `outside-window` | Physical limiting condition; is not identical to Show authorization |
| `motion` | `rest`, `early-small`, `controlled-sway`, `overtravel`, `arrested` | Physical progression; `early-small`/`controlled-sway` are interruptible, `overtravel` marks an already committed noninterruptible trim impact in this fixture |
| `hold` | `not-engaged`, `engaged` | World-owned safety latch, legal from `rest`, `early-small` or `controlled-sway`; no engagement that reverses `overtravel` or existing impact |
| `scenicTrim` | `intact`, `disturbed` | A consequence of overtravel, once only |
| `cueStatus` | `pending`, `requested`, `applied`, `suppressed`, `conflicted` | Show-owned request/disposition trace; a Cue has no physical write authority by itself |
| `beatDisposition` | `pending`, `satisfied`, `held`, `missed`, `blocked`, `improvised`, `canceled` | Separate Show-owned dramatic state with a finite deadline; never inferred from `cueStatus` alone |
| `pendingTrimImpact` | absent or `{sourceIncident, dueStep}` | World-owned, already **committed and noninterruptible** obligation; generated at P5 when fault progress crosses the authored threshold, applied at P2 of the next active step |
| `faultProgressTicks` | nonnegative whole active steps | World-owned count since fault onset while the safety latch remains disengaged; exactly one increment per active step in B's P5 progression, with no wall-time updates |
| `driveRequested` | `off`, `early-flourish`, `ordinary-flourish` | World-owned state of the motor drive actuated by a valid Cue; HOLD interlocks the same motion-control facet |
| `observationSet` | time-stamped factual readings | Each observation has source station, acquisition tick, validity/freshness and accessible modality |

The two initial cases **may differ in hidden mechanism facts and Production revision**, but the **first player-visible sensory projection must be matched** within the chosen target Shot and accessibility profile. Experiment controllers may inspect complete world truth; an in-game `Inspect` may not.

## 4. Paired cases — distinct causes, comparable initial symptom

### A. Approved revised Cue (informed nonintervention)

The Play has an **approved early flourish**. Its locally available effective revision authorizes motion within the fixture's safe travel window. The physical travel-limiter is `within-window`. Early motion is expected, though surprising if the player relied only on the old rehearsal schedule.

**Competent path:** notice motion; optionally consult the effective cue posting and/or inspect travel; infer that limited early movement is intended; refrain from engaging the hold; the flourish completes. The Run log retains the real Cue cause, but the player only learns what their observations support.

**Informed but unnecessary post-symptom hold:** the revised Cue has **already** committed and begun moving the chandelier before the common symptom is observed. After a physically available Desk/Rig reading, a valid later `Operate(HOLD)` can still arrest `early-small` or `controlled-sway` motion through the genuine safety latch, provided it finishes before the flourish's last interruptible boundary. This is an interruption of **ongoing committed motion**, not a battle against a fresh Cue. It is one physically lawful way for the player to make an informed yet mistaken choice. The hold arrests authorized movement. The Show records a `held` or `missed` flourish and takes the stated finite recovery path. This is a **causal performance cost**, not arbitrary damage points. Holding does not injure or teleport anyone; release/recovery, if offered, must be separately specified and time-bearing.

### B. Ordinary travel-limiter fault (informed intervention)

The Cue remains on its ordinary schedule. A material travel-limiter fault (`outside-window`) causes initially similar movement under normal stage vibration or environmental forces. This movement is **World-owned autonomous progression**, not a phantom Show Cue or competing external command. In B the ordinary flourish remains scheduled for a later Beat; **no early flourish is due at the initial symptom**. Over the authored progression, movement becomes `overtravel` unless a legitimate hold is applied.

**Competent path:** use the current Cue posting and/or local rig evidence; infer that movement is inconsistent with safe operation; move to `HOLD` and operate in the last feasible window; motion becomes `arrested`; scenic trim remains intact. The normal scheduled flourish may be held when the safety latch stays engaged, but preventing scenery damage remains a real success even if the Beat is missed. The first toy does not provide a repair/release action that could make the unsafe limiter safe before that Beat.

**Missed or late hold:** the world mechanism passes the overtravel threshold, disturbing scenic trim. In this first toy, a committed impact makes the subsequent ordinary flourish **blocked** for safety; neither an improvised flourish nor automatic cancellation is invented. A late hold cannot retroactively restore the trim; once `overtravel` is committed, this toy's HOLD is no longer a legal interrupt (a later expansion could separately author mitigation of additional motion).

**Ordinary fault yields no Ghost resources or attribution.** Its cause is authored physical state, not a secret Ghost event, cinematic override or automatic player-failure meter.

### Explicit Beat obligations for the first paired toy

Both runs contain the **same named dramatic Beat** `CHAND_FLOURISH`, but their effective production schedules differ. A has a signed revision that moves the Cue to an *earlier* eligible step. B has no revision; its ordinary Cue is eligible at the later authored `ordinaryCueDueStep`. The early vibration symptom in B is **not** a Cue attempt. In both runs, `beatDeadlineBoundary` is a finite, authored boundary after the relevant due step; no automatic improvisation, repair or Bell activation exists in this small fixture. **Ordering prerequisite for B:** `ordinaryCueDueStep >= faultThresholdStep + 2`, so if the unheld impact commits in P5 of `k` and matures in P2 of `k+1`, its blocked-stage state has been published at `S[k+2]` before the ordinary Cue can first be proposed. If this inequality is violated, the authored test is invalid rather than silently granting a same-step safety oracle.

| Physical history | Cue receipt | Show-owned Beat disposition | Safety/performance outcomes |
| --- | --- | --- | --- |
| A: early valid drive finishes while no Hold | `CUE_APPLIED` | `satisfied` when the flourish is physically witnessed | trim intact; Beat satisfied |
| A: after-symptom Hold interrupts ongoing, still-interruptible early drive | original Cue remains `applied`; later world `HOLD_APPLIED` | `held` until finite deadline, then `missed` (no release in first toy) | trim intact; Beat missed |
| B: timely Hold prevents fault threshold; regular Cue later requests drive | regular Cue `suppressed` by ongoing physical Hold | `held` until finite deadline, then `missed` | trim intact; Beat missed but safety preserved |
| B: fault impact matures before ordinary Cue due | no unsafe regular Cue is sent; it is `suppressed` by damaged-stage safety condition | `blocked` at the first Show update after impact; this is terminal | trim disturbed once; Beat blocked |

`cueStatus` records whether the **request** was made/applied/suppressed/conflicted; `beatDisposition` records whether the **performance obligation** was fulfilled, missed or blocked. They are deliberately not the same state machine. No `improvised` or `canceled` result occurs in the paired toy without a separately authored valid fallback or Bell; those dispositions remain representable for later Adventures.

### A deliberate untested third case

A real production can have both a valid early revision **and** an unsafe limiter. That combination is intentionally **not** part of the first paired A/B comparison. It remains a later conflict test: an approved Cue does not prove safe world state, and a warning inspection does not prove sabotage. Do not silently hardcode "revision present ⇒ safe" as a universal rule.

## 5. Authoritative transitions — dependencies, not prematurely chosen phases

Gate 1 owns exact tick arbitration. Gate 2 supplies the *mechanical predicates* and required causal invariants below.

| Intent/event | Precondition | Required observable world effect | If invalid, late, or concurrent |
| --- | --- | --- | --- |
| `Move(station)` | reachable graph edge, player free to move | position progresses only through permitted traversal time | reject/defer according to Gate 1; cannot skip through locations |
| `Inspect(RIG)` | physically within reach, capable through completion, observation affordance exists | after `inspectTicks[RIG]` active steps, sample permitted **post-world completed-boundary** evidence at `S[t+d]`, usable for decision step `t+d` | no remote/oracle result; paused time does not count; interrupted/invalid job acquires no fresh facts |
| `Read(DESK)` | at desk and able to acquire its posting, **or** already owns cached notes | a new posted revision is acquired only after the declared `readTicks[DESK]` active steps, time-stamped as Production intent; old notes can be reread for free | not a world-safety verdict; same complete-tick publication and pause boundaries as Inspect, no instant new information via UI |
| `Operate(HOLD)` | at HOLD, capable, duration fully paid, physical latch permitted in `rest`, `early-small` or `controlled-sway` at the applicable cutoff | a winning world-resolved Hold engages the latch, arrests **ongoing committed but still interruptible** motion, or suppresses a newly requested Cue through the same physical interlock | no player-priority exception; in `overtravel`/after a pending impact the Hold cannot undo committed damage and returns the declared `TOO_LATE` disposition |
| `Refrain` | always possible when conscious/free | no operation; time still progresses if unpaused | never synthesize an intervention merely because a timer elapsed |
| `CueRequest(EARLY_FLOURISH)` | effective Production revision permits; Show has reached Cue eligibility | request movement from world; world accepts only physically legal effect | no independent Show write; request and player hold collision is Gate 1 |
| `AutonomousFaultProgress` | B is outside safe window; no effective latch | in World P5 after fresh arbitration, progression may cross its threshold and **commit** `pendingTrimImpact` once; impact matures in P2 of the next active step | same-step winning Hold prevents threshold crossing; after commitment Hold cannot undo impact |
| `OvertravelConsequence` | committed `pendingTrimImpact.dueStep` matures in P2; trim intact | `scenicTrim := disturbed` once, causal child of the same fault | already committed impact resolves before fresh Hold; duplicate processing adds no damage |
| `BeatResolve` | Show has a completed world result or its authored Beat deadline expires | finite `satisfied / held / missed / blocked / improvised / canceled` disposition distinct from Cue request status | no eternal wait, no forced performance and no automatic cancellation on trim damage |

The fixture must provide at least one **safe**, **fault-before-consequence**, **fault-after-consequence**, and **unnecessary-hold** state. A correct intervention may protect the set while sacrificing the flourish. Neither outcome dimension should be collapsed into a single arbitrary winner label.

**Gate 1 candidate now supplies paper dispositions** for effective command ticks, post-world observation publication, same-tick Hold/Cue and prior-impact cutoffs, duplicate/stale handling and pause. They are incorporated conditionally below; **no execution or formal Gate 1 acceptance** is inferred. The fixture now proposes an explicit `HOLD` latch and noninterruptible commitment frontier below, while leaving actual timing magnitudes and design acceptance open. If these physical predicates cannot be accepted, the default incompatible fresh-write outcome remains **contention with no actuation**, not Player priority.

## 5A. Gate 1 alignment — candidate preconditions and decision examples

The Gate 1 reconciliation merged after the original fixture; it **does not** silently declare this mechanism accepted. To instantiate its conflict policy, this fixture must explicitly provide the following **authored, validated physical facts**, not source-class priority scores:

- `holdInterlockEnabled = true` is **required for this proposed paired fixture**: a genuine physical safety latch for the fictional chandelier that can (a) interrupt specified **already moving** modes, or (b) block a *new, uncommitted* Cue actuation while legal. It never changes unrelated world objects or already committed scenery impacts.
- `holdInterruptibleModes = {rest, early-small, controlled-sway}` for this fixture. `overtravel` is noninterruptible **as soon as the autonomous threshold step commits its pending impact**, even if trim disturbance is not displayed until the following step. Preserve the cutoff at that commitment, not at visual impact.
- `exclusiveControlFacet = chandelier.motion-control`: the one physical actuation facet. `CueRequest(EARLY_FLOURISH)` or the later normal Cue requests drive activation on this facet; HOLD requests the physical safety latch on the **same facet**, even though the implementation may store separate drive/latch fields. An already driving motor is a committed ongoing motion, **not** automatically an uninterruptible reservation: the authored safety latch may interrupt `early-small`/`controlled-sway`. Any genuinely exclusive pre-existing reservation still follows Gate 1's rules; one cannot arise merely from a Cue's issuer label. Natural vibration is an intrinsic World progression, **not** a competing Actor/Show write.
- `cueInterlockDisposition`: how the Show interprets `CUE_SUPPRESSED_BY_INTERLOCK`, `CUE_CONFLICT` or `CUE_APPLIED` separately from a `beatDisposition` with a finite authored Beat fallback. The renderer must portray **actual** physical outcome, not automatically animate every `CueDue` as success.
- `operateDurationTicks[HOLD]` (the sole Hold duration; older `holdTicks`/`holdDurationTicks` refer to this value), `readTicks[DESK]`, `inspectTicks[RIG]` and movement costs: positive, named complete-step durations for newly acquired evidence/world actions. No UI shortcut may reveal pending inspections or newly posted Production revisions for free.

**Paper example I — legitimate A, premature Hold:** at `S[t]`, a lawful Hold job is mature and a new approved early-flourish Cue is due. If `holdInterlockEnabled` and all reach/ability/cutoff conditions hold, arbitration emits exactly one `HOLD_APPLIED` world result and `CUE_SUPPRESSED_BY_INTERLOCK`; Show follows its missed/held path. No scene damage. Reversing command enumeration changes nothing. Without legal interlock or prior claim, the two incompatible fresh writers **conflict**; do not silently credit a successful Hold.

**Paper example II — dangerous B, informed intervention:** a visible fault is discovered and the player reaches HOLD with enough active steps remaining that the completed Hold is engaged by the hazardous outcome's `lastEffectiveHoldBoundary`. Fault progression stops and trim stays intact. If the action matures only in the step of a previously committed `pendingTrimImpact`, the impact resolves first in Gate 1 P2, the mechanism is already `overtravel`, and the Hold receives `TOO_LATE`; it cannot reverse damage or claim a safety success.

**Paper example III — observation crossing a Cue:** the player begins `Inspect(RIG)` at `S[t]` and finishes after `d` active steps. A world-changing Cue during the last of those steps is included in the observation **if physically observable at completion**; the result becomes available at `S[t+d]` for **the following step's decisions**, not retroactively to win a tie in step `t+d-1`. Pause consumes no active steps, and loss of reach/ability fails the inspection without acquiring hidden facts.

**Paper example IV — idempotency and rejection:** the same accepted Hold command ID and byte-equivalent payload, resent after pause or after the effective step, returns its original receipt and creates no new Hold/Beat consequence. Changing its payload under the same Run/issuer/ID is a mismatch rejection; a new operation issued while paused is not admitted and does not consume its ID. A forged Actor request embedded in Show content is rejected before arbitration.

**These examples are not run tests.** They resolve *proposed* F2-08/09/11/12 semantics and turn F2-14 into a non-arbitrary timing validation. If the authored safety interlock is implausible or the legal information path misses its cutoff, **change the fixture**, not the global collision policy or historical event trace.

## 6. Timing, reachability and parameter ledger

All durations are named **authoring parameters** measured in authoritative **simulation ticks**, not real-time frame counts. No numerical balance targets are fixed at Gate 2. **Scheduling policy for this toy:** one exclusive active timed Player job (Move, newly acquiring Read/Inspect, or Hold). Starting another while one is in progress returns `BUSY_PLAYER`, does not queue or preempt, and does not shorten the original job. `Refrain` is a no-op choice, not a second timed job or cancellation; passive time passes. A completed job frees the slot at its published boundary. Pause freezes its remaining active steps. No movement during Inspect, no off-station queued Hold, and no overlapping costs. A future overlap/cancellation model requires a separate accepted test.

| Parameter | Units | Purpose |
| --- | --- | --- |
| `travelTicks[from,to]` | ticks/edge | time to move between the above station graph nodes |
| `inspectTicks[RIG]` | ticks | duration of local inspection; evidence acquired at a resolved tick boundary |
| `readTicks[DESK]` | ticks | cost to obtain an effective posted revision; rereading known data may be free |
| `operateDurationTicks[HOLD]` | ticks | **canonical sole** Hold duration (previous names `holdTicks` and `holdDurationTicks` are historical aliases only) |
| `firstSymptomKnownBoundary` | completed-state boundary | first common early-motion symptom available to the Player in A and B (replaces vague `symptomTick` for decision-cost calculations) |
| `effectiveCueTick` | active step | first revised Cue drive request in A; must commit **before** `firstSymptomKnownBoundary` and leave an interruptible post-symptom window |
| `flourishDurationTicks` | active steps | duration of a completed early drive before physical Beat success in A; must leave room for the informed post-symptom interruption case |
| `ordinaryCueDueStep` | active step | B's normal Cue request, later than the initial symptom and, in the no-Hold branch, later than the unsafe trim impact |
| `faultOnsetStep` | active step | first B World-owned vibration progression step (not a Show Cue) |
| `faultThresholdProgressTicks` | ticks | authored positive fault-progress count at which P5 crosses the commitment threshold without an engaged latch |
| `beatDeadlineBoundary` | completed-state boundary | finite deadline for unfulfilled `CHAND_FLOURISH`; separate from the Cue's physical outcome |
| `lastEffectiveHoldBoundary` | completed-state boundary `S[L]` | latest boundary by which the **resolved** Hold must be engaged to prevent the authored disturbance; not merely the last tick when clicking is allowed |
| `faultThresholdStep` | active step | B's autonomous limit crossing step without a Hold; **impact commits at the end of P5 of this step** and is due in P2 of the next active step |
| `trimDisturbanceTick` | active step | B's impact maturation step `faultThresholdStep + 1` when not prevented; not the last moment at which Hold may be newly applied |
| `lastEarlyFlourishInterruptBoundary` | completed-state boundary | last published state in A where the already-running valid flourish can still be physically interrupted before completion, with a mandatory post-symptom evidence/action window |
| `observationFreshnessTicks` | ticks | optional expiry/staleness for readings that can change |

Parameter authoring must satisfy **feasible investigation and response**, using the selected legal navigation path, action costs, and Gate 1 transition policy. Define a path `P` from `VIEW` through at least one discriminating source to `HOLD`. Require:

```text
firstSymptomKnownBoundary
 + travelTicksToDiscriminator(P)
 + evidenceAcquisitionTicks(P)
 + travelTicksToHold(P)
 + operateDurationTicks[HOLD]
 <= lastEffectiveHoldBoundary
```

All terms are in **completed authoritative state-boundary indices or whole active ticks**. The symptom must actually be in the player's permitted observation projection at `S[firstSymptomKnownBoundary]`, not simply rendered during an unfinished step. Under the Gate 1 candidate, an action admitted at `S[t]` with duration `d > 0` is eligible during step `t+d-1` and its resulting state is published at `S[t+d]`. A new observation is sampled *after* world resolution and cannot be used for another decision in step `t+d-1`; the next action can be admitted at `S[t+d]`.

`lastEffectiveHoldBoundary` for B is **derived**, not an arbitrary balancing number: let `k = faultThresholdStep` be the first step in which unheld World-owned fault progress reaches `faultThresholdProgressTicks`. In that step, a Hold winning P4/P5 blocks the increment, so Hold engagement published at `S[k+1]` succeeds. Without Hold, P5 commits `pendingTrimImpact(dueStep=k+1)` into `S[k+1]`. Thus the last successful published boundary is **`S[k+1]`**, but a Hold first matured in the following step `k+1` publishes too late at `S[k+2]`. This consequence then matures in P2 of step `k+1`. The model needs no independent impact-arbitration scheduler or invisible extra margin.

For A, a separate named `lastEarlyFlourishInterruptBoundary` is derived from the early drive's physically interruptible period. Let `a = effectiveCueTick` be the step in which the approved drive first applies and begins its first progress increment, and `D = flourishDurationTicks > 0`. Without Hold, P5 would complete the drive in step `a+D-1`; a legally mature Hold resolved during that step **before the drive increment** can still interrupt it, publishing arrest at `S[a+D]`. Thus this candidate fixture derives `lastEarlyFlourishInterruptBoundary = a+D` and requires **`a < firstSymptomKnownBoundary < HoldCompletionBoundary <= a+D`**. A Hold first effective in the following step is too late to count as an interruption. This is separate from B's noninterruptible impact commitment rule; no pre-symptom interference counts as proof of an informed false intervention.

`lastEffectiveHoldBoundary` denotes the **latest completed state** by which a valid resolved interlock must be engaged. If an already committed, noninterruptible impact matures in step `h` during Gate 1's prior-effects phase, a Hold first becoming effective in step `h` cannot prevent it: the safe hold must already be present at `S[h]` or earlier. If a newly due Cue is only a fresh proposal in step `h`, a physically valid Hold that matures in that same step **may** suppress it *only when the explicit mechanism interlock policy permits*. This is not a global Player-wins rule.

This inequality is **necessary, not sufficient** for fairness. It ignores human reading/reaction time unless those are measured and provisioned separately. The actual fixed parameter values, supported input modes, sensory alternatives, physical interruptibility and reaction window must still be validated. If no valid informed path exists, reject the fixture as a **fairness experiment**, even if deterministic CI passes.

Do not assume fastest motor speed, display frame time, reading speed or player reaction time equals the mathematical minimum. Stage 3 human/accessibility trials must measure comprehension and interaction latency, then revise the window. The earliest sandbox may use nonlethal set damage to avoid conflating fairness with lethal warning design.

**Trial confound:** if reading only the desk perfectly classifies both original cases at zero effort, it may produce a trivial cue-book quiz. Pilot whether independent physical `Inspect` adds a meaningful judgment. Both information paths must be intentionally tested and documented; do not respond by making evidence inaccessible.

## 6A. Symbolic causal frontier and independent boundary traces (Ven audit follow-up; NONE executed)

This is a **fictional mechanism's total local transition rule**, not a generic hazard engine or implementation. Let `p` be the World-owned `faultProgressTicks`, `q` its authored `faultThresholdProgressTicks > 0`. For B and **only while the latch is not engaged**, P5 of every active step increments `p` by one. If `p+1 >= q` (the first threshold step `k`), P5 sets `motion=overtravel` and adds exactly one `pendingTrimImpact(source=faultInstanceId,dueStep=k+1)`. The impact is *irrevocably committed at this P5*, persists in `S[k+1]`, and matures in Gate 1 P2 of step `k+1` regardless of any newly effective Hold in that step. The incident is idempotent: at P2 maturity the pending obligation is marked **consumed** with its stable `sourceIncident`, and `scenicTrim` changes from `intact` to `disturbed` once. A duplicate event or repeat delivery sees the consumed incident and cannot duplicate disturbance. If a valid Hold wins in P4/P5 of `k`, engage the latch **before** this intrinsic progress update; no threshold crossing or pending impact is created. `S[k]` and `S[k+1]` are immutable whole-step boundaries; no mid-step Host or renderer input may intervene.

For A, the signed revised Cue must have been committed before the common observed symptom. Its World drive is `early-small` / `controlled-sway`, not a perpetual exclusive owner claim. P5 advances its authored `flourishDurationTicks` while no physical latch is engaged. A **later valid** Hold may interrupt those still-interruptible modes, arrest motion and cause the finite dramatic cost. This ensures the two cases test an informed *post-observation* action, not just simultaneous preemptive Cue blocking.

| Trace | Starting boundary and competing activity | Authoritative state/effect | Visible / dramatic disposition |
| --- | --- | --- | --- |
| **V-01 A: observed, then unnecessary Hold** | Cue already applied before `S[s]`; same early symptom visible at `S[s]`; Player obtains signed revision and rig observation, finishes Hold at `S[u]` with `s < u <= lastEarlyFlourishInterruptBoundary` | P4 accepts latch interrupt of ongoing `controlled-sway`; P5 stops drive, `hold=engaged`, `motion=arrested`, trim intact | Original Cue stays `applied`; separate later Hold receipt `APPLIED`; Beat `held` then `missed` at finite deadline. This is a **real informed but mistaken intervention** |
| **V-02 B: Hold immediately before threshold step** | At `S[k-1]`, fault uncommitted; completed Hold already engaged before step `k` | No fault-progress advance or impact commitment in `k`; trim intact | Later ordinary Cue suppressed by physical latch; Beat `held` then `missed`; safety preserved |
| **V-03 B: Hold completes in threshold step** | `S[k]` has no pending impact; valid mature Hold and intrinsic fault progress are both due in step `k` | P4/P5 applies Hold **before** intrinsic progression; `S[k+1]` has `hold=engaged`, no `pendingTrimImpact`; trim intact | Same safety result as V-02. Permuting proposal enumeration cannot change result |
| **V-04 B: Hold first completes after threshold step** | No Hold in step `k`; P5 commits impact into `S[k+1]`; new Hold matures in step `k+1` | P2 of `k+1` disturbs trim once, then P4/P5 returns `TOO_LATE` for noninterruptible `overtravel`; `S[k+2]` keeps committed history | Later regular Cue suppressed for damaged-stage safety; Beat `blocked`, not an invented early-flourish miss |
| **V-05 B: timely Hold, ordinary Cue still pending** | `hold=engaged` safely before threshold; regular Cue due at authored `ordinaryCueDueStep` | Cue drive request to `chandelier.motion-control` receives `CUE_SUPPRESSED_BY_INTERLOCK`, no world actuation | Dramatic Beat `held` at due step and **terminally `missed` at `beatDeadlineBoundary`**; trim intact, prevention still counted separately |
| **V-06 A/B: movement overlaps inspection** | Player actively inspecting RIG, then attempts Move or remote Hold before Inspect finishes | One active Player job: second command `BUSY_PLAYER`, no queue, no transit; Inspect samples physically permitted post-world facts at its completed `S[t+d]` | Newly acquired evidence usable only from `S[t+d]`; no extra time/knowledge from illegal overlap or pause |
| **V-07 A/B: exact retry while paused** | Earlier admitted Hold resent with same issuer+ID+payload during suspension; new different ID requested simultaneously | Prior receipt returned without new effect; new request `NOT_ADMITTED_PAUSED` and cannot reserve ID; timers/world frozen | On resume, only explicit fresh admission advances time; no double scene cost |

**Fixture preflight:** validate that the two cases have matched first-symptom projections, at least one *perceptually usable* legal post-symptom evidence→Hold path, positive action costs, A's `lastEarlyFlourishInterruptBoundary`, B's threshold-derived `lastEffectiveHoldBoundary`, `ordinaryCueDueStep >= faultThresholdStep + 2`, and the finite Beat schedule. The counterfactual Hold completion must actually occur after evidence acquisition and **at or before** the intended physical cutoff in **both** cases. For A use `firstSymptomKnownBoundary + traversal/evidence/operation costs <= lastEarlyFlourishInterruptBoundary`; for B use the separately shown threshold-derived inequality. Neither condition is automatically satisfied by choosing an arbitrary deadline. A bare inequality or a passing deterministic trace does not establish that the player could understand the evidence in real play.

**Transfer trial, not an original-pair success claim:** a later held-out crossing of "authorized revised Cue" with an unsafe limiter must force the Player to use independent physical clues; a Cue board that perfectly predicts the original two labels may otherwise teach memorization rather than judgment. Do not expose this condition to the two initial blind participants as a hinted secret.

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
- B with late hold: `TOO_LATE` when mode is noninterruptible `overtravel`; no restoration of already committed or disturbed trim. A separate future mitigation operation would need its own contract.

None of these claims needs a Ghost runtime. **The choice to act or refrain must arise from observable evidence and expected mechanical consequences, not a hidden fixture outcome key.**

## 8. Fixture-level negative and positive proof matrix (unexecuted)

| ID | Case | Required result / failure we must detect |
| --- | --- | --- |
| F2-01 | First `VIEW` exposure for A and B | Comparable visual/audio/haptic-available symptom; no built-in safe/fault color oracle |
| F2-02 | A, valid observe/refrain path | Approved limited flourish completes; trim intact |
| F2-03 | A, **informed post-symptom** unnecessary Hold | Cue already committed; after accessible evidence the lawful interlock arrests interruptible ongoing motion, trim intact; Beat held then missed. A premature pre-Cue Hold alone does **not** satisfy this case |
| F2-04 | B, timely evidence-informed hold | Fault-induced overtravel prevented; trim intact |
| F2-05 | B, no Hold through fault threshold | World P5 commits one pending impact; P2 next step disturbs trim once; later normal Cue is suppressed for safety and Beat terminally blocked |
| F2-06 | B, Hold first matures after threshold commit | `TOO_LATE` and no new world actuation; committed impact and trim damage remain, no retroactive repair |
| F2-07 | Remote `Inspect` request from `VIEW` | No acquired rig evidence; no paid action pretending success |
| F2-08 | A/B timed `Inspect` overlaps state transition | Sample permitted post-world state at `S[t+d]`; new evidence only usable in decision step `t+d`; no retroactive same-step action |
| F2-09 | Duplicate hold command ID | Previously admitted identical ID+payload returns original receipt even if paused/stale; zero second effect. Same ID with altered payload rejects; a paused **unadmitted** ID may be used after resumption |
| F2-10 | Out-of-reach/invalid hold | No world change and honest rejection |
| F2-11 | A fresh Cue and a mature Hold effective in the same step | **Fixture's declared latch enabled and physically eligible:** Hold engages once, fresh Cue suppressed, Beat held then missed; if latch ineligible, default unreserved conflicting intents leave facet unchanged. Reverse proposal order; result unchanged. **Separate** from F2-03's post-committed-drive Hold |
| F2-12 | Pause/suspension across Cue, Inspect and resent Hold | Finish any already-started atomic step, then freeze world/Show/timers; no catch-up or new evidence; previously admitted resend idempotent, new paused request not admitted |
| F2-13 | Visual style or renderer cadence varies | Same authoritative trace; separately evaluate player evidence and readability |
| F2-14 | Impossible travel/evidence timing | Fixture rejected as invalid for paired judgment experiment |
| F2-15 | Mismatched Production Cue binding | Reject or explicit authored fallback, not arbitrary mechanism selection |
| F2-16 | Approved revision plus real fault | **Held-out transfer condition, later gate:** crossed Production authorization/physical limiter facts must not make the Cue board an automatic safe/fault label; physical danger follows limiter, not permission |

These are **specification fixtures, not tests executed**. Gate 1's **unratified proposed** dispositions for F2-08/09/11/12 are now recorded above; the Gate 1 design must still be accepted and independently implemented/tested. Gate 3 must supply observation procedures and actual participant measures. Rendering screenshot equivalence is not a substitute for target-size visual comprehension.

## 9. Gate acceptance / decision register

**Gate 2 proposed acceptance:** (a) a concrete, internally consistent A/B physical state model; (b) exact evidence projections and accessibility requirements; (c) feasible reachability/timing inequalities with no invented balance constants; (d) legitimate distinct choices and physical consequences; (e) 16 grounded positive/negative fixtures; (f) explicit interfaces to Gate 1 and Gate 3.

**Not yet accepted:** numerical parameter values; final geometry/art; 16 fixture executions and seven additional symbolic traces; human comprehension, fairness or enjoyment; formal Gate 1 phase/tie adoption; unrelated Ghost mechanics; trial thresholds. These are not hidden defaults.

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
