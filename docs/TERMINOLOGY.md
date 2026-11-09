# Stage Fright — Vocabulary and Naming Boundaries

**Status:** working terminology proposal, Stage 0 / Version 0. Names are for reducing ambiguity and can be amended before implementation.

The word *stage* is doing too much work. This project uses **Development Stage** only for roadmap checkpoints, and **Stage** only for the physical acting area in the game. The official game title is unaffected.

## Three kinds of structure

| Domain | Term | Exact meaning |
| --- | --- | --- |
| Player selection | **Adventure** | A validated, selectable composition of a Play, Venue, Cast, Haunting, dialogue, rules, assets and setup. |
| Player selection | **Episode** | Optional title/catalog label for an Adventure, not an extra simulation type. |
| World | **Venue** | A theater or other physical performance location and its navigable topology. |
| World | **Level** | An optional navigable region of a Venue containing connected Rooms. Not a Play and not a difficulty tier. |
| World | **Room** | A navigable spatial unit. A Room can contain backstage areas, corridors, dressing rooms, or a Stage. |
| World | **Stage** | The physical performance area. It may be part of a Room, and is not the theatrical script. |
| World | **Set** | Props and scenery arranged on a Stage for a production/Scene; changes during a show are possible. |
| Camera | **Shot** | One authored fixed-camera composition/view of a Room, with its layers, masks and sightlines. A Room may have several Shots. |
| Dramatic work | **Play** | An authored script and dramatic state graph: roles, Acts, Scenes, Beats, Cues, rehearsed dialogue and contingencies. It is *not* the physical Stage. |
| Dramatic work | **Act** | A dramatic grouping within a Play, optional for short works. |
| Dramatic work | **Scene** | A portion of the **Play**, not a PixiJS scene graph and not a Room. |
| Dramatic work | **Beat** | A dramatic obligation, outcome or contingency within a Scene. |
| Dramatic work | **Cue** | A requested action or signal tied to the show: light, sound, scenery, entrance or line. A Cue may fail, be late or be intentionally changed. |
| Assembly | **Production** | The particular staging of a Play: role assignments, Venue/Stage/Set mapping and technical choices. |
| Runtime | **Performance** | The live enactment of a Production, including deviations from rehearsal. |
| Runtime | **Run** | One game attempt, including exploration, player/ghost actions, the Performance and resulting world state. |
| People | **Actor** | A performing NPC with Health, Fear, Trust, experience and incomplete knowledge. |
| People | **Role** | A fictional character and its dramatic obligations defined by the Play. The same Actor may play different Roles. |
| Opposition | **Ghost** | An in-world antagonist with observed knowledge, powers, Power and Rage. |
| Opposition | **Director** | A bounded pacing policy governing when eligible Ghost pressure may be scheduled; not the ghost's omniscient controller or the theater director NPC. |
| Visuals | **Visual Profile** | Data defining a visual language (pixel density, composition, lighting treatment, UI readability rules). |
| Visuals | **Art Pack** | Versioned graphical/audio assets with explicit mappings to visual/role/prop capabilities; never an authority over gameplay. |

## Worked example

A player selects the Adventure **The Last Waltz**.

- **Venue:** The Old Opera House.
- **Level:** The main performance wing.
- **Rooms:** Ballroom stage, backstage wing and fly loft.
- **Stage:** The ballroom's raised performance platform.
- **Set:** Chandelier, curtains and ballroom flats arranged for this Production.
- **Shots:** Fixed ballroom-wide view, wing view and high fly-loft view.
- **Play:** The Last Waltz, perhaps one Act with three authored **Scenes**.
- **Scene 2:** The waltz; a dramatic **Beat** requires the dancer's entrance.
- **Cue:** The chandelier begins its safe rehearsed sway; its restraint is supposed to remain engaged until the correct time.
- **Actor:** Mara; **Role:** the dancer.
- **Performance:** The actual show that unfolds, including the ghost's sabotage and Mara's contingency line.
- **Run:** All of the above plus the player's investigations, injuries, time, binding decisions, and final outcome.

A single dramatic **Scene** may span multiple **Rooms** and **Shots**. A single **Room** may host many Scenes over time. Moving between Shots does not advance the script by itself.

## Engineering naming discipline

Prefer code identifiers like `RoomDefinition`, `CameraShotDefinition`, `StageArea`, `SetConfiguration`, `PlayDefinition`, `PlaySceneDefinition`, `ProductionConfiguration`, `PerformanceState`, `AdventureManifest` and `RunRecord` **only as candidate vocabulary**. Do not create runtime interfaces in Stage 0.

PixiJS has its own *scene graph* vocabulary; distinguish `PixiDisplayTree` (presentation implementation) from `PlayScene` (dramatic content). Do not call a visible room shot a `Scene`.

The physical **Stage** does not have the same lifecycle as the roadmap's **Stage 0/1/2**. Documentation should use **Milestone** or **Development Stage** whenever ambiguity arises.
