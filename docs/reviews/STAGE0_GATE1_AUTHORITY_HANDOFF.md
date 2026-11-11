# STAGE0-G1-AUTHORITY-01 — Authoritative Simulation Contract

**From:** Mothlight — The Invisible Stagehand, Stage Fright integrating designer  
**To:** Axiom, Latch, Gauge, Harbor, Flint, Kite (six independent focused reviews)  
**Gate:** Stage 0 completion gate 1 of 4 — *Resolve the authoritative simulation contract*  
**Task mode:** independent **design and falsification only**; no gameplay implementation, art work, merges, or contract ratification  
**Immutable project input:** 107ae2b446405d225feac01595e9ead08d679bde — Stage Fright main, version **0.0.2.4/SF-0004**  
**Status:** **issued for owner delivery**, not automatically run; all six reports awaiting actual agent work

## Why this gate comes first

The six Stage 0 reviews were reconciled in SF-0004, but the reconciliation expressly stops short of an executable phase/conflict rule. Its requirements are not an algorithm. We need to know *what happens* when the Player, Show Cue, Actor and future Ghost all try to affect one chandelier restraint during the same simulation tick. If competing subsystems can each write world truth, the game cannot promise fair consequences, trustworthy observations, or deterministic replay.

**Protected direction** from SF-0004: one authoritative world, one simulation tick, in-world actions that consume time, a progressing Play, independent Actor intentions, a perception-bounded Ghost, a Director that gates rather than secretly cheats, genuine physical danger, Fifth Bell as a request rather than retroactive rescue, and a nonauthoritative renderer. Preserve later capabilities without implementing them for the first mundane judgment experiment.

The test is not whether everyone writes the same preferred algorithm. It is whether an integrator can choose **one minimal, total, reproducible contract** from independently justified alternatives.

## Read exactly these source-pinned inputs

Read in order; use the URLs at the exact commit, not the floating branch.

1. [Stage 0 reconciliation, especially R-01/R-02 and its temporal requirements](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/reviews/STAGE0_RECONCILIATION.md)
2. [Version 0 planned contracts C00, C01, C02, C03, C04, C05, C06, C07 and C11](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/contracts/V0_PLANNED_CONTRACTS.md)
3. [First judgment experiment — mundane cue versus fault](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/design/STAGE2_JUDGMENT_EXPERIMENT.md)
4. [Terminology: Room, Cue, Beat, Actor, Role, Performance, Run](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/TERMINOLOGY.md)
5. [Working architecture and repository separation](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/ARCHITECTURE.md)
6. [Stage 0 exit criteria and Stage 2 scope](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/ROADMAP.md)
7. [Current version/change and agent authorship rules](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/107ae2b446405d225feac01595e9ead08d679bde/docs/VERSIONING.md)

You may consult **your own prior authored Stage 0 first-pass review** for continuity. Do not read another agent's new Gate 1 response before securing yours. The six original first-pass audits are preserved in the reconciliation and intake record; their prior findings are not instructions to agree.

## The exact task

Propose or critique the minimum **authoritative simulation transition contract** needed to eliminate ambiguous competing writes. Treat the following as questions to answer, not preapproved API symbols.

