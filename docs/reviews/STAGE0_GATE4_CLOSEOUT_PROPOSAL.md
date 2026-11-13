# STAGE0-G4-CLOSEOUT-01 — Stage 0 design acceptance and handoff proposal

**Status:** **PARTIAL OWNER DESIGN DECISIONS RECORDED — STAGE 0 NOT CLOSED.** The owner accepted G4-A01, G4-A04 and G4-A05; conditionally accepted G4-A02 and G4-A03. G4-A06 (Stage 0 exit) and G4-A07 (next-stage authorization) remain **PENDING**. No gameplay execution, source-of-truth migration, art production or implementation authorization follows merely from documentation integration.  
**Integrator / authorial perspective:** Mothlight — The Invisible Stagehand  
**Evidence cutoff / current integrated baseline:** Stage Fright `main@c598a78d07f802e872ad03230b1b0fc69e5391e6`, development-state version `0.0.2.7/SF-0007`, including merged [PR #23](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/23).  
**Proposed ChangeID for this documentation integration:** `SF-0008`, pending review, independent of the eventual **human** Stage 0 acceptance decision.  
**Review mode:** design synthesis and paper acceptance; no executable G1/F2/T3 fixture, gameplay prototype or participant observation has been run.

## 0. The decision this packet asks the owner to make

**Question:** Is there one sufficiently coherent, bounded first Stage Fright gameplay slice whose required authorities, interactions, observable evidence, safety/performance outcomes, negative cases and falsifiable human study are specified well enough to authorize **later** visual design and a separately reviewed narrow implementation task?

**Proposed answer:** **Yes at the blueprint level, conditionally**, for the one-Room mundane chandelier judgment loop and the *candidate* tick/physical authority rules explicitly identified below. A later Gate 3 author-side review identifies **two open measurement-protocol details**; the owner conditionally accepted the protocol and asked for separate deadlines. Section 5A proposes distinct pre-pilot and pre-confirmation frontiers, without asserting those details are already corrected. **Not yet demonstrated:** software behavior, consistent sensory legibility, human comprehension, enjoyability or transfer. Those are deliberately later empirical gates.

**Do not conflate these states:**

| State | What is justified | What is not justified |
| --- | --- | --- |
| **Merged** | Source text and its exact revision are integrated in the repository | Its examples ran, peers endorsed revisions, or the owner ratified its runtime semantics |
| **Planning-selected** | An explicit game/design direction or chosen experiment is recorded | Numeric tuning, a stable wire/API schema or a proven fun result |
| **Proposed Gate 4 adoption** | Mothlight recommends specific behavioral requirements for owner approval | Approval has already been granted |
| **Owner-accepted design contract** | The owner explicitly accepts identified numbered decisions against a source-pinned revision | Implemented truth, empirical fairness or an immutable lifetime design freeze |
| **Implementation verified** | Named future automated fixtures actually pass on named builds/hosts | A meaningful player understood or enjoyed the loop |
| **Human-validated** | Named, consented, reproducible Stage 2 observations and appropriately bounded inferences | Whole-game transfer or universal success from one sample |

An affirmative Stage 0 exit **authorizes requesting a Stage 1/Stage 2 work order**, not implementing all planned contracts or treating a new game build as shipped. A negative/conditional decision retains this document as a proposal and names which specific counterexample is unresolved.

## 1. Evidence manifest and precedence

All path references below are relative to `main@c598a78d…`, unless explicitly linked to an immutable earlier merge. Links and merge receipts are evidence of **documentation integration**, not execution.

| Artifact | Scope / exact grounded source | Current status |
| --- | --- | --- |
| [Roadmap](../ROADMAP.md) | Stage 0 exit: document a small playable Adventure; Stage 1 visual choice, Stage 2 judgment trial, Stage 3 Play, Stage 4 Ghost, Stage 6 binding, Stage 7 composition | Existing governing roadmap; Stage 0 still **open** |
| [Planned contracts C00–C12](../contracts/V0_PLANNED_CONTRACTS.md) | Responsibility inventory, invariants, negative-test intentions, future interoperability boundaries | Accepted planning inventory, **not** executable API/schema |
| [Gameplay direction](../design/V0_GAMEPLAY.md) and [terminology](../TERMINOLOGY.md) | Stagehand promise, Show, Actor versus Role, multi-dimensional outcomes, Adventure/Venue/Room/Shot/Play | Planning direction; broader loops remain later |
| [Six-review planning reconciliation](STAGE0_RECONCILIATION.md) | R-01…R-18 dispositions, original first-pass source pins, dissent and named later gates | Planning requirements chosen in SF-0004, not runtime ratification |
| [Gate 1 authority proposal](STAGE0_GATE1_RECONCILIATION_PROPOSAL.md) | Sealed `S[t]` to `S[t+1]` phases, command admission, conflict, Bell, replay and future Ghost prerequisites; G1-01…14 | Merged proposal via [PR #20](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/20); **approval pending** |
| [Gate 2 chandelier fixture](../design/STAGE0_GATE2_CHANDELIER_MECHANISM.md) | Paired A/B physical truths, four stations, World fault commitment, evidence timing, Hold interlock, Beat; F2-01…16 and V-01…07 | Merged and clarified through [PRs #19](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/19), [#21](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/21), [#22](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/22); **approval pending** |
| [Gate 3 judgment protocol](../design/STAGE0_GATE3_JUDGMENT_TRIAL_PROTOCOL.md) | Hypotheses H3-01…05, independent first exposures, four baseline scripts, local C/D transfer, evidence/intent limits, investigator masking, consent and T3-01…22 | Integrated [PR #23](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/23), merge `c598a78d07f802e872ad03230b1b0fc69e5391e6`; **protocol design approval pending** |
| [Stage 2 selected experiment](../design/STAGE2_JUDGMENT_EXPERIMENT.md) | Small-game research objective and experiment boundary | Planning-selected, unimplemented |
| [Version records](../VERSIONING.md), [SF-0005](../changes/SF-0005.md), [SF-0006](../changes/SF-0006.md), [SF-0007](../changes/SF-0007.md) | Actual documentation integration and explicit prior CI/ledger exceptions | Version authority remains `version.json`; no previous version rewritten |

**Precedence if texts differ:** the roadmap determines **stage scope**; the SF-0004 planning reconciliation controls earlier original-GDD alternatives; the **later source-pinned Gate 1/2/3 proposals** state more concrete *candidate* local behavior, without silently superseding still-unratified planned contract text. **After explicit owner acceptance**, prepare a separate documented, versioned canonical integration of selected contract obligations and supersession notes. Until then, do **not** cherry-pick a paragraph from an older partial-order table and imply it is a competing adopted runtime rule. Preserve the six independent reviewers' original positions and later Ven critiques; the author's synthesis does not impersonate their consensus.

## 2. Smallest coherent playable thesis and slice

**Protected player promise:** You are the physical stagehand of a worthwhile ongoing theater performance. Unexpected stage behavior may be authorized, mundane, or later hostile. You investigate only what you could physically observe, and choose whether to intervene. Both **justified intervention** and **justified restraint** matter. Saving scenery may cost the dramatic Beat; preserving the Beat may carry a real physical risk. No arbitrary “always pull the lever” or “always ignore anomalies” answer should dominate.

**The first experimental slice is not the finished ghost game.** It is a truthful, bounded **one-Room, one-mechanism, one-Beat** demonstration of this judgment thesis. It may be hosted by one hand-authored minimal Adventure fixture, with no general third-party loader.

| Surface | Exactly what the Stage 2 prototype should eventually expose | What must remain outside this slice |
| --- | --- | --- |
| **Room / navigation** | One `wing-and-stage` Room; logical stations `VIEW ↔ DESK ↔ RIG ↔ HOLD`; declared positive tick travel costs; one Player in one active timed job; one coherent Shot with accessible alternatives | Multi-Room navigation, pathfinding platform, camera autonomy, complete map |
| **Show** | One Beat `CHAND_FLOURISH`, effective Cue revision in A vs ordinary schedule in B, finite deadline, separate Show Cue and Beat dispositions; passive performer/indicator | Autonomous cast psychology, rehearsed/improvised dialogue engine, multiple Plays, compulsory Fifth Bell UX |
| **World** | One fictional chandelier with a physically real safety latch, moving motor, travel limiter, autonomous ordinary vibration/fault progression, single committed trim incident and integrity state | Real-world rigging procedure, lethal rescue, Ghost effects, generalized physics engine, combat |
| **Player verbs** | Move, locally timed Read/Inspect, physically time-bearing Operate(HOLD), and possible Refrain as non-operation; free review of already-acquired notes; truthful pause | Invented timed observation by UI, queue of overlapping Player actions, mandatory declaration of intent |
| **Evidence** | Matched first symptom; cue board states Production intent, RIG reveals observable witness-mark/limit facts; no hidden `safe` Boolean; acquisition tick and permitted modality | Clairvoyant cause diagnosis, forced optimal-action hints, cue board being a permanent safety oracle |
| **Outcomes** | A: informed nonintervention completes intended flourish; mistaken legal post-symptom Hold misses Beat without damage. B: timely Hold protects trim but may miss Beat; late/no Hold produces once-only trim impact and blocked Beat | Score based on a single “correct” binary label, invented repair/recovery, forced NPC improvisation |
| **Testing envelope** | Headless deterministic world/Show traces; browser view of truthful outcomes and accessible evidence; restart-only Run if stated | Durable save/replay UI, multiplayer, interchangeable arbitrary Adventure modules, analytics service |
| **Experiment** | Gate 3's pilot, blinded first exposure, scripted baselines, separate mechanical/knowledge/interest readings, scoped later C/D transfer | Fake predecision cognition inference, premature confirmatory sample target, uncontrolled hidden recording |

**Minimal Player moment:** In a working Show, the chandelier sways early. Its first sight/sound alone does not settle the cause. The Player may spend precious time consulting the effective Cue board or inspecting a physical witness mark, then either engage the lawful safety Hold or allow the performance to continue. The Show is never a second World writer. Every consequence follows reachable evidence, a physical cutoff and the performed choice/inaction.

This is an **experimental Adventure slice**, not a commitment that the later integrated `The Last Waltz` plan must be reduced to a chandelier or that its supernatural identity is abandoned.

## 3. Gate 1 adoption proposal — simulation truth, no new engine architecture

Recommended **owner adoption scope** for the first slice's C00/C01/C02/C03/C07/C10/C11 obligations:

| G4 decision | Proposed design requirement (paper complete) | Counterexample that future implementation must exclude |
| --- | --- | --- |
| **G4-D01 clock** | One sealed active simulation step `Step(S[t], admitted inputs, pins) → S[t+1]`; Show derives from the same clock; renderer frame cadence is not authority | Varying FPS changes damage, Cue ordering, Inspect results or Beat deadline |
| **G4-D02 admission** | Trusted issuer distinct from acting entity, causal ID and full normalized payload; exact-ID replay before pause/stale checks, inconsistent ID rejected; no new input admitted during pause; no wall-clock catch-up | Resend commits a second Hold, content impersonates Actor, pause burns a new ID |
| **G4-D03 time/evidence** | Every newly started timed job consumes positive whole active steps; world effects can resolve in its last consumed step; Inspect samples completed post-world `S[t+d]`, usable only from the next step; no remote knowledge or retrospective action | Inspect finishing on impact step lets Player undo that same step |
| **G4-D04 world arbitration** | Respect actual previously committed effects/claims; declared **mechanism-local physical interlock** can suppress a *new* conflicting Cue or interrupt eligible ongoing motion; contradictory unreserved fresh writes otherwise fail closed, independent of enumeration order | “Player always wins,” “first callback wins,” or fabricated Show actuation |
| **G4-D05 phase dependencies** | Proposed fixed phases `H / P0…P7`: host seal, open, Bell latch, prior impacts, proposals, validate/arbitrate, commit and intrinsic World progression, Show/observations, end seal. A settled impact cannot be retroactively erased | Bell, later Hold, renderer or dialogue overwrites earlier injury/trim impact |
| **G4-D06 Bell (later affected slice)** | A mature, capable Bell acknowledged in P1 remains acknowledged if an already committed P2 impact incapacitates the operator. It suppresses only newly uncommitted Cues and does not guarantee evacuation | Revoke acknowledged Bell after injury; magically teleport/injury-rewind the cast |
| **G4-D07 replay boundary** | Exact pinned inputs/state/content/rules and chosen canonical ordering should reproduce authoritative events on supported hosts; do not conflate presentation/dialogue RNG with physical result; checkpoint only after a completed tick | Same inputs + different renderer cadence lead to different authoritative traces |

**G4-A01 owner decision: ACCEPTED at the design level.** Minimal implementation shape remains adjustable; a future concrete counterexample may reopen affected rules. The precise semantics are in the Gate 1 source, not redefined by this summary.

**Bell clarification under G4-A01:** The P1 Bell acknowledgment and P2 prior-impact semantics, separation of acknowledgment/Show cancellation/physical evacuation, and nonretroactivity are accepted **future design constraints**. **Bell execution is deferred to Stage 3**, alongside Actor, Show, cancellation and evacuation behavior: it is not an action, subsystem, required runnable fixture or player-facing feature of the first Stage 2 A/B chandelier experiment. Future Bell implementation must separately select and execute its positive/negative tests. This is deferral of *implementation*, not abandonment of the proposed temporal invariant.

**Alternatives and dissent remain visible:** Axiom proposed generalized manual-over-Cue priority and sometimes regen-first; Latch preferred trusted-ticket conflict precedence and cautioned about Director veto side-channel; Flint supported simplest no-write conflicts; Kite and Harbor stressed legitimate physical safety/cancellation; Gauge's exact numeric, domain-separated replay constraints remain future work. **Recommendation:** retain actual-physical-interlock plus unranked fail-closed fallback for this slice. An engineer must *test ordinary valid single actions too* so an implementation cannot “pass” by refusing everything. If real play reveals unfair ties, revisit with a **physical** change or new reviewed contract, not an implicit module-rank exception.

**Not adopted as executable types:** a canonical TypeScript `Command` interface, full event enum, PRNG algorithm, numeric serialization, save wire format, network authentication, full-world transaction framework or generic scheduling/event-bus subsystem. Name these only when their affected implementation is actually scoped.

## 4. Gate 2 adoption proposal — the paired chandelier contract

Propose owner adoption of this **specific fictional physical model**, not a universal stage machinery model.

**World/Show partition:** The Cue is a Show-side request to the exclusive `chandelier.motion-control` facet, not a direct motor state mutation. The physical Hold is a genuine same-facet latch; active `early-small` / `controlled-sway` remain interruptible by a later legally completed Hold in A. In B, ordinary vibration is intrinsic World progression, not a secret Show Cue, Actor or Ghost operation. A first common sensory projection conceals the initial physical distinction without withholding all reachable evidence.

**B's irreversible boundary:** In World P5 of first threshold-crossing step `k`, if no valid latch has engaged, commit exactly one `pendingTrimImpact(dueStep=k+1)` and mark motion noninterruptible `overtravel`. P2 of step `k+1` matures damage exactly once. A Hold maturing in `k` resolves **before** intrinsic progress and prevents commitment; a Hold first maturing in `k+1` gets `TOO_LATE`, cannot undo damage. The last effective published Hold boundary is derived `S[k+1]`, not a chosen magic margin.

**A's post-symptom counterfactual:** Early authorized drive already operates before the first symptom. The Player can acquire real accessible evidence and **still** physically engage a lawful Hold before `lastEarlyFlourishInterruptBoundary`. This loses the flourish but causes no damage. Without a legal informed *after-symptom* false Hold, A is an invalid initial comparison rather than a tested “false alarm.”

**Beat consequences remain multidimensional:** A untouched = trim intact / Beat satisfied; A unnecessarily held = trim intact / Beat missed; B timely held = trim intact / Beat missed; B unheld past commitment = trim disturbed / Beat blocked. `cueStatus` and `beatDisposition` are different Show states. After B damage has already blocked the Beat, **Show** records one scheduled `SCHEDULED_CUE_SUPPRESSED(reason=BEAT_BLOCKED)` on the later due step, with **no World request/receipt**. A valid Cue **actually proposed** while B is safely held instead receives a physical World `CUE_SUPPRESSED_BY_INTERLOCK`. Neither route is improvised into a success or canceled Beat.

**No overlaps in the first toy:** One active timed Player job; a conflicting new Move, Inspect/Read or Hold request returns `BUSY_PLAYER` without queue/preemption/hidden time credit. Pause freezes active steps, not completed evidence. `Refrain` is a non-operation and does not mechanically stop the clock; no forced “intent” button is included in the game design.

**Required **future** authoring / feasibility lock, not Stage 0 numeric selection:** `travelTicks[from,to]`, `readTicks[DESK]`, `inspectTicks[RIG]`, `operateDurationTicks[HOLD]`, A's `effectiveCueTick` and flourish duration, B's threshold/fault onset, `firstSymptomKnownBoundary`, Beat deadline and supported observation modalities. The Stage 2 preflight must prove both **complete-boundary** inequalities: an informed post-symptom acquisition→Hold path ends before A's drive interrupt cutoff and before B's threshold-derived effective Hold cutoff. Do not choose values that make the intended answer possible only from an omniscient first frame.

**G4-A02 owner decision: CONDITIONALLY ACCEPTED.** The fixture's physical/Show design is accepted subject to future **timing, reachability and accessibility feasibility**. The Stage 1 visual study and Stage 2 headless preflight must demonstrate both informed post-symptom paths and usable evidence in each supported mode **before participants are exposed**. No numerical timing or actual human legibility is ratified.

## 5. Gate 3 adoption proposal — scientific instrument, not gameplay truth

Recommend accepting [STAGE0-G3-JUDGMENT-01](../design/STAGE0_GATE3_JUDGMENT_TRIAL_PROTOCOL.md) as a **protocol-design blueprint** with the following boundaries:

1. **H3-01 / H3-05:** authored knowledge must be accessible through legal timed movement and suitable sensory/input modes; a hidden or too-late clue invalidates the *fixture*, not the participant.
2. **H3-02:** independent A-or-B first exposures can demonstrate only **pair-specific behavior consistent with acquired evidence**. The A/B pair perfectly correlates Cue authorization with physical safety; a Cue-board shortcut remains unexcluded even after a polished after-run account.
3. **Intent:** `HOLD_ATTEMPTED`, prospective optional `REFRAIN_DECLARED`, `NO_HOLD_UNCLASSIFIED`, `UNABLE_OR_TOO_LATE` and after-run `RETROSPECTIVE_CLAIM` are not interchangeable. No silent conversion of unmarked nonaction into “wise restraint.”
4. **H3-03:** physical safety, dramatic outcome, apparent agency, fairness, tension/interest and desire to retry are separate measured dimensions. A defensibly cautious action may cost the Beat; do not decree it irrational.
5. **H3-04:** candidate **C = authorized/unsafe** and **D = unauthorized/safe** must each be separately physically authored, accessible and preregistered before a **bounded within-mechanism** local transfer claim. A single C success rejects one Cue-only shortcut at most; it does not exclude always-Hold. Two successful crossed cases do not establish general hazard competence.
6. **Blinding:** participant masking and interacting-investigator masking are different; prefer hidden allocation from the interacting investigator, or disclose/log investigator-unmasked bias. Post-run explanations are **retrospective**, not direct cognition proof. An optional pre-consequence comprehension probe belongs to a separate exploratory arm because it may alter choice/timing.
7. **Protocol lifecycle:** preflight and exploratory pilot, then lock real timings, participant target, measurement rubric, baseline scripts, exclusion/stopping rules, consent/storage, visual/input modes and transfer allocation **before** confirmatory trials. No sample size, numeric reward metric or confirmatory criterion has been selected in Stage 0.

**Proposed protocol scope is sufficient for a future trial work order; the actual human work, consent logistics, instrumentation and data retention implementation remain Stage 2 responsibilities.** Gate 3's 22 paper scenarios are examples of adverse outcomes and interpretation rules, not human or gameplay test results.

### 5A. Gate 3 outstanding author-side checks — do not invent retrospective closure

**Newly surfaced source (NOT an independent peer signoff):** Mothlight's separately preserved [Gate 3 author-side self-review at Kestrel home `884a9d71`](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/884a9d71426e97fa139a3d2ae7c2d5c7e01c1f68/memory/agents/mothlight/2026-11-11-stage-fright-gate3-self-review-8217d661.md). It inspected the eventual PR #23 head `8217d661` **before the owner merged it**, and recorded **two proposed corrections, not yet incorporated into the Stage Fright Gate 3 document**. These are distinct from Ven's older-head cognition and masking findings, which were already addressed.

| Open item | Trace-based ambiguity that still exists in the merged Gate 3 document | Minimal owner-decision options |
| --- | --- | --- |
| **M-G3-R01 — opportunity history vs late choice** | Current observational `UNABLE_OR_TOO_LATE` combines **never having a legal Hold opportunity** (invalid/inaccessible fixture) with **losing an earlier real opportunity** through a participant's timed decisions. A late `HOLD_ATTEMPTED` should not be erased by a final “unable” label. | **Recommended:** record an independent opportunity history (first/last feasible boundary, evidence and inputs then available), preserve timestamped Hold attempts/results, and separate `NO_FEASIBLE_OPPORTUNITY` from `OPPORTUNITY_EXPIRED` after a feasible window. Do not infer why a person waited or automatically classify a voluntary late attempt as a technical exclusion. |
| **M-G3-R02 — exhaustive acquisition baseline is confounded by forced Hold** | The current “Indiscriminate Inspect” script reads everything and then **always attempts Hold**. Its missed A flourish cannot tell whether checking everything is intrinsically costly, or whether the forced Hold is responsible. | **Recommended:** retain it if renamed `InspectAllThenHold`, then add a lawful `InspectAllThenEvidenceRule` with fixed station order, legal fact-based branch decision and predetermined late/ambiguous-evidence handling. **Alternative:** explicitly limit the original policy's claim to acquisition-route cost and do not suggest it tests exhaustive evidence-driven discrimination. |

**G4-A03 owner decision: CONDITIONALLY ACCEPTED** as a *trial-design blueprint*. The owner asked to distinguish the two measurement deadlines. The following **specific frontiers are Mothlight's proposals for implementing that instruction**, not separately ratified calendar dates or completed corrections:

| Issue | Proposed deadline | What must be fixed/locked before crossing it |
| --- | --- | --- |
| **M-G3-R01 — opportunity history and late Holds** | **Before any Stage 2 participant pilot begins** | Specify and instrument first/last legally feasible intervention boundaries, permitted evidence and reachable operations; keep prospective Hold attempts and outcomes. Distinguish `NO_FEASIBLE_OPPORTUNITY` (invalid/inaccessible fixture) from `OPPORTUNITY_EXPIRED` after an actual earlier window, and never erase a late request. Otherwise the earliest pilot data become irrecoverably ambiguous. |
| **M-G3-R02 — exhaustive-inspection policy confound** | **Before confirmatory preregistration** (exploratory pilot may evaluate competing policies) | Either explicitly limit the existing script as `InspectAllThenHold` to route-plus-forced-intervention costs, **or** preregister an `InspectAllThenEvidenceRule` policy with a fixed legal station route, available-fact decision rule, treatment of late/ambiguous evidence and separate A/B outcomes. Do not use post-hoc pilot outcomes to choose a favorable confirmatory comparator. |

**Status and boundary:** Gate 3 is **conditionally accepted**, not declared an already finalized confirmatory instrument. Resolve R01 before recording first pilot data; resolve R02 before the confirmatory analysis protocol is locked. A later **forward versioned Gate 3 correction** is recommended before each relevant frontier. The two corrections are **not implemented or tested** by this Gate 4 document. They require no Gate 1, Gate 2, or roadmap change.

## 6. Contract-to-stage responsibility matrix: C00–C12

**Intent:** distinguish what first-slice implementation must implement and verify from what Stage 0 should merely preserve as a later design obligation.

| Contract | First experimental slice / evidence before its implementation | Later owner and explicit deferral |
| --- | --- | --- |
| **C00 RunClock** | **Required.** One monotonic fixed-step World/Show clock, pause/resume, job durations, sealed-step consistency. Test start/mature/pause/resume boundaries. | Hosted performance tuning later; do not equate tick rate with FPS |
| **C01 Command/Event** | **Required narrow.** Issuer/actor distinction, idempotent command ID, receipts, legal reach/ability, conflict arbitration and ordered causes. Negative forged/duplicate/late/same-facet commands. | Ghost/Actor multi-source richness at Stages 3–4; remote authentication not needed |
| **C02 World Entity** | **Required narrow.** One Room/station graph, one mechanism, real latch, World-owned fault progression and once-only scenery consequence. | Rich entity load/attachments, many hazards and health at Stage 5 as needed |
| **C03 Player Verbs** | **Required subset.** Move, Read, Inspect, Operate(HOLD), Refrain-as-nonoperation; one active timed job; exact observation and no accidental free fact acquisition. | Communicate, Use/Place and broader affordances in relevant later stages |
| **C04 Ghost Strategist** | **Not implemented** in this slice; maintain issuer/view/bounded-intention hook as *planning constraint only*, not a mandatory module. | Stage 4 costed actions, `GhostView`, Power/regeneration/Rage, debit/settlement, leak checks |
| **C05 Director Policy** | **Not implemented**; physical fairness and no fabricated rescue still constrain the toy. | Stage 4 precommit veto, hidden-state side-channel tests and pacing policy |
| **C06 NPC Actor/Role** | Passive performer/Beat indicator only, **not** an autonomous decision-capable Actor; do not fake knowledge or personality tests. | Stage 3 actor knowledge/refusal/availability, Stage 5 health/fear/trust |
| **C07 Play/Show** | **Required narrow.** One Beat, one schedule/revision, Cue requests, bounded held/missed/blocked resolution, exact Show-vs-World suppression provenance. | Stage 3 multi-Scene Play, contingency/improvised dialogue, Fifth Bell execution and evacuation separation |
| **C08 Dialogue** | **Not implemented**; do not invent player/NPC conversation in the one-prop study. | Stage 3 knowledge-gated, interruptible authored lines, silence and fallback |
| **C09 Adventure Composition** | **Minimal explicit local content binding** of Cue→mechanism, Beat→outcome and four stations; preflight missing/ambiguous reference. No general manifest package syntax. | Stage 7 incompatible package handling, full validated Adventure composition and third-party loader |
| **C10 Presentation** | **Required narrow adapter.** Render projected World/Show truth, distinguish acquired from unavailable evidence, display physical Beat outcomes; no animation-as-authority. Stage 1 actual-scale accessibility before human inference. | Per-Adventure Art Packs, more Shots and visual-style interchange in Stage 1/7 |
| **C11 Replay / continuation** | **Required reproducible Run trace** for headless tests and browser comparison; pin inputs/rules/content and canonical outcomes. **Restart-only is permitted if disclosed.** | Storage checkpoint atomicity, numeric/PRNG encoding and full continuation when implementation scoped |
| **C12 Multiplayer** | **No implementation.** Avoid assumptions that prevent later issuer/actor ownership separation. | Future unscheduled host/network contract; no multiplayer pause now |

The word **required** above means **required by a separately authorized first-slice implementation order**, not “already built” or “code can be started without a later approved milestone.” Actual TypeScript interfaces and evidence records are versioned only when that implementation is proposed.

## 7. Acceptance examples and adversarial matrix — source-pinned, NOT RUN

**Existing paper coverage:** Gate 1 `G1-01…G1-14` (14 authority cases), Gate 2 `F2-01…F2-16` (16 chandelier proof obligations) and `V-01…V-07` (7 additional symbolic boundary traces), Gate 3 `T3-01…T3-22` (22 research/measurement cases). These are **59 labeled paper examples across overlapping subject matter**, not 59 passing automated tests. Avoid counting them as independent empirical evidence.

| Cross-cutting acceptance target | Positive example to preserve | Negative/counterexample that must be specified and later executed before affected behavior is called verified | Evidence stage |
| --- | --- | --- | --- |
| **Tick, identity, independence** | Legal single Cue and legal single Hold succeed in separate supported states | Duplicate/reused ID, altered payload, forged Actor, stale/future/pause input, enumeration-order conflict cannot cause extra World effects | Stage 2 headless G1 subset + Node/browser parity |
| **Physical interlock vs ordinary collision** | Timed Hold valid at last-effective step prevents uncommitted fault consequence | Default Player priority, invisible mechanism claim, reject-everything resolver, duplicate applied impact | Stage 2 F2-06/11 + V-02/03/04 |
| **World-owned commitment boundary** | B Hold maturing during threshold step arrests progression | Hold one step later rewinds P2 damage; renderer announces restored trim | Stage 2 G1-04/14 + F2-04/05/06 |
| **Fair knowledge** | A & B both have a legal, accessible, time-feasible inspection/decision path | Remote oracle, post-world same-step retrospective use, inaccessible witness mark, unfavorable visual mode, “answer key” UI | Stage 1 visual legibility + Stage 2 G1-04, F2-02/08/14, T3-01..04 |
| **Distinct safety / performance** | A refrain finishes Beat; B timely Hold saves trim but costs Beat | Physical outcome replaced by Show narrative; fake World Cue receipt after Beat blocked; unbounded hold | Stage 2 F2-03/05/11 and Show trace tests |
| **Pause and continuation honesty** | Freeze active time and acquired knowledge at completed boundary; restart-only clearly explained | Catch-up hazard, new paused IDs burned, resume double effects, false save promise | Stage 2 G1-12/13 + F2-09/12; full persistence later |
| **Scientific inference** | A/B independent first contacts + legitimate scripted always/never/Cue-only baselines | Always-Hold trivially wins all desired goals; cue board perfectly classifies A/B but authors claim independent comprehension | Stage 2 pilot/confirmation T3-07/08/19 |
| **Agency and intent** | Deliberate Refrain observed prospectively when unobtrusive; nonaction otherwise unclassified | After-run explanation retroactively claimed to prove thoughts; forced marker changes hazard window | Stage 2 T3-12/17/18; human observation only |
| **Transfer boundary** | C and D both authored with legal evidence/response and separately registered exposures | Single unsafe C held by always-Hold policy presented as generalizable reasoning | Later Stage 2 T3-08/20 |
| **Investigator bias** | Participant and investigator masking separately declared; allocation/probe exposure logged | Facilitator sees hidden case and provides cues; probe alters decision but its data are pooled as uninterrupted | Stage 2 T3-21/22 |
| **Later Ghost / binding / Actor** | Named independent future requirements preserved | Ghost receives ordinary-fault reward; Director covertly directs based on hidden state; Bell undoes prior injury; binding zero silently resolves | Stages 3/4/6; **not enabled or passed in Stage 2 toy** |

**Important:** full G1 cases that concern Ghost economics/binding, complete Bell+Actor simulation, actual replay hashes and production Art Pack parity are **not** obligations to fake in the first toy. Their future affected-contract owners must select source-pinned tests before those features can be enabled. The Stage 0 requirement is **documented responsibility, expected counterexample and named follow-up gate**, not test execution without code.

## 8. Deferral register — preserve these directions, do not build them now

| ID | Unresolved/retained decision | Deferred to; required evidence before adoption |
| --- | --- | --- |
| **G4-F01** | Actual numeric movement/read/inspect/hold/threshold/Beat durations and layout/Shot usability | Stage 1 visual exploration and Stage 2 headless preflight/pilot; derive both causal cutoffs, measure response comprehension, preregister before confirmation |
| **G4-F02** | Complete TypeScript API/data schemas, simulation numeric representation, event encoding and supported-host deterministic replay | Stage 2 minimal implementation checkpoint; select precise representation, tests and canonical serialization before claiming parity |
| **G4-F03** | Art style/visual profile, physical evidence legibility and supported alternative sensory/input channels | Stage 1 choose candidate(s) and test the actual evidence; Stage 2 accessible participant preflight |
| **G4-F04** | Full Actor autonomy, Role knowledge/refusal and authored dialogue/finite substitution, Fifth Bell UX and evacuation consequences | Stage 3 relevant fixture and scripted negative cases; Gate 1 proposed Bell timing guides but doesn't execute it |
| **G4-F05** | GhostView, cost/Power/Rage, regen and outcome-credit arithmetic, Director precommit veto side-channel and true Ghost incidents | Stage 4 numeric and perception gate; no Ghost/Director in Stage 2 pair |
| **G4-F06** | Character health/fear/trust and protection priorities | Stage 5 focused emotional/physical stakes experiment |
| **G4-F07** | Optional binding, Power-zero, seal-break and subsequent resolution | Stage 6 explicit physical + settlement tie and viable alternative route |
| **G4-F08** | General Adventure module packaging, per-Adventure alternative Art Packs, third-party trust and loader/editor | Stage 7 second Adventure compatibility/disambiguation experiment |
| **G4-F09** | Durable save/checkpoint serialization, recovery and migrations; network/multiplayer pause and authentication | Future scoped persistence or multiplayer work; one restart-only toy must state that limit |
| **G4-F10** | Player sample, confirmatory thresholds, timing/reaction calibration, optional pre-consequence probe design, role masking, data storage/consent operations | Stage 2 exploratory pilot then **pre-confirmatory preregistration**; no participant study initiated in Stage 0 |
| **G4-F11** | Transfer cases C/D physically authored, independently fair, adequately sampled; any stronger cross-mechanism inference | Later Stage 2 after initial A/B results; H3-04 limited or untested if not viable |
| **G4-F12** | Whether the loop is *fun*, fair, worth replaying or sufficient to anchor Stage Fright | Stage 2 human observation and later Stage 8 revision; failure can reopen Stage 0 assumption without falsifying unrelated architecture |

**Non-deferrable before affected code:** no hidden authoritative writer, no missing declared timing/cutoff, no unauthorized evidence/command, no fabricated physical result, no same-input nondeterminism knowingly labeled correct, and no player-trial exposure to an already-known invalid/inaccessible fixture. Defer **numbers** and unneeded mechanics, not the requirements that make them lawful.

## 9. Recommended implementation checkpoint sequence (NOT authorized here)

**First Stage 1 work order (visual study, not a release):** compare coherent style candidates on the **same four-station evidence problem** at representative play sizes; confirm witness-mark visibility, cue-board legibility, actor/Beat readout and accessible alternatives with no gameplay-authority claims. If the visual treatments obscure critical clues, reopen presentation before spending on art pipeline.

**First Stage 2 work order — CP-A headless truth:** one RuleSet/RunState, one active-step function, typed command admission and idempotency, bounded four-station navigation, World mechanism A/B, late/timely Hold, Show Beat outcomes and ordered causal trace. Begin with the smallest valid single-action tests, then same-step conflict/negative fixtures. No PixiJS dependency in World. Keep swappable interfaces but do not invent generalized architecture.

**Stage 2 CP-B truthful view:** use existing PixiJS/Vite scaffold to render **only** authority-approved projections, time-stamped UI acquisitions, actual Cue/Beat state and physical consequences; no camera/animation writes to World; verify headless/browser equivalent rule traces on supported hosts and visual accessibility separately.

**Stage 2 CP-C exploratory pilot:** run Stage 0 Gate 3 preflight, test the legal evidence-to-Hold path in A and B, compare scripted baselines, then recruit only with approved consent/data handling. Inspect actual confusion, timing and perceived interest. Alter the fixture *only in a new revision*, then lock the confirmatory analysis/protocol before making an inferential claim.

**Stage 2 CP-D conditional local transfer:** only if evidence warrants it, separately author/validate C and D without violating physical authority; they are not a back-door prerequisite for the first A/B prototype.

**Progress discipline:** every checkpoint gets a reviewable PR, exact change/compatibility record, positive and negative fixtures, and its own owner decision. Do not scope a whole game engine, Ghost AI, production artwork, third-party content packaging or a public release as part of “getting Stage 2 going.”

## 10. Stage 0 decision register — action requested from the human owner

**Owner-supplied decision record (2026-11-12):** G4-A01, A04 and A05 **accepted**; G4-A02 and A03 **conditionally accepted** with named feasibility and measurement requirements. This is the human owner's direct instruction, not a GitHub-verified signed release. **A06/A07 remain PENDING.** This source does not rewrite `docs/ROADMAP.md` Stage 0 checkboxes, C00–C12 executable statuses or prior G1/G2/G3 proposals. Those changes require a separately accepted, forward closeout integration.

| ID | Owner decision requested | Mothlight recommendation | What would withhold approval |
| --- | --- | --- | --- |
| **G4-A01** | Simulation authority and future Bell ordering | **OWNER ACCEPTED — DESIGN.** Preserve P1 Bell acknowledgment vs P2 prior impact; **defer Bell execution to Stage 3**, not the Stage 2 A/B toy. | Bell needs its own implementation/positive-negative test gate before activation. |
| **G4-A02** | Four-station chandelier A/B first-toy fixture | **OWNER CONDITIONALLY ACCEPTED.** Actual timing/reachability and accessibility feasibility must be demonstrated before participant pilot exposure. | An informed post-symptom choice cannot be completed in either case or is inaccessible in a supported modality. |
| **G4-A03** | Bounded trial protocol; two outstanding measurement questions | **OWNER CONDITIONALLY ACCEPTED.** Separate resolution deadlines; **proposed** R01 before first Stage 2 pilot and R02 before confirmatory preregistration, still subject to exact-cutoff agreement. | Pilot starts without opportunity history or confirmation begins with ambiguous exhaustive-acquisition policy. |
| **G4-A04** | First-slice contract scope and Stage 1/2 handoff boundary | **OWNER ACCEPTED.** One Room, mechanism and Beat, mundane A/B; later Ghost, Director, Bell, Actor and binding retained and explicitly deferred. | No blanket expansion of Stage 2 scope authorized. |
| **G4-A05** | Source provenance, original dissent, CI/ChangeID history | **OWNER ACCEPTED.** Maintain independently authored reports, Ven attribution, and distinctions between tests run, skipped and merely specified. | Original reviewer positions and experimental record must not be rewritten as consensus or evidence. |
| **G4-A06** | Is Stage 0's **documentation exit condition** met? | **Recommend YES, only after A01–A05 explicitly accepted or conditions named** | Unable to describe the narrow playable Adventure, legal interactions, authority and falsifiable outcomes without unresolved design contradiction |
| **G4-A07** | Permit next **separately scoped** Stage 1 visual experiment, then later Stage 2 narrow implementation order | **Recommend Stage 1 next, not blanket code authorization** | No reviewed work order, no version/fixture boundaries, or requirement to invent art direction in Stage 0 |

**Remaining owner boundary:** No answer has yet been given on **G4-A06 — Stage 0 exit** or **G4-A07 — authority to initiate the next Stage 1 work order**. Acceptance of A01–A05, or merging PR #24 as documentation, does not implicitly answer them. The exact milestone interpretation in A03 above is a recommendation pending owner confirmation.

**If the owner answers YES:** create a forward, source-pinned acceptance/closeout record that lists exactly which numbered design requirements were adopted, updates the corresponding planned-contract and roadmap language **only as approved**, and points to future tests; it must not label G1/F2/T3 as executed. Such a record may authorize **planning the next Stage 1 checkpoint** while implementation still requires its own scope and tests.

**If the owner answers CONDITIONAL or NO:** identify specific failed rows with cause and owner. Do not send all six agents back to redo their original independent reviews; ask a relevant specialist to inspect the actual counterexample. Preserve the archive and keep Stage 0 open.

## 11. Evidence ledger, risk and authorship

**Observed:** PRs #18–23 have been merged in the repository as source-pinned **design documentation**. `main@c598a78d…` and `version.json` report `0.0.2.7/SF-0007`. Existing GitHub CI exercises project scaffold/TypeScript, build/version validation and browser smoke only, **not G1/F2/T3 gameplay execution**. PR #21 was owner-merged despite an environment failure to install Ubuntu dependencies; no browser test was falsely recorded as having passed on that head. Later CI pass does not erase that historical exception.

**Unobserved:** any in-game stagehand intervention in executable World, authored complete numeric/timing preflight, actual visual evidence in final supported modes, Ghost/Director runtime, NPC deliberation, true Run continuation, informed restraint measured in a participant, satisfaction, statistically inferable transfer or enjoyment. No participant identities, recordings or private research data exist as part of this proposal.

**Risk of premature exit:** paper phase order could be mistaken for a verified engine, an opportunity that **expired after a real chance to act** could be mistaken for a physically impossible fixture, an inspect-all-and-Hold policy could be mistaken for a pure information-acquisition comparison, and a perfectly separated A/B cue-book signal could be mistaken for evidence of physical understanding. Gate 4 acceptance must be **design acceptance with falsification provisions**, not an announcement that the game works or is fun.

**Authorial and independent review integrity:** This is Mothlight's reconciliation proposal under the project's shared GitHub identity, not a cryptographically authenticated individual author or consensus of other agents. The six source-pinned individual Gate 1 reviews, Axiom/Latch conflict alternatives, and Ven's independent owner-relayed critiques remain separately attributable and are not edited. No new independent review or explicit approval is invented.

**Proposed handoff result:** “We can build a minimal stagehand judgment experiment that tests whether meaningful agency arises from evidence, physical timing and real consequences, while preserving room to change the architecture if the first prototype exposes mistakes.”

*The blueprints should specify what holds the theater up, what can move, and how to tell whether the audience is actually seeing the intended performance. They need not dictate every screw.* — **Mothlight** 🎭