# Stage Fright — Stage 1 Visual Exploration

**Status:** planned art decision process, **not yet an art-style selection or asset-creation assignment**.

## Starting hypothesis

A fixed-camera, layered, theatrical **2.5D pixel-art horror** presentation can convey danger, uncertainty and cast expression while remaining compatible with PixiJS. It deliberately uses authored camera **Shots** rather than a freely rotating 3D camera.

The visual design must support gameplay clarity. A scene should be frightening because of what the player infers, not because the hazard is rendered illegibly.

## Candidates to compare

| Candidate | Description | Strength | Main risk |
| --- | --- | --- | --- |
| **A. Full pixel theater** | Cohesive pixel backgrounds, props and animated performers; deliberate pixel scale | Consistent identity; asset reuse; straightforward layering | Atmospheric depth/lighting may be difficult without muddying silhouettes |
| **B. Painted plates, pixel cast** | Rich layered backgrounds with pixel character/prop sprites | Strong fixed-camera mood, old survival-horror feel | Scale/perspective mismatch; characters can look pasted onto plates |
| **C. Modern HD-pixel stage** | Pixel characters over detailed layered art with more sophisticated light/particle effects | Expressive supernatural effects, flexible compositions | Greater pipeline and readability cost |

**Recommendation to test first:** A against B. Do not lock either before comparing actual Shots at target screen sizes. Option C remains an exploration, not a scheduled obligation.

## First Adventure: candidate dramatic Scenes and navigable Rooms

**Working Adventure:** *The Last Waltz*.

**Play (script) hypothesis:** one Act, three short Scenes:
1. *House Lights* — introductions, technical rehearsed Cues and a first opportunity for suspicion.
2. *The Waltz* — dancer takes the Stage; hanging scenery and lighting cues can be disrupted or improvised.
3. *The Last Bow* — a finale, cancellation, or alternate Beat depending on who and what remains.

These are **dramatic scenes** and might change after playtesting.

**Venue (world) hypothesis:** a small **Level** in the Old Opera House with:
- **Ballroom Stage Room:** performance, stage Set, dancer, chandelier and visible audience-facing consequences.
- **Backstage Wing Room:** practical controls, inspection and alternate routes to fix Cues.
- **Fly Loft Room:** high-risk rigging, vantage point and possible approach to the ghost's anchor.

Optional **Dressing Room** is explicitly deferred unless NPC interaction proves it necessary.

**Shots (camera views) to prototype:** Stage-wide dramatic composition; backstage diagonal with visible mechanism states; fly-loft narrow/high-angle. A Room may have more than one Shot. A **Shot** is not a **Play Scene**, and the show does not change scenes merely because the camera cuts.

The Stage's **Set** can change within a Scene through Cues and physical sabotage. This must not require new world rules.

## Visual Profile and Art Pack modularity

Proposed independent content ownership:

- **Visual Profile:** art rules—base pixel density, palette, lighting contrast, sprite scale, animation conventions, Shot framing, readable warning treatment, accessibility variants.
- **Art Pack:** actual assets keyed to semantic entities/roles/props, with explicit compatible profile and asset/version references.
- **Venue/Room/Shot:** navigational geometry, camera anchor, foreground occlusion, interaction locations, stage lights and required visual affordances.
- **Production:** which Play is mounted to which Venue/Set/Cast and which Art Pack represents them.

Different Adventures may select different Profiles/Packs (a gloomy pixel Victorian house, paper-theater cutouts, ink-wash ghosts) while sharing the same simulation and Play rules. Room/Shot-specific overrides may be investigated later, but baseline selection should be **per Adventure**, with defined precedence. Artwork cannot secretly alter ghost sensing, collider geometry or cue outcomes.

## Legibility and art gates

- Player, Actor, hazardous prop and interactable must be distinguishable at typical viewing sizes.
- Stage actions and ordinary rehearsed special effects must have different *learnable* contextual evidence from dangerous anomalies; identical visuals are possible only when other fair clues exist.
- Character intent and fear have readable silhouettes/poses; dialog subtitles are not required to infer all hazards.
- Occluders enhance tension but cannot make an avoidable lethal event untelegraphed.
- Controls and hotspots remain findable by keyboard/controller/touch where supported.
- A low-motion or simplified-effect mode must not remove essential cues.
- The scene composes in PixiJS but game-world events remain authoritative elsewhere.

## Stage 1 deliverables, once explicitly authorized

1. Reference sheet for A and B with pixel scale, palette, sprite proportions, camera angle, lighting and sample UI readability.
2. Same representative Stage Shot rendered in both styles, including normal and haunted states.
3. One backstage/rigging Shot proving navigation, occlusion and interaction landmarks.
4. A short asset naming/Art Pack contract proposal and proof that style can change independently of world data.
5. Decision record: selected direction, alternatives, assumptions, observed test results and what remains provisional.

Stage 1 does **not** require full animation sets, a complete theater, a content editor or the release art. Revisit the decision when gameplay evidence changes the camera or player loop.

## SF-0004 refinement — evidence before style lock-in

Use the [Stage 2 judgment fixture](STAGE2_JUDGMENT_EXPERIMENT.md) to identify which mechanism states, cue/revision evidence and interventions must be legible. Compare A and B using the same Room/Shot, geometry, evidence timing and affordances at actual play size, including supported sensory/input alternatives. Early static or timed studies can assess recognition and atmosphere; they cannot prove embodied hazard response or fun.

Keep two gates independent: fixed-command simulation parity, and human perceptual usability. Different artwork may change human decisions; equal traces do not certify usable clues. Measure authoring/revision effort as well as recognition and atmosphere. Reopen the visual choice if both candidates fail; preserve a provisional direction through Stage 2 instead of producing a full pipeline first. Required semantic warnings cannot disappear behind an Art Pack, occluder or reduced-motion setting. No style selection or art production is authorized by this documentation update.
