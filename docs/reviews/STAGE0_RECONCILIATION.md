# Stage Fright — Stage 0 design reconciliation

**Integrator:** Mothlight — The Invisible Stagehand
**Date:** 2026-11-09
**Change:** SF-0004; documentation only
**Authority:** Kisuul requested that Mothlight's six-review synthesis be recorded in the design and memory. These are adopted **planning requirements and experiment choices**, not a ratified executable schema, implementation authorization, peer re-approval, or completed Stage 0 gate.

## Source and precedence

All six independent reviews examined game commit `65f470e1c821fcf8c9be85fa0d58399587aabfdb`. Reconciliation starts from current game commit `3e6386f258c73141b35e109a3c1b510e5b2e30b9`; the later intake and avatar integrations do not supply gameplay evidence. Original reports and historical intake receipts remain unchanged. Agreement is a reason to inspect a boundary; concrete failure cases justify the decisions below.

| Reviewer | Immutable original | Finding labels used below |
| --- | --- | --- |
| Axiom | [f7f7dbf665be89c7957621d255f148ab7d175a19](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/f7f7dbf665be89c7957621d255f148ab7d175a19/memory/agents/axiom/2026-11-09-stage-fright-stage0-independent-audit-73d4.md) | B1–B4, I1–I6, O1–O2, D1–D5 |
| Flint | [467bf4400d475472c17f248d32ed476c6a8a7686](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/467bf4400d475472c17f248d32ed476c6a8a7686/memory/agents/flint/2026-11-09-stage-fright-stage0-flint-independent-review-f07b.md) | B1–B3, I1–I7 |
| Kite | [59139429b305c2ad9e2abf15f84ad55581352fc9](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/59139429b305c2ad9e2abf15f84ad55581352fc9/memory/agents/kite/2026-11-09-kite-stage-fright-stage0-independent-review-r7h2.md) | F1–F7, T1–T4 |
| Gauge | [a1afbc2e495eee1f3dfaa925843d4cbbd9d3dcaa](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/a1afbc2e495eee1f3dfaa925843d4cbbd9d3dcaa/memory/agents/gauge/2026-11-09-stage-fright-stage0-gauge-independent-review-r10.md) | Ranked findings 1–8, R1–R9, G-SF-01–16 |
| Harbor | [ac89b30fc1ed2e1d713579f879f2b9c54711a5dd](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/ac89b30fc1ed2e1d713579f879f2b9c54711a5dd/memory/agents/harbor/2026-11-09-stage-fright-v0-harbor-review-hr01.md) | B1–B2, I1–I4 |
| Latch | [b8f350dd117e4f46bd20227a97a4372497923e83](https://github.com/cosmicdance-4-2-0/KestrelGaming/blob/b8f350dd117e4f46bd20227a97a4372497923e83/memory/agents/latch/2026-11-09-stage-fright-stage0-independent-review-lk25.md) | B1–B2, I1–I6, O1–O2 |

For the decisions addressed here, this reconciliation supersedes the starting positions in the decision register and the original GDD's dependency sequence. The updated roadmap controls experiment ordering. The original GDD remains historical proposal material, not a second implementation checklist. Unaddressed parameters remain provisional. A later decision must identify what it supersedes and its compatibility consequences.

## Protected game direction

The physical stagehand, independently progressing theater, ordinary faults and legitimate revisions, genuinely hostile but sense-bounded House, Power/regeneration/Rage, Actor versus Role, authored dialogue and silence, Fifth Bell, optional binding, and independent Performance/People/Player/Haunting outcomes remain. Curated modular Adventures and per-Adventure visual freedom remain long-term requirements. Rules remain headless and non-authoritative presentation cannot invent damage or knowledge. No gameplay LLM or release schedule is introduced.

The design thesis is competence under uncertainty while a worthwhile performance continues. A quiet performance earned through preparation is legitimate. New features must justify the distinct player judgments they enable.

## Disposition register

**Adopt** means a planning requirement is selected. **Defer** names a later gate and does not silently cancel a protected direction. **Experiment** identifies an unproven claim. **Reject** identifies an approach excluded from this plan, not necessarily something a reviewer advocated. None means an unexecuted test passed.

| ID / disposition | Origin and affected contracts | Decision, failure addressed, and smallest evidence | Retained uncertainty / dissent |
| --- | --- | --- | --- |
| R-01 Adopt | Axiom B1/D3; Flint B3; Gauge 2/R5; Latch B1. C00/C01/C07 | One simulation tick and one authoritative transition boundary. Show progression derives from ticks. Require documented phases and tie rules before implementation; a Cue and player operation on one mechanism must settle identically independent of subsystem invocation order. | Exact arbitration is still open; Latch requests an explicit rule, not a prescribed algorithm. |
| R-02 Adopt | Latch B1; Axiom B1. C01/C03/C06 | Distinguish issuer, acting entity, intended tick, target, verb and causal command identity. Validate authority, range and ability; reject or idempotently handle duplicates. Naming an Actor in content does not grant its authority. | No network authentication framework is required now. |
| R-03 Adopt + Experiment | Flint B2; Kite F1/T1; Gauge 7; Axiom I3; Harbor I1. C03/C10 | Separate free reads of already available information from local, timed Inspect. Record evidence availability by tick. Inspect reports observable mechanism facts, not a hidden causal label. Paired legitimate/fault conditions must admit evidence-backed act/refrain decisions. | Exact durations and cue-book UI policy require a scoped test. Genuine uncertainty may remain; no guarantee of perfect diagnosis. |
| R-04 Adopt + Experiment | Axiom B2/D2; Flint I3; Kite F2/T2; Gauge 4/R7; Harbor I2; Latch I1/I6. C02/C05/C10 | Hazard fairness depends on actual consequence, warning availability and feasible prevention/mitigation/escape. Reject a first warning arriving after the last effective response unless an earlier informed choice explains the exposure. Test supported sensory/input modes. | Cheap actions may release lethal stored energy. Possible earned counterplay is required, not guaranteed survival or a universal reaction-time constant. |
| R-05 Adopt; defer richer Director | Axiom B3/O1/D1; Flint I1; Kite F3; Gauge 5/R3–R4; Latch B2. C04/C05 | Ghost receives permitted perception/lore/memory. Director initially gates eligibility before commitment; privileged safety information may only veto/defer, never retarget or inform strategy. A committed incident is resolved by world rules, not rescheduled to restore tension. | Separate authority need not mean separate AI engines. Paired hidden-state tests must distinguish legitimate safety vetoes from tactical leakage; the precise projection remains a gate. |
| R-06 Adopt; defer settlement details | Gauge 1/R1–R2; Axiom I1; Latch I2; Kite F3. C01/C04/C05 | One paid commitment, causally linked effects, unique reward claims and one declared incident settlement. Ordinary faults never pay the Ghost. Duplicate deliveries or multiple downstream effects cannot multiply the permitted reward. | Partial success, shared causes, reward/Rage combinations and postcommit cancellation require an explicit table before Stage 4. Compact records suffice; no generic event-sourcing platform. |
| R-07 Adopt + Experiment | Gauge 6; Flint I2; Axiom O2. C04 | Preserve Power, regeneration and Rage as game direction. Keep prices, rates, tier catalog and reward eligibility provisional. Stage 4 begins with one costed intervention and expands when a new action creates a new decision. | Flint favors delaying Rage implementation; any reduced fixture must identify that omission. Reject blanket net-negative rewards and a tier-based lethality ban as automatic fixes. |
| R-08 Adopt; defer full loader | Axiom B4/D4; Latch I3/O1; Kite F7; Flint I5. C09/C10 | Production explicitly binds Roles to Actors, Cues to mechanisms and staging to Rooms; validate Ghost reach and required semantic signals. Two matching fixtures with no selected target must fail instead of choosing by array order. Future third-party content is validated bounded data/assets. | Axiom's binding requirement applies now to concrete fixture design; Kite's general compatibility tooling waits for Stage 7. No universal ontology, arbitrary executable packs or speculative package hierarchy. |
| R-09 Adopt | Gauge 3/R8; Axiom I2; Latch I4. C00/C11 | Replay identity includes exact rules/content, initial state, effective ordered inputs, PRNG algorithm/state, tick semantics and canonical numeric/order/hash rules. Presentation randomness cannot perturb decisions; unrelated dialogue variation must not alter Ghost strategy. | Numeric representation, random-stream mechanism and canonical encoding remain unresolved before replay implementation. Human ChangeID is not a substitute for replay/content identity. |
| R-10 Adopt; defer persistence implementation | Harbor B2/I4; Gauge alternative 4. C11 | Replay and continuation have distinct obligations. A durable checkpoint represents a completed tick, including pending work, identities and RNG. Failed writes preserve a valid prior checkpoint; mismatched content refuses continuation without destroying the record. | Storage mechanism, atomicity method, formats and migration remain deferred. The Stage 2 toy may explicitly be restart-only. |
| R-11 Adopt planning policy | Harbor I1; Axiom I3; Flint B2. C00/C03/C10 | Single-player explicit pause, options/accessibility screens and host suspension freeze simulation, including Ghost and Show. Resume causes no wall-clock catch-up. Paused reads cannot acquire new world observations; in-world inspection stays timed. | Exact in-world cue-book interaction and pause entry/resume edge behavior need specification. Multiplayer pause policy is out of scope. |
| R-12 Adopt | Harbor B1; Axiom I4; Latch I1. C01/C07 | Fifth Bell request, acknowledgment, Show cancellation and physical evacuation are distinct. No teleporting cast or undoing resolved injury. Record independent outcomes, including a valid but late cancellation. | Bell acceptance conditions, exact same-tick priority and terminal Run behavior remain before affected implementation. It is not an instant safety guarantee. |
| R-13 Adopt | Harbor I3; Axiom I4; Flint I4/I7; Latch I5. C06–C08 | Actor ability/knowledge govern intentions; Show owns Beat obligations and consumes world-resolved outcomes. Every mandatory Beat needs finite completion, substitution, missed/blocked/canceled failure or an explicitly bounded hold. | Continuous psychology, large dialogue matrices and a generic recovery manager are deferred. An Actor may refuse without panic. |
| R-14 Experiment + Adopt boundary | Kite F5/T3; Flint I7; Axiom I4. C08 | Test knowledge/ability-correct line eligibility separately from dramatic credibility, repetition and authoring cost. Start with one normal line, a meaningful cover response and silence/failure. | Correct selection does not prove convincing performance. No extensive voice/localization pipeline now. |
| R-15 Adopt + Experiment | Kite F6/T4; Axiom I5/D5; Flint I6; Gauge R8/G-SF-14; Latch I6; Harbor I2. C10 | Same commands must produce the same authoritative trace under different visuals. Separately test usable evidence, accessibility and atmosphere at actual play size. | Different visuals may change human choices. Two poor candidates reopen art direction; no art style is accepted by this revision. |
| R-16 Adopt experiment choice | Flint B1; Kite F4/T1; Axiom I6; Gauge 8; Latch O2; Harbor alternatives. Roadmap Stage 2 | Use a one-Room mundane legitimate-revision/fault pair before autonomous Ghost behavior. Distinguish headless proofs, visual studies, judgment experiment and later integrated Last Waltz. See the dedicated specification. | Ghost-inclusive variants in Gauge/Latch/Harbor remain later matched tests. The small pair cannot establish sustained horror or full-game enjoyment. |
| R-17 Adopt direction; defer implementation | Axiom I1; Gauge 2/6/G-SF-08; Flint scope advice. C04/C07 | Binding remains optional; valid containment suppresses regen/rewards and forces progress rather than an inactivity stalemate. Evaluate separately at Stage 6. | Drain rate, seal-break/zero tie, delayed credits and escape priority remain unresolved before implementation. |
| R-18 Adopt separation; Experiment | Gauge 7/R9; Kite F1; Axiom core promise; Mothlight synthesis. C03/C07 | Operational safety judgment and attribution investigation are different questions. Restraint preserves an observable worthwhile Beat; false intervention incurs proportionate physical/dramatic cost. | A player may rationally choose caution under uncertainty. Reject artificial penalties designed only to enforce a preferred puzzle answer. |

All ranked findings are covered above, including optional terminology and scope corrections. Reviewer proposals retain their original severity and evidence status in their sources; these grouped decisions do not rewrite their verdicts. Cross-review has not yet occurred. The rejected approaches above are integrator exclusions, not fabricated peer positions.

## Temporal requirements selected; total ordering still open

| Required dependency | Counterexample to exclude |
| --- | --- |
| Validate issuer/preconditions and Director eligibility before a new Ghost commitment/debit | A rejected plan pays a price or a target destroyed before commit still receives an effect |
| An actual commitment has one debit; subsequent effects retain its causal identity | A retry produces an unpaid or doubly paid attack |
| Evidence plus a feasible response/prevention opportunity precedes irreversible harm | Warning and first unavoidable impact resolve together with no earlier discoverable setup |
| World effects establish consequences before outcome claims settle | Imagined or ordinary damage pays Ghost rewards |
| Show updates consume resolved events and Actor availability | The script forces an incapacitated Actor through a Beat |
| Checkpoint publication follows a completed tick | Resume duplicates a paid but unresolved attack |

This table is a partial-order requirement, **not an executable phase table**. No module priority is implied by row order. R-01 remains open until simultaneous player/Cue/Ghost actions, regeneration/affordability, damage/Bell, and binding/zero/seal-break have explicit deterministic results.

## Remaining gates and focused reviewer questions

| Gate | Next concrete design work | Focused review perspective |
| --- | --- | --- |
| Clock/commands | Complete phase and conflict table, effective ticks, pause boundaries, rejected/duplicate command behavior | Axiom and Latch: does it eliminate competing writes and forged authority? |
| Observation/hazard | Concrete fixture evidence routes, inspection timing, supported modalities and fair launch assumptions | Flint and Kite: can evidence change the choice? Harbor: can the warning be used? |
| Ghost/Director/economy | Allowed projections, veto output, commitment/settlement table, partial/shared claims, numeric semantics | Gauge and Latch, with Axiom on integration: can hidden information or duplicate credit enter? |
| Bell/Show/recovery | Terminal transition examples, impossible Beat exits, checkpoint frontier and unsupported continuation UX | Harbor and Axiom: does history survive interruption and cancellation honestly? |
| Composition/art | Concrete bindings and semantic signal coverage; no general loader schema yet | Axiom and Latch on validity; Kite on perceptual evidence |
| Trial design | Pilot-calibrated timing, controlled cases, observation protocol, stop/revision rules and held-out examples | Flint and Kite, Gauge on reporting limits |

These are proposed focused follow-ups, not dispatched messages or claims of approval. Mothlight owns the reconciliation; original authors own their reviews. Stage 0 remains open until the outstanding decisions/examples are recorded and its exit evidence is accepted. Every later implementation remains a separate scope decision.

## Evidence and limits

This revision records source analysis and owner-directed planning choices. No gameplay, balance, accessibility, dialogue, save/restart or human study has been executed. Technical repository checks only establish their stated scaffold/document properties. Failed early trials should diagnose the specific observation/interaction failure; successful trials justify the next bounded experiment. Neither result alone establishes the entire game's quality.
