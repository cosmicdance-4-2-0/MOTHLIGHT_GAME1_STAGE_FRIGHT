# Stage Fright — Versioning and Change Records

**Working policy, Version 0.** Development-state labels are **not release dates or shipping promises**.

## Canonical display

`Major.Minor.Revision.Build/ChangeID` — for example, **`0.0.0.1/SF-0001`**.

| Field | Meaning | Increment |
| --- | --- | --- |
| Major | Breaking compatibility epoch: schema, saves, replay, or core contracts | Explicit owner acceptance; reset Minor and Revision |
| Minor | Newly accepted capability family or development era | Explicit integration decision; reset Revision |
| Revision | Accepted meaningful correction/extension to a current design or behavior contract | At a reviewed integration; not every edit |
| Build | Monotonic project-wide accepted integration serial | Every accepted recorded integration; **never reset** |
| ChangeID | Immutable human lookup for the integration record | Unique `SF-NNNN` identifier, never reused |

**Build is not a Git commit, CI run, release number, or Stage number.** Many draft commits can become one accepted integration. No Build is allocated to rejected work or unmerged proposals. Stage 0 denotes a research/design work phase, not `Minor=0` by automatic mapping.

## Sources of truth

- `version.json`: current integrated game development version (four integer fields and unique `changeId`).
- `CHANGELOG.md`: human-facing summary and affected paths.
- `docs/changes/SF-NNNN.md`: what, why, where, source commits, actual tests, compatibility, origin and dissent.
- `npm run version:check`: validates the required links.

**Do not put four-part game versions in `package.json`**: npm packages require SemVer. Keep existing package versions independently and treat `version.json` as the game authority. Tags, releases and public deployment schedules remain explicitly deferred.

## Recording an accepted change

Each accepted integration requires a unique ChangeID and a record with: summary/motivation; source revision(s) and PR; scope and **affected paths**; added/changed/fixed/deferred details; compatibility and migration/replay risk; tests actually run and their links; failed or unrun tests; rollback; unresolved issues; owner decision; and authorial perspective.

The shared `cosmicdance-4-2-0` GitHub identity is a **credential**, not proof of the creative author or agent runtime. Attribute contributions from their recorded task/PR and actual evidence. Recommend commit trailers:

```text
Agent-Author: Mothlight — The Invisible Stagehand
Change-ID: SF-0001
```

Agent attribution is **not cryptographic attestation**. Never impersonate a colleague's work, erase peer dissent, edit another agent's memory, or claim an unrun check succeeded.

## Example current state

`0.0.0.1/SF-0001`: proposal for the initial development environment baseline; becomes accepted at successful review/merge. It is not a software release.

Future ChangeIDs and versions are determined by accepted changes, **not a release plan**. Any revision of these rules requires its own reviewed rationale and compatibility note.