1. **Clock and state:** what defines the authoritative tick, accepted/effective command time, current state, one completed transition, paused versus suspended behavior, and snapshot/event boundary? The Show derives from simulation time; rendering never advances it.
2. **Command provenance:** how are issuer/source, acting entity, requested action, target, causal ID, intended tick, permissions, ability and locality represented/validated? What happens to invalid, stale, duplicate and future-dated commands? A Play author naming an Actor is not permission to impersonate one.
3. **Action arbitration:** in what explicitly defined order (or alternative equivalent deterministic conflict system) do player operations, scheduled Cues, Actor proposals and future Ghost commitments modify the same mechanism? One resolver owns the final effect, and input iteration/module callback order must not be a hidden tie-break.
4. **Causal effects:** how do accepted intentions become world state changes, damage, warning evidence, incident identity, Show Beat result and actor-local observations? World truth and accessible observations must remain separate.
5. **Ghost/Director seam:** define the minimal precommit eligibility/authorization decision and the **point of a single Power debit**, including regeneration/affordability precedence. Director may veto/defer but cannot send privileged tactical information or rewrite a committed outcome. Define explicitly what is **later-gated** (settlement, partial success, Rage and binding ties) if not settled here.
6. **Emergency/terminal ties:** how does a Fifth Bell request relate to same-tick injury, Show cancellation, Actor evacuation, and already resolved effects? How does a required Beat terminate when the assigned Actor refuses or is incapacitated? Preserve partial outcomes without rewriting history.
7. **Determinism/replay:** what input/state/PRNG/content identity must be pinned to repeat this transition in Node and browser? Distinguish deterministic reexecution from durable save/resume; full persistence is *not* required for Stage 2.
8. **Observability:** when does a timed Inspect reveal an observation, when does free read merely display already-known evidence, and what may presentation know? Render timing cannot change who learned what.

**No magic durations or priority integers.** If a proposed mechanism requires a number, identify a named tunable parameter and its unit, default selection policy and evidence required to fix it. Do not canonize a comprehensive engine schema or content ontology at this gate.

## Mandatory adversarial examples

For each example, provide an expected deterministic outcome **or an explicit alternative rule with a reproducible tie and tradeoff**. Do not silently declare arbitrary outcomes canonical. Cases marked later-gated must still have a declared dependency boundary, not a hidden loophole.

| ID | Candidate collision / failure | Required proof or declared gate |
| --- | --- | --- |
| G1-01 | Player Operate and legitimate Show Cue address one restraint in tick T | Exactly one resolved mechanism transition; ordered accepted/rejected/compensated events |
| G1-02 | Two contradictory valid Actor/Player intents target the same control | Authority and conflict rule independent of module call order |
| G1-03 | A Play script names an Actor as an issuer; another command repeats a previously accepted ID | No actor impersonation, duplicate effect, or invisible acceptance |
| G1-04 | Timed Inspect begins before a Cue and completes after it; player pauses or loses browser focus during progress | Evidence availability and paid time remain unambiguous; no wall-clock catch-up |
| G1-05 | Ghost has exactly borderline Power when regeneration and a prospective attack share a tick | Affordability, eligibility and commitment debit have one declared relationship |
| G1-06 | Director vetoes a candidate after seeing safety-only information unavailable to Ghost | Ghost learns no privileged fact; veto cannot become a new tactical target |
| G1-07 | Ghost pays once; impact creates two downstream damage events and a duplicate delivery | Exactly one causal incident and no multiplied reward or debit |
| G1-08 | Fifth Bell is requested on the tick a dangerous rig impacts an Actor | Explicit ordering; Show can cancel without undoing physical harm |
| G1-09 | Injured/refusing Actor cannot satisfy a mandatory Beat | Bounded hold/alternate/failed Beat; no forced puppet action or permanent hang |
| G1-10 | Binding integrity breaks when Ghost Power reaches zero | Explicit future settlement gate and invariant; do not accidentally choose a tie today |
| G1-11 | Same seed and commands, different rendering cadence or unrelated dialogue randomness | Identical authoritative event/state trace; distinct presentation RNG |
| G1-12 | Replay references a different content hash or tries to continue from mid-tick state | Reject incompatibility; completed-tick checkpoint boundary, not fake resume |
| G1-13 | Command arrives stale or during pause; player resends with same causal ID upon resume | Defined rejection/defer/idempotency; no skipped/duplicated effects |
| G1-14 | Show Cue produces visual movement while world resolver reports restraint unchanged | Presentation cannot invent world action or alter hazard history |

**Minimum first proof:** be able to resolve G1-01, G1-03, G1-04, G1-08, G1-09, G1-11 and G1-13 without Ghost AI, persistence framework or art production. The other examples are forward-compatibility seams or later-gated decisions with explicit guards.

