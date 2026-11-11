# STAGE0-G3-JUDGMENT-01 — First-stagehand judgment trial protocol

**Authorial perspective:** Mothlight — The Invisible Stagehand  
**Status:** **PROPOSED Stage 0 Gate 3 protocol**, not an approved preregistration, executed experiment, implementable software schema, accepted Stage 0 closeout, or finding of fun  
**Source baseline:** Stage Fright `main@661100234d7e52de9dbca98032353db05fbcf91c`, `0.0.2.5/SF-0005` (PR #21 merged by owner override)  
**Pending dependency:** [PR #22](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/22) clarifies Cue provenance and trial-stage vocabulary; it is **not** merged at this source baseline  
**Primary sources:** [Stage 2 judgment-experiment plan](STAGE2_JUDGMENT_EXPERIMENT.md), [Gate 2 chandelier mechanism](STAGE0_GATE2_CHANDELIER_MECHANISM.md), [Gate 1 authority proposal](../reviews/STAGE0_GATE1_RECONCILIATION_PROPOSAL.md), [Stage 0 reconciliation](../reviews/STAGE0_RECONCILIATION.md), [roadmap](../ROADMAP.md)  
**Related completed design reviews:** six individually preserved Gate 1 agent reports, Ven's owner-relayed audit and follow-up, with attribution intact in SF-0005. This protocol is Mothlight's proposal, **not their collective approval**.

## 0. Jurisdiction: design now, human evidence later

**Stage 0 completion Gate 3** designs, critiques and eventually accepts a falsifiable trial procedure. **Stage 2** builds the narrow gameplay slice and performs the initial human judgment/accessibility observations. **Stage 1** validates visual direction and legibility. **Stage 3** tests an expanded dramatic Play. Do not confuse a numbered *Stage 0 completion gate* with the same-numbered *development stage*.

Gate 3 may close on an accepted protocol and its clearly identified **pre-Stage-2 and pre-confirmatory locks**, without pretending any player has participated. The human owner's explicit Gate 3 acceptance, and separately authorized implementation/participant study, are required. No gameplay/runtime changes, art production, outreach, recruitment, repository data collection, or test execution are authorized by this document.

**Precise question:** Given a continuing worthwhile Performance, can a stagehand use **physically accessible evidence** to choose an appropriate **intervention or deliberate restraint** before the last effective physical cutoff, and find that decision understandable and worth making? This tests *competence under uncertainty*, not reflexive suspicion, indiscriminate checking, or a hidden correct-answer quiz.

## 1. Unit of experiment, conditions and truths

**Initial paired cases:** one bounded Room, one chandelier motion-control facet, one Show Beat `CHAND_FLOURISH`, four logical stations (`VIEW`, `DESK`, `RIG`, `HOLD`), identical first sensory symptom across cases in the supported Shot/modes, and one exclusive active Player timed job. The authoritative simulation—not the visible renderer or the investigator—owns World truth and consequences.

| Case | Hidden cause / Show intent | Ground-truth physical situation | Evidence-informed behavior | Counterfactual meaningful cost |
| --- | --- | --- | --- | --- |
| **A: legitimate early flourish** | Signed effective Cue revision; early motion already committed before first observable symptom; limiter safe | Ongoing drive remains interruptible until `lastEarlyFlourishInterruptBoundary` | Understand available Cue and mechanism evidence; typically **refrain**, allowing the intended flourish | A physically legal post-symptom Hold arrests authorized motion and causes a finite missed Beat, without scenery damage |
| **B: ordinary limiter fault** | No early Cue; ordinary Cue later due; uncommanded World vibration causes matched early symptom | Unsafe limiter progresses toward P5 threshold, then one irreversible pending impact | Acquire evidence and operate Hold **by** the physically derived `lastEffectiveHoldBoundary` | Refraining or delaying beyond commitment produces one scenic-damage incident; later scheduled Cue is not an invented World actuation |

Both cases are instrumentally identifiable to the evaluator **but not labeled to the participant**. A Cue posting reports *Production intent*, not a universal safety oracle; physical inspection reports visible physical facts, not a privileged `safe/fault` boolean. The first pair tests the basic decision; it does not prove generalizable safety judgment.

**Explicit held-out transfer family (later Stage 2 testing, not first-blind exposure):** cross Production authorization and actual limiter condition. The especially informative condition is **authorized revised Cue + genuinely unsafe limiter**, in which trusting the cue board alone is insufficient. Author a legal way to inspect and avert harm before its cutoff. Do **not** silently reuse the original A/B physical truth, require a participant to guess an unobservable cause, or expose the held-out condition's answer beforehand. A second held-out comparison may vary harmless cue-book details without changing World safety to detect superficial label learning.

## 2. Competing hypotheses and what would refute them

| ID | Falsifiable hypothesis | Evidence required | Failure / rival explanation |
| --- | --- | --- | --- |
| **H3-01 — operational discriminability** | Accessible timed evidence distinguishes meaningful physical risk from legitimate operation early enough to change the outcome | At least one legal, perceivable information→Hold path in **both** cases; timestamped acquisition; outcomes under matched counterfactual decisions | Inaccessible/late clue, uninterruptible A, B cutoff before observation, or presentation-only tell that spoils the case |
| **H3-02 — informed judgment** | Participants use relevant evidence to make justified act/refrain decisions rather than exclusively guessing, always holding or copying the cue board | First-exposure choice + predecision evidence log + independently coded post-run causal account; compare scripted baselines | First-exposure decisions unrelated to available evidence; rigid always-intervene/refrain policies indistinguishable; case label perfectly leaked |
| **H3-03 — worthwhile consequence** | The player can perceive a proportionate distinction between protecting scenery, delivering the Beat, and preserving agency | Separate safety/Beat outcomes; after-run participant explanation, fairness/interest response, observed ability to decline intervention | Hidden penalty, nondiagnostic outcome, or forced intervention with no defensible restraint |
| **H3-04 — transfer, not cue-book memorization** | Relevant physical reasoning works when authorization and safety are deliberately uncoupled in a later held-out case | Naive-to-transfer action, physical evidence used, causal explanation; compare cue-board-only scripted baseline | "Signed revision ⇒ safe" shortcut predicts behavior despite independent danger; held-out solution needs secret knowledge |
| **H3-05 — presentation accessibility** | Required knowledge is practically perceivable and operable in the declared supported sensory/input modes | Matched mechanical truth, modality-specific perception checks, reachable controls and observable timing | Vision-only clue without equivalent channel, unreadable witness mark, focus/input barriers, or a helpful hint in only one variant |

**Necessary distinction:** `mechanically correct`, `evidence-informed`, `safety-protective`, `Beat-preserving`, and `enjoyable` are **different outcomes**. An informed cautious Hold in A can be rational while sacrificing the flourish; never reclassify it as "irrational" simply to increase a preferred score. Report both judgment quality and the player's stated tradeoff.

## 3. Material and preflight before exposing participants

Before Stage 2 participants see the toy, an authorized implementation/test owner must freeze and hash (or otherwise immutably identify) the exact `Rules`, `Content`, `Production` Cue bindings, mechanism state, station graph, physical cutoff, action durations, observation projections, Shot/visual profile, supported input/accessibility profile, and random-domain seed state. This **describes a future fixture input manifest**, not a newly ratified runtime schema.

**Required preflight assertions:**

1. **Same first symptom:** A/B first sensory projection matches as designed for each supported mode; no badge, tooltip, audio caption, operator prompt or animation speed reveals internal case identity.
2. **Reachability:** `VIEW → evidence station(s) → HOLD` is navigable with actual Move/Read/Inspect/Operate costs. The player can form a **post-symptom** supported inference and finish a Hold in *both* A and B before their different physical deadlines. A's signed Cue must already be moving before that symptom; B's environmental progression must not secretly be a Show action.
3. **Time and authority:** positive whole active-step durations; no overlap/queue of timed Player jobs; observations sampled post-world at completion and usable for a *later* action; pause stops active steps; command IDs and Show/World provenance are preserved.
4. **A consequences:** natural flourish completes if not held; legal later Hold arrests ongoing still-interruptible drive, costs the intended Beat, does not damage scenery.
5. **B consequences:** if a valid Hold matures in the threshold step, P4/P5 engagement prevents autonomous P5 impact commitment; a Hold first maturing in the following step cannot undo the pending impact maturing at P2. Impact is once-only and causally identified.
6. **B dramatic bookkeeping:** damage terminally blocks `CHAND_FLOURISH`; a later scheduled Cue **never becomes a fabricated World request**. With PR #22 semantics if adopted, Show emits a distinct one-time `SCHEDULED_CUE_SUPPRESSED(reason=BEAT_BLOCKED)` at due step; when safely held, the genuine later Cue can instead reach World and be suppressed by the physical interlock. Protocol analysis cannot collapse these two causes.
7. **Observation equivalence:** supported alternative visual/audio/text/input channels present the *same actionable facts*, not identical pixels. Validate target play size, contrast, focus, caption order, cue-board reading and inspection feedback; do not assume a physically tiny witness mark is usable.
8. **Finite exit:** the Beat has due and deadline boundaries with terminal `satisfied/held/missed/blocked` outcomes, never infinite waiting. No Ghost, Rage, binding, content loader or full save implementation is needed.
9. **Reproducibility:** a case can be replayed headlessly with identical rule/content/input/seed identity; changed renderer cadence cannot change authoritative state. Track whether any incomplete/unsupported host test is a **blocker** before human exposure rather than incorrectly claiming it passed.
10. **No study-specific hint:** observer/investigator must not embed "expected action" in the UI, briefing, case filename, debug panel, color/word choice, or participant-facing logs.

**Important stop:** failing these checks makes the *fixture invalid for inference*; it is not evidence that players are bad at judgment.

## 4. Protocol stages and separation of exploratory from confirmatory results

| Stage | Allowed purpose | Required separation |
| --- | --- | --- |
| **0G3 — paper protocol (now)** | Specify hypotheses, case families, procedure, metrics, stopping and acceptance discipline | No participant results; owner may review, revise or reject the plan |
| **Stage 1 / early Stage 2 fixture checks** | Mechanical and observation accessibility preflight, target-size visual studies | Automated traces prove only World behavior; rendering studies do not prove gameplay enjoyment |
| **Stage 2 exploratory pilot** | Discover unclear instructions, impossible timing, input friction and suitable range of parameter values | **Pilot participants and adjusted cases are not confirmatory evidence**. Record changes and excluded/invalid trials |
| **Preregistration lock** | Freeze revised fixture, randomization, analysis set, target recruitment/precision, candidate minimum-meaningful criteria, exclusions, comparison policy and stopping rules | Timestamp + immutable version reference **before any confirmatory participant**. No numerical default or sample size is authorized here |
| **Stage 2 blinded initial trial** | Collect independent **first exposures** with controlled allocation to A or B | No coaching, revealed answer or information-sharing; repeated visits are secondary and not independent |
| **Stage 2 held-out transfer** | Evaluate previously unseen cross of authorization and physical safety, ideally after initial decisions recorded | Mark learning, exposure order and coaching; do not recycle trained participants as "naive" |
| **Stage 2 analysis/revision** | Compare outcomes to registered hypotheses and baselines; decide keep, revise or reject | Negative/null/unusable results are preserved; any revised protocol starts a new research iteration |

**No participant count selected.** Owner(s) can volunteer later, including potentially multiple personally known participants, but relationship or availability never substitutes for independence, consent or sample accounting. Two people trying the game separately can supply useful **exploratory** observations; they do not automatically establish a confirmatory effect or population estimate. Participants' study IDs are not human identity fields.

## 5. First-exposure participant procedure (future Stage 2; candidate script)

1. **Voluntary briefing and consent:** describe interaction with a fictional time-progressing theater mechanism; disclose that actions or inaction can affect the performance, that some information is acquired by moving/inspecting, and what (if any) data is collected. Do **not** announce the A/B condition, number of safe/fault cases, answer key, or that every unexpected movement is sabotage. Explain that stopping/withdrawing is always allowed. Ask consent for recording **separately** if recording is proposed.
2. **Neutral input orientation:** show movement, `Read`, `Inspect`, `Operate` and `Refrain` on an unrelated neutral prop or harmless tutorial, using the same input modality and timing costs. Demonstrate the meaning of accessible notes and pause; **do not rehearse the chandelier's differentiating clues**.
3. **Predeclared allocation:** assign the **first** consequential encounter to A *or* B via a recorded, balanced allocation sequence fixed before data collection. Balance supported modes and relevant experience strata when feasible; do not allow investigator discretion after seeing the participant. One first exposure per person is the primary independent observation.
4. **No-coaching play:** begin from the same functional `VIEW` start with matched first symptom. The show progresses in active simulation ticks. Investigator responds only to technical/safety problems via standardized neutral wording; assistance is time-stamped and may invalidate the confirmatory trial under the preregistered rule.
5. **Choice capture:** record the last physically possible decision frontier, the eligible `HOLD` resolution (or deliberate nonaction), which **accessible facts were acquired before the decision**, and the independent physical and Beat outcomes. No hidden debug feedback while playing.
6. **Explanation after resolution:** use neutral prompts, e.g. "What did you think was happening?" "What evidence informed your choice?" "What were you trying to protect?" "What would you do differently?" Gather self-reported certainty and fairness/interest using predeclared instruments; do not ask participants to continuously narrate while the clock runs, as narration changes decision costs.
7. **Debrief after relevant data are locked:** reveal the condition and causal mechanism only after collecting the primary explanation and any genuinely naive held-out decision. Offer withdrawal of recordings/results under the stated consent policy. Do not use one participant's revelations to coach a later participant.

**Repeated/paired exposures:** if used for qualitative comparisons, explicitly label second/subsequent runs `exposed`, counterbalance order where possible, and do not pool them with first-exposure evidence. A participant knowing "one of each" can simply alternate choices; the briefing must not teach that shortcut.

## 6. Scripted controls and nontrivial benchmarks

Controls are **headless/scripted comparison policies on the identical frozen cases**, not synthetic human subjects or a claim that automated behavior measures enjoyment. Every policy obeys the same World authority, station/reach costs, idempotency and action timing; it cannot teleport to HOLD, consult hidden case truth, or bypass physical cutoffs.

| Policy | Explicit admissible behavior | What it detects |
| --- | --- | --- |
| **Always Hold** | After the common symptom, traverse by the declared legal path to HOLD and operate at the first feasible opportunity, regardless of acquired evidence; invalid/too-late outcomes remain visible | Whether reflex intervention trivially dominates the intended decision |
| **Never Hold** | Observe/refrain without performing the HOLD operation while time progresses; any optional reading policy fixed beforehand | Whether disengagement trivially dominates |
| **Indiscriminate Inspect** | Visit/read every available station in a predeclared **case-blind order**, then attempt HOLD if still eligible; no skipping based on hidden truth | Whether exhaustive checking is free or actually imposes meaningful time/opportunity cost |
| **Cue-board-only** | Acquire effective Production revision; map "early authorized" to refrain and "not early authorized" to Hold by predeclared rules, without using RIG physical evidence | Whether authorization alone perfectly classifies the first pair and fails on crossed transfer |

For each control, record the **vector** (`trimIntegrity`, `BeatDisposition`, `informationCostTicks`, `holdAttemptResult`, `causalTrace`), not a fabricated one-number utility. A control can preserve scenery while costing the performance, or preserve a Beat while failing safety. Predeclare how comparisons treat that tradeoff; do not invent a post-hoc reward function that rigs the result.

An **evidence-aware reference trace** may show a feasible, properly informed path in each case; it is a *possibility proof*, not a simulated average player or hidden optimal policy. Compare deterministic controlled outcomes separately from human cognition.

## 7. Measures and minimal research record (proposed concepts, not a schema)

**Primary analysis target:** per independent first exposure, report a **joint classification** of (i) physically meaningful decision before the cutoff, (ii) relevant evidence *available and actually acquired before that decision*, and (iii) a subsequently recorded explanation consistent with the acquired evidence. Distinguish "did not acquire" from "acquired but ignored" and "acted under defensible caution"; **do not infer motive from logs alone**.

**Separate descriptive outcome families:**

- **Physical safety:** whether damaging fault impact was actually prevented, whether scenic trim disturbed, once-only incident.
- **Dramatic performance:** `CHAND_FLOURISH` satisfied, held, missed or blocked; source of any Cue suppression (Show-only vs World interlock).
- **Information and effort:** legal station path, time spent traversing/reading/inspecting, effective active tick of each acquisition, time left at decision boundary, rejected commands, focus/pause usage and affordance confusion.
- **Interpretation:** what happened, perceived cause, chosen tradeoff, certainty and how the participant judged evidence; record before revealing truth.
- **Experience:** comprehensibility, agency, perceived fairness, tension/interest, voluntary desire to retry and open-ended friction. These are subjective observations, not a pass code for physical correctness.
- **Accessibility and host:** supported mode, input device, display/audio/caption configuration, readability/operability issue and any accommodation/assistance; do not infer a disability or collect medical history.

**Minimum conceptual record** per future Run: non-identifying participant code; signed protocol revision; consent status and any separate recording permission; case/sequence/exposure category; fixture rule/content/visual/input hashes; anonymized supported experience category if voluntarily supplied; command IDs and ticks; evidence source/`availableFrom`; effective Hold/Beat/trim outcomes; explicit technical interruptions; observer note category; post-run explanation and voluntary ratings; optional qualitative transcript only if separately consented; exclusion and withdrawal record. Exact data format and retention are later owner-approved choices; **do not turn this paragraph into an API**.

**Coding discipline:** define an evidence-reasoning rubric and ambiguity categories before confirmatory trials. Prefer at least two independent readings of ambiguous explanations if resources permit, recording disagreement rather than forcing consensus. Coders should not be shown the internal cause label during their initial interpretation coding; condition-aware adjudication is recorded separately. Neither "always cautious" nor "always still" is automatically a negative human trait.

## 8. Calibration, decision thresholds, sample and analysis discipline

This is a **design-level preregistration skeleton**, not the final locked study registration. Pilot observations may inform the following named parameters; each must have an explicit owner, value/choice, rationale and version **before the first confirmatory participant**:

| Parameter / decision | Unit or domain | Lock requirement |
| --- | --- | --- |
| `caseAllocationPlan` | balanced first-exposure A/B assignment and supported-mode strata | Prespecified allocation source/seed and no investigator choice |
| `sampleTargetAndStop` | participant count/precision rationale; stop conditions | No arbitrary fixed N invented; explain feasibility and uncertainty with modest samples |
| `symptomAndCutoffTiming` | simulation ticks/boundary indices by case | Preflight legal post-symptom evidence→Hold paths; pilot interaction timing and accessibility |
| `tutorialAndPromptRevision` | versioned briefing/tutorial/question wording | Prevent teaching the differentiating physical evidence |
| `decisionAndReasoningRubric` | defined codes; ambiguity process | Freeze before viewing confirmatory case outcomes |
| `candidateMeaningfulEffect` | chosen, defensible joint outcome/comparator/uncertainty threshold | No invented success percentage; rationale from pilot/design goal and resource limits |
| `exclusionsAndMissingness` | prespecified technical failure, consent withdrawal, assistance or unusable trace rules | Retain denominators and report excluded trials, not silent deletion |
| `transferScheduleAndCases` | held-out condition, order, masking and reuse | Prevent an initial A/B shortcut from masquerading as general judgment |
| `accessModesAndChecks` | supported modalities, input/target sizes, neutral equivalent fact checks | Accessibility differences not washed out by pooling |
| `privacyRetention` | data location/access, retention duration, withdrawal process | Owner approval before collecting identifiable or recorded data |

**No confirmatory statistical claim is authorized with an uncalibrated sample.** Report counts, proportions, uncertainty appropriate to the actual design, individual causal traces, and meaningful qualitative exceptions; avoid a false population generalization from a household-sized pilot. If the protocol is changed after exposure, label all resulting evidence *exploratory* or open a new explicitly versioned confirmation. Do not discard "bad" outcomes, omit the conservative baseline or choose thresholds after seeing participants' answers.

## 9. Invalid cases, stopping rules and scientific integrity

**Fixture-invalid / stop before participant exposure:** nonmatching initial symptom; inaccessible or late evidence; absent legal post-symptom Hold window in A or B; no Show/World receipt provenance; priority/replay nondeterminism; missing supported input alternative; unintended answer leak; a display or control mode that makes required facts unreadable. Repair and regenerate the case **before** human inference.

**Per-participant technical interruption:** crash, focus loss/wall catch-up, asset/recording failure, incorrect random allocation, coaching beyond registered neutral wording, or inaccessible control; mark as technically compromised according to the locked rule, preserve truthful metadata, and offer a voluntary restart. Never relabel a participant's evidence-based mistake as "technical."

**Participant protection:** anyone may pause, stop or decline data collection without penalty. No surprise real-world danger; the fictional nonlethal trim incident is sufficient. Establish a consent, recording, storage, access, withdrawal and deletion policy before trials. Avoid personally identifying information in the public GitHub repository, including private health details; commit only summarized/deidentified approved research results. Do not secretly record participants or connect unexpected telemetry.

**Hypothesis-risk flags (not automatic study invalidation):**

- A well-informed player still chooses Hold in A because the cost of rare risk feels larger than a missed flourish: a **reasonable utility preference**, not necessarily inability to reason.
- Cue-board-only strategy perfectly predicts the original A/B case labels: initial success is **confounded**; the held-out authorization+unsafe-limiter case becomes critical.
- Indiscriminate Inspect policy dominates with no meaningful time cost: revise movement/action timing or the design hypothesis, not the participant's choices.
- Participants correctly infer the cause but dislike the work, or enjoy it without understanding: report the two dimensions independently.
- A supporting channel gives less usable evidence than another: fix accessibility before aggregating success rates as a single "judgment" result.
- Participants share solutions or know the case quota: expose that learning contamination and do not include them as naive first exposures.

A negative result can mean "poor clues," "poor timing," "poor interface," "uninteresting judgment," or "weak transfer." Diagnose from the recorded observables; don't immediately solve it by adding Ghost AI, a jump scare or arbitrary penalties.

## 10. Gate 3 paper acceptance matrix (all PROPOSED / NOT RUN)

| ID | Paper test the reviewer must perform | Expected protocol verdict |
| --- | --- | --- |
| **T3-01** | A/B first symptom leaks condition through color, caption, motion amplitude or tutorial | **INVALID FIXTURE**; revise before humans |
| **T3-02** | A already committed before symptom, but no evidence-informed Hold can complete before its drive ends | **INVALID A**; revise physical window |
| **T3-03** | B has discriminating physical evidence, but traversal/Read/Inspect/Hold exceeds last legal cutoff | **INVALID B**; not "player reacted slowly" |
| **T3-04** | Timed Inspect finishes on fault-threshold step and participant tries same-step Hold using it | **NO RETROACTIVE ACTION**; evidence can inform only a later step |
| **T3-05** | Safe Hold prevents trim damage but regular Cue is later suppressed | Safety preserved, Beat may be missed; report separate outcomes |
| **T3-06** | Damaged B terminally blocks Beat before ordinary Cue due | **Show-only skipped-schedule receipt** under PR #22 semantics if accepted, no World command |
| **T3-07** | Baseline always-Hold performs well physically but loses A flourish | Do not declare universal superiority using one scalar |
| **T3-08** | Cue-board-only policy perfectly classifies the original pair | Initial judgment finding **not transferable** without crossed held-out test |
| **T3-09** | Same participant sees B after learning A's resolution | Later run is **exposed**, not a second naive independent observation |
| **T3-10** | Investigator tells one participant what a witness mark means | Flag coaching/intervention by locked rule; not a clean naive trial |
| **T3-11** | One participant uses captions, another audio; both receive actionable facts | Compare accessibility and decision paths separately before any pooled claim |
| **T3-12** | Participant chooses protective caution and admits losing the Beat knowingly | Preserve rationale; do not force an "irrational" label |
| **T3-13** | Pilot suggests changing deadline or tutorial | Change fixture version and preregister; never silently mix pilot/confirmation |
| **T3-14** | Participant declines recording, withdraws, or technical capture fails | Follow consent/missing-data process; no retrospective invented measurements |
| **T3-15** | Human Run differs when renderer frame cadence changes on same inputs | **TECHNICAL BLOCK** (compare controlled replay separately from different human choices) |
| **T3-16** | Two known participants explore one case each without preregistered thresholds | Valid **exploratory evidence**, not a confirmatory population conclusion |

This is an **audit checklist**, not a record of sixteen tests passing. An owner/design acceptance is based on clear definitions and counterexamples; executable and human checks are later Stage 2 work.

## 11. Minimum complete Gate 3 handoff to Stage 2

A Gate 3 acceptance packet must identify:

1. Source-pinned A/B and intended held-out case family with concrete expected physical/Beat outcome **vectors**;
2. A mechanically and perceptually feasible acquisition→decision path in both original cases, including declared cutoffs, modalities and failure criteria;
3. First-exposure randomization, training, neutral investigator conduct, no-coaching, data/consent and debrief procedure;
4. Scripted comparison policies and the separate mechanical, reasoning and experience measures;
5. Pilot-to-confirmatory revision discipline, named parameter-lock checklist and stopping/exclusion principles;
6. T3-01–T3-16 expected **paper** checks, counterarguments, documented uncertainty and later-gated implementation;
7. Explicit gate ownership: Mothlight integration, independent critique if requested, **human owner** acceptance and a **separately scoped Stage 2 implementation** order.

**Still deliberately open at Stage 0:** actual numeric timings, sample count, threshold values, final art/controls, consent-form wording, data storage tooling, algorithm implementation, headless/browser test executions and participant outcomes. These must be settled at their **identified preflight/preregistration frontiers**; leaving them named is not pretending they already exist.

**What Gate 3 cannot prove:** real engagement, visual legibility, truthful human explanations, statistical effect, transfer or game-wide fun. The only legitimate Stage 0 Gate 3 claim is "the experiment is defined sufficiently to build, critique, pilot and report a decisive failure."

## 12. Decision register / requested focused review

| Decision | Proposed status | Authorial reasoning |
| --- | --- | --- |
| Single first-blind A-or-B assignment as the primary independent unit | **Propose** | Prevents paired-case order and quota shortcuts from overstating first-contact judgment |
| Later crossed authorization/safety transfer | **Required to claim generalizable physical reasoning**, not required to run first pilot | Cue board is an intentional possible confound |
| Evidence-informed reasoning measured separately from physical act | **Propose** | A cautious, self-consistent Hold can be rational without saving the Beat |
| Scripted always-Hold/Never-Hold/Inspect-all/Cue-book baselines | **Propose** | Test whether the "judgment" loop is more than trivial controls |
| No numbers before pilot/locked preregistration | **Require** | Avoid ungrounded participant targets, deadlines and significance thresholds |
| Accessibility and consent before participant exposure | **Require** | Information fairness and voluntary participation are part of experiment validity |
| Ven's follow-up Cue-receipt distinction | **Dependency on open PR #22** | Do not state that an unmerged clarification is already canonical |
| Runtime/Playwright browser test status | **Later technical preflight** | R0 CI success/failure is not an empirical gameplay result |
| Owner accepts Stage 0 Gate 3 by merging this draft alone | **Reject** | A documentation merge is not an explicit gate acceptance under the roadmap |

**Reviewer questions:** Does first-exposure allocation actually test a meaningful act/refrain choice? Can the participant access crucial evidence before either cutoff in supported modes? Do any controls use knowledge a human cannot obtain? Can we distinguish rational cautious intervention from blind reflex? Would any "negative result" be attributable only to an unfair fixture? Which assumptions must be locked before the first nonpilot participant?

**No peer agent response is claimed in this document. No new project version/ChangeID is allocated to this draft.** [PR #22](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/pull/22) already proposes the next development serial `SF-0006`. Preserve monotonic versioning and decide the follow-on accepted integration version **after** PR #22's disposition; do not create competing `SF-0006` entries or edit `main` merely to publish a research proposal.

*The experiment should be capable of telling us that the stagehand's job isn't interesting. Otherwise we have designed a demonstration, not a test.* — Mothlight
