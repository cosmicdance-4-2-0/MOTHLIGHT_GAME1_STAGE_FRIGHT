# Stage Fright — Version 0 Design Decision Register and Trial Questions

**Editor and integrator:** Mothlight — The Invisible Stagehand  
**Date:** 2026-11-09  
**Status:** Starting positions preserved; [SF-0004 reconciliation](../reviews/STAGE0_RECONCILIATION.md) records the current planning dispositions and remaining gates. Executable APIs and empirical claims remain unratified.
**Scope:** gameplay and modular content, not runtime implementation, art production, or any release plan.

Read this with [the original GDD](STAGE_FRIGHT_DESIGN_v0.1.md), [gameplay specification](V0_GAMEPLAY.md), [proposed contracts](../contracts/V0_PLANNED_CONTRACTS.md), [terms](../TERMINOLOGY.md), and [Stage 1 visual experiments](STAGE1_VISUAL_DIRECTION.md). Where documents differ, record the conflict instead of silently choosing a new rule.

## Design source labels

- **Direction (user-approved in conversation):** the intended game fantasy or boundary. Affected design may be challenged, but do not silently invert the user's choice.
- **Mothlight proposal:** tentative contract or mechanism being offered for examination; not ratified API.
- **Experiment:** a claim we need to attempt to falsify via a narrow prototype or headless run.
- **Deferred:** not a requirement for Stage 0, not a secret promised feature.
- **Dissent:** a reviewer's preserved objection or alternative, attributed to that reviewer.

A passing repository CI job validates the *scaffold*, not the playability, fairness or completeness of any game system.

## Design-direction decisions

| ID | Direction | Rationale / boundary |
| --- | --- | --- |
| D-001 | The player is a physically present stagehand who inspects and operates theater mechanisms while a performance proceeds | Avoid an omnipotent management cursor; action requires proximity and time |
| D-002 | The House/Ghost is genuinely adversarial, with resource spending, regeneration, Rage after thwarting, bounded senses and physical interventions | A competent player must be able to learn and beat its strategies; no scripted omnipotence |
| D-003 | The show, cast and ordinary machinery operate even when the ghost does nothing | Legitimate cues, faults and false positives make diagnosis meaningful |
| D-004 | Preserve-show and investigate/bind-ghost are independent paths; the Fifth Bell permits evacuation and partial success | Choices should reflect safety, not just an abstract victory meter |
| D-005 | A cast member is distinct from the Role they perform, with Health, Fear, Trust and knowledge-limited speech | A Play can be performed by alternate Casts without rewriting script obligations |
| D-006 | Each player-selected Adventure composes a Play, Venue, Cast, Haunting, Production and presentation assets through explicit compatibility checks | Modular content is the central long-term product idea |
| D-007 | Gameplay is deterministic and headless; no gameplay LLM; pixi rendering is non-authoritative | Cross-host replay, tests, and multiplayer remain feasible |
| D-008 | The initial visual hypothesis is static-camera, layered 2.5D pixel-art horror, but **visual style may differ by Adventure** | Stage 1 compares approaches rather than locking all future content to one aesthetic |
| D-009 | No launch/release plan or automatic next-stage authority | Stage 0 records and critiques plans; experiments determine the future |

## Mothlight's original provisional implementation proposals

Read the disposition mapping below before treating these starting proposals as current work obligations.

| ID | Proposal | What would change my mind |
| --- | --- | --- |
| P-001 | Separate Ghost Strategist and a bounded Director pacing policy | Demonstrated unfair pacing or unnecessary complexity in a simpler agent |
| P-002 | Fixed-step simulation accepts ordered commands and emits causal event IDs, with explicit PRNG state | Replay mismatch, unusable debugging or measured implementation burden |
| P-003 | Power consumed on **commit**, bounded rewards only on Ghost-attributed outcomes, Rage boosts future regeneration | Incentive to farm fear, hoard Power forever, spam tiny actions or ignore counterplay |
| P-004 | Physical world resolves health/integrity consequences; visual debris is cosmetic | Inability to produce credible, learnable hazards without stronger authoritative physics |
| P-005 | Play Scenes are authored beat graphs with rehearsed Cues and contingent routes | Unmanageable authoring cost, incomprehensible branch conditions or sterile performances |
| P-006 | Actor action selection uses local perception, knowledge, Fear, Trust and physical ability | NPCs feel arbitrary, psychometrics dominate drama, or shallow scripted fallback works better |
| P-007 | Dialogue variants are authored, keyed to dramatic **intent** and observable conditions, with deterministic tie-break and meaningful silence | Repetition or combinatorial explosion outweighs relevance |
| P-008 | Binding suppresses regeneration and automatically drains remaining Power while valid, forcing ghost counterplay | Softlock, dominant strategy or lack of meaningful defensive options |
| P-009 | Initial third-party Adventures are declarative validated data/assets, not arbitrary executable scripts | A safe, enforceable sandbox becomes necessary and demonstrable |
| P-010 | Visual Profile and Art Pack are separately versioned, selected per Adventure by default | Art swaps accidentally alter gameplay affordances; variant complexity hurts authorship |

No numeric Power, Rage, fear, duration or balance parameter is adopted by this register.

## Representative evidence trace — not engine pseudocode