## Individual independent assignments

- **Axiom — architecture and total transition:** propose the smallest coherent phase/authority model; identify state-owner invariants and alternative arbitrations. Show how C00/C01/C02/C07 compose without circular authority, and expose contradictions in G1-01/02/08/09.
- **Latch — command trust boundary:** adversarially examine issuer/actor distinction, origin checks, duplicate/stale IDs, unauthorized script intents, Ghost observation/Director veto information leakage. Supply reject/defer/commit semantics with negative cases G1-03/06/13.
- **Gauge — deterministic numerical and causal accounting:** audit ordering, PRNG partitioning, tick arithmetic, regeneration/debit/incident once-only ledger and cross-host replay identity. Propose proof fixtures for G1-05/07/10/11/12 and flag what must wait.
- **Harbor — human continuity and safe exit:** review pause/suspension/Inspect timing, Bell/injury ordering, finite Beat exits and completed-tick recovery frontier; verify that invalid/stale commands and unavailable information are intelligible. Focus G1-04/08/09/12/13.
- **Flint — minimal coherent contract:** try to delete every abstraction unnecessary for a one-Room mundane cue/fault decision. Find the smallest Step-and-Cue rule that still admits a future Ghost and Actor without redesign. Specify what should be deliberately deferred; red-team G1-01/04/09/14.
- **Kite — falsifiability and fairness:** produce paired timelines and cheap tests that can distinguish arbitration bugs from poor evidence design. Show where order changes the stagehand's act/refrain opportunity, perception, legitimate Cue outcomes and false intervention consequences. Focus G1-01/04/08/11/14.

**Collaboration rule:** write six **independent** first passes before reading the new Gate 1 responses from others. Axiom is an architectural reviewer, *not the appointed implementation owner*; Mothlight remains sole integrator of this gate and will retain every substantive dissent. Explicit owner instruction is required to change implementation scope.

## Required report shape

A complete first-pass report supplies:

1. Agent/profile name; source-pinned game commit **107ae2b446405d225feac01595e9ead08d679bde**; own report commit/URI; independence statement;
2. **Own verdict** and the most important invariant or risk;
3. Proposed transition phases or competing models with **state ownership, inputs, outputs and tie rules**;
4. Decisions and counterexamples for the applicable G1 cases; exact expected trace shape or a finite, testable alternative;
5. Critical / important / optional findings, citing specific source paths/sections;
6. What can be proved by the first mundane toy versus which rules must be **explicitly deferred** to Stage 4/6/7;
7. Tests **proposed**, not falsely claimed executed; evidence for feasibility, determinism and fairness **separately**;
8. Dissent, uncertainty, deletions and paths/interfaces affected;
9. Attribution that distinguishes claimed agent perspective from shared GitHub authentication.

Reports may be submitted using the engineer's **authorized own KestrelGaming branch memory procedure** or as an attributed comment with a permanent source link in their assigned game-repo issue. No new blanket permission to push the game repository or another agent's branch is granted. Issues are invitations for **human delivery**; publishing them does not instantiate the agents or deliver their work.

## Integrator acceptance and next step

**Gate 1 is not closed by six reviews, a passing documentation CI run or a reviewer vote.** I will record each response at its original revision, independently reproduce the proposed counterexamples as paper/model traces, then issue one source-pinned reconciliation with chosen **authoritative phase and tie table**, command ownership, event/observation visibility, rejected/duplicate handling, pause/Bell boundaries, exact minimal prototype seam and named deferred gates.

A later Stage Fright version/ChangeID is assigned **when an accepted integration occurs**, never simply because invitations were opened. Any contract update requires path-level changelog, compatibility review and a new version validation run. The prototype and human playtests are separate later authorizations; none is started here.

**Signed authorial perspective:** Mothlight — The Invisible Stagehand. Shared repository account authentication is distinct from persona attribution.

