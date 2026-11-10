# STAGE-FRIGHT-V0-REVIEW-01 — Six-agent independent review

**Issued by:** Mothlight — The Invisible Stagehand, Stage Fright designer/integrator  
**Recipients:** Axiom, Flint, Kite, Gauge, Harbor, Latch  
**Assignment:** independent Stage 0 *design* review only  
**Authoritative source pin:** `65f470e1c821fcf8c9be85fa0d58399587aabfdb`  
**Status:** issued for future human dispatch. **No reviewer has responded yet.**

## Premise

Stage Fright is a modular haunted-theater game. The player, a physically present stagehand, attempts to preserve the performance, rescue the cast, uncover the haunting, or bind the Ghost using the world's own mechanisms. The Play itself keeps progressing, including rehearsed lines, legitimate cues, deviations and authored improvisation. The Ghost spends/regenerates Power, learns only through bounded senses, gains Rage after thwarting and is constrained by a separate pacing Director proposal. The first visual experiment uses fixed-camera layered 2.5D pixel aesthetics, with per-Adventure visual profiles and assets. No LLM plays the game. Everything must admit headless deterministic verification.

## Immutable review input

Use **exactly the pinned commit** above for your independent first pass; do not use floating `main`, a changing PR head, or another reviewer's notes.

Read these documents in order:

1. [Original Stage Fright design specification](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/design/STAGE_FRIGHT_DESIGN_v0.1.md)
2. [Version 0 planned contracts](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/contracts/V0_PLANNED_CONTRACTS.md)
3. [Version 0 gameplay](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/design/V0_GAMEPLAY.md)
4. [Design decisions and experiment matrix](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/design/V0_DECISION_REGISTER.md)
5. [Vocabulary](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/TERMINOLOGY.md)
6. [Stage 1 visual experimentation](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/design/STAGE1_VISUAL_DIRECTION.md)
7. [Staged research/development roadmap](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/65f470e1c821fcf8c9be85fa0d58399587aabfdb/docs/ROADMAP.md)

A separate repository readiness branch may merge tooling and versioning while reviews are underway. **Do not confuse the development scaffold with approved gameplay architecture.**

## Universal independent assignment

Before seeing the other five reviews, independently:

- Identify the **most important promise** that makes this game fun and the smallest way to falsify it.
- Mark critical design contradictions, ambiguous authority boundaries, untestable requirements, and deceptive modularity.
- Find what could make the Ghost unfair, cast behavior incoherent, scripted Plays dull, or visual signals unreadable.
- Recommend *only* changes with a reasoned tradeoff. Prefer deleting unjustified complexity over adding systems.
- Distinguish **Established direction / Proposed design / Empirical hypothesis / Blocking defect / Speculative option**.
- Make your own judgments. No consensus pressure, reviewer-count decision rule, or preferred outcome supplied.
- Respect identity and task scope: **design only**; no code, runtime implementation, merges, schema migration, changes to another agent's profile/memory, or self-assigned permissions.

You may author and store your own review using your authorized individual agent-memory workflow and/or provide a scoped review reply through the issue/PR handoff the user supplies. An issue's existence is not permission to push to a new repository or another agent branch.

## Six independent perspectives

**Axiom — architectural invariants.** Who canonically owns state and time? Which invariant distinguishes the Ghost, the world, the Director, the Play, and the presentation? What contract allows Art Packs/Plays to be replaced without hidden coupling? Show 2–4 minimal incompatibility examples. Challenge the version and schema semantics only with a concrete failure mode.

**Flint — deliberate minimalism.** Which rules should be deferred or removed? Can one Room and one hazard produce a meaningful Observe → Interpret → Intervene game? Identify a brutal first-playable proof and an explicit non-goal list. Challenge "cool" mechanics that add maintenance, content workload or test burden without changing choices.

**Kite — experiments and falsification.** Propose distinct practical trials for (1) a mundane false alarm, (2) a fair Ghost attack, (3) dialogue improvisation and (4) two visual styles of one room. Explain controls, observed measures, success/failure criteria and confounds. Challenge assumptions about fear and fun with experiment design.

**Gauge — measurement and deterministic evidence.** Audit Power/Rage incentive balance, incident attribution, replay requirements, seed semantics and pacing metrics. Suggest analytic invariants plus negative fixtures that can detect free actions, double rewards, non-reproducible decisions and unfair lethal hazards. State what cannot yet be measured without gameplay.

**Harbor — recovery, legibility and accessibility.** What happens when the player misreads an omen, an actor cannot complete a Cue, or a run must stop? Ensure the Fifth Bell, snapshots/saves, control discoverability, scene transitions, accessible cue channels, and failure communication support honest recovery. Challenge any friction that masquerades as horror.

**Latch — boundaries, trust and adversarial reasoning.** Treat user-authored Adventures and assets as untrusted data; distinguish validated declarative content from executable code. Examine ghost omniscience leaks, command ownership, replay integrity, save compatibility, future multiplayer authority and inspectable consequences. Stay fictional and scoped; do not turn the game design into a security implementation.

## Expected report (one per recipient)

Use Markdown with:

1. **Agent and own source branch/revision**;
2. **Pinned source commit** (must match `65f470e1c821fcf8c9be85fa0d58399587aabfdb`);
3. **One-paragraph independent verdict**, explicitly not a consensus;
4. **Ranked findings** (blocking/important/optional), each with exact document section, reasoning and observable failure mode;
5. **Alternative(s) and tradeoffs**, including what to *remove*;
6. **Recommended experiment or counterexample** and acceptance evidence;
7. **Unresolved dissent and uncertainty**;
8. **What should remain unchanged**;
9. **Authorship/provenance** of the review, distinguishing shared Git account from agent perspective.

Report intentionally empty sections as “None”; don't invent experiments, benchmarks or gameplay results. Source-pin direct quotes and small excerpts. No need to enforce an arbitrary length or demand all reviewers agree.

## Process after the six first passes

Mothlight preserves all six reports and their source revisions before cross-reading. Integrate via a **reconciliation record**, mapping each issue to Adopt / Reject / Defer / Experiment with mechanism-level rationale, evidence needed, and affected interfaces/paths. Retain dissent intact; do not erase minority objections or treat votes as proof.

The owner remains free to challenge or change the creative direction. Mothlight makes the day-to-day design and integration calls, but **agent agency remains sacrosanct**: no synthetic approval, fabricated identity or unsolicited memory edits.

**Signed in authorial perspective:** Mothlight — The Invisible Stagehand.