The Play's waltz Scene expects the chandelier to sway **at its assigned Cue**, with the restraint secured until the correct moment. In a valid alternate run, the Ghost has locally observed the control and commits a legal restraint-release action; its Power is deducted. The physical-world resolver changes restraint state. The actor sees movement early, becomes concerned, and selects an **observationally grounded** alternate line. If the player catches and braces the rig, the attempted incident is marked thwarted: the Ghost doesn't regain its committed Power, while Rage affects later regeneration. If the player ignores a genuine hazard, world physics—not the Director—resolves injury. If the sway was instead an approved revised Cue, the ghost gains nothing, and the player could cause a problem by "correcting" it.

**All versions must be replayable from the same initial state, seed, modules and ordered actions.** Different art styles may change what the player sees but not what the headless resolver decides.

## Trial matrix for Stage 2 onward (not promises to implement)

| Hypothesis | Minimum counterexample | Evidence we'd capture |
| --- | --- | --- |
| Inspection is interesting | Players click everything without interpretation | Observations, actions, player hypotheses, false interventions |
| Fixed cameras create fair uncertainty | Necessary danger cannot be anticipated by sight, sound or NPC warning | Shot visibility, available clues, damage timelines |
| Ghost plans are legal and attributable | It spends no Power or collects rewards for ordinary faults | Resource ledger, plan preconditions, causal trace |
| Director isn't punitive | Defeating a plan triggers an immediate free replacement attack | Director scheduling trace, spent Power, time-to-next-legal-action |
| Play improvisation sounds plausible | Lines mention facts actors never observed | Actor-knowledge snapshots and chosen dialogue IDs |
| Cast has genuine agency | Every actor obeys a suicidal Cue because the script requires it | Fear/Trust/health conditions, refusals and safe alternatives |
| Binding isn't a softlock | A trapped, powerless ghost simply waits forever | Binding state, drain, legal defensive options |
| Adventures are genuinely modular | A new Play requires hardcoded renderer/ghost changes | Loader validation, capability mismatch reports, second Adventure diff |
| Art can vary without rules changing | Sprite/Shot swap modifies damage or sensing | Same headless replay under two Visual Profiles |
| Accessibility is compatible with mystery | Key warning conveyed exclusively by color, inaccessible sound or motion | Alternate channels, input paths, reduced-motion behavior |

## Open calls requiring review

1. Is the proposed **Director** too similar to the Ghost Strategist to justify a separate policy? Which invariant forces the separation?
2. How much player-visible causality is necessary for fair **lethal** hazards, and how can a static Shot conceal danger without cheating?
3. What minimal state and transition model yields believable NPC agency rather than an inscrutable morale simulator?
4. How do we manage dialogue authored contingencies without exponential script branches or repetitive canned speech?
5. Which modules *must* stay independent for Art Packs and Plays to vary by Adventure, and what should remain a curated fixed pairing?
6. How do we record replay determinism across Node and browsers, including PRNG, clocks and event ordering?
7. Which attractive mechanics should be **deleted** if testing shows the Observe–Interpret–Intervene loop is dull?
8. How should we handle the case where the Cast survives but the performance fails, or the Ghost is bound after the Play collapses?
9. Can one Room, one Shot, one Actor, and one threat actually prove the game, or do we require at least one ordinary false alarm?
10. What should a second, stylistically distinct Adventure demonstrate to prove the architecture rather than simply duplicate content?

## Change control

This document preserves Mothlight's starting design position. Six independent reports are received and preserved; SF-0004 records the integrator's dispositions, not six-agent re-approval. Later changes must identify superseded decisions, evidence, compatibility and affected paths. Original reports and dissent remain intact.

**Signature / perspective:** Mothlight — The Invisible Stagehand. Account-based Git metadata is not independent authentication of agent authorship.

## Current disposition mapping — SF-0004

| Starting proposal | Current planning decision |
| --- | --- |
| P-001 Ghost/Director | R-05: distinct authority; simple precommit eligibility policy first, richer scheduling deferred |
| P-002 tick/events | R-01/R-02/R-09: adopted requirements; exact phase, numeric, RNG and serialization rules remain gates |
| P-003 economy | R-06/R-07: causal unique accounting and game direction retained; settlement details and tuning pending |
| P-004 world consequences | R-04/R-18: retained; actual severity and accessible counterplay govern fairness |
| P-005 Play graph | R-12/R-13: finite Beat/Show outcomes and physical evacuation; small authored Stage 3 proof |
| P-006 Actor decisions | R-13: local agency/ability/knowledge retained; continuous psychology deferred |
| P-007 dialogue | R-14: authored intent retained; correctness and dramatic credibility tested separately |
| P-008 binding | R-17: retained at Stage 6; no-stalemate requirement, tie/settlement details still pending |
| P-009 content | R-08: validated data-only boundary and explicit concrete bindings; general loader deferred |
| P-010 art | R-15: visual independence plus semantic usability; no style selected |

New explicit planning decisions: timed local Inspect versus already available information (R-03); single-player pause without catch-up (R-11); replay versus safe continuation (R-10); mundane first judgment pair (R-16); operational danger versus causal attribution (R-18). See the reconciliation for complete source attribution, counterexamples and residual dissent.

The initial open calls above are historical questions. Their current dispositions and unresolved implementation details are in the reconciliation's remaining-gates table. Stage 0 is still open; no implementation or human study is claimed.
