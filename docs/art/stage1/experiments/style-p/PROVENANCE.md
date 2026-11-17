# S1-02P-FULL-PIXEL — Provenance and production record

**Author:** Codex, independent Style P experiment. **Date:** 2026-11-16 (America/Los_Angeles). Attribution identifies the task author, not cryptographic identity or Mothlight's individual agent identity.

## Sources and authority

- Stage Fright accepted source: `4cae5cee3f80c94ac5817965983195ec186428b5` / `0.0.2.9/SF-0009`; required reading and precedence resolutions are listed in [VIS_REPORT.md](VIS_REPORT.md).
- S1-01 design: `7cf05069be2f2eaab202ef793e8202121d823a63`, [pinned document](https://github.com/cosmicdance-4-2-0/MOTHLIGHT_GAME1_STAGE_FRIGHT/blob/7cf05069be2f2eaab202ef793e8202121d823a63/docs/art/stage1/S1-01_FIXED_SHOT_AND_STAGEHAND.md). PR #26 was open/unmerged at intake.
- [Unmodified fallback SVG](source/s1-01-silhouette-reference.svg): Mothlight's source-controlled silhouette probe from that same head. It was read as SVG and rasterized with sharp for visual inspection and input to image generation. It is not a color concept or animation sheet.
- **User-asserted approval:** the owner and partner approved a separate Stagehand concept's appearance. That image was not attached/available in this task and was not inspected. This experiment does not claim reproduction of it. Brown gathered hair, cream rolled sleeves, dark fitted vest, pouch, trousers, boots and restrained brass were reconstructed from the owner's written description and SVG.
- Harrowglass Opera House, its material vocabulary and the fixed anchor stencil came from the current owner assignment. No external theater photographs, commercial game sprites, artist-style references or stock imagery were used. No Style M draft was read.

## Tools and original inputs

| Tool / input | Actual use |
| --- | --- |
| Built-in `image_gen.imagegen` | Two generation calls: environment plate and transparent character/prop atlas. The exact backend image-model identifier, seed and sampling settings were not exposed; none is invented. |
| [Generation prompts](source/generation-prompts.json) | Exact submitted prompts, including target composition, constraints, requested dimensions and character-reference role. The atlas call used the inspected SVG raster as its reference; the environment call used no image reference. |
| [Raw environment](source/environment-generated.png) | Actual output **1672×941 RGB PNG**, despite requested 1280×720 / 320×180 appearance. Retained unchanged. |
| [Raw atlas](source/atlas-generated.png) | Actual output **1774×887 RGBA PNG**, despite requested 1536×768. Six separated assets, retained unchanged. Partial/irregular raw edge pixels are not treated as validated production sprites. |
| Node.js **v24.22.1**, sharp **0.35.5**, libvips **8.18.7** | Deterministic crop, nearest sampling, palette mapping, binary-alpha extraction, compositing, PNG export and inspection aids. Host tools only, no new repository dependency. |
| [Editable compositor](source/build-art.mjs) | Agent-authored disposable art source. Contains bitmap glyphs, exact labels/captions, physical-mark diagrams, trim states, layout and scene layer placement. This is not runtime gameplay code or an Art Pack interface. |
| [Artifact verifier](source/verify-art.mjs) | Pixel/file checks with [saved results and hashes](source/verification.json). No human trial or game test claims. |

## Transformations and retained editability

1. Read the accepted fixture and pinned S1-01 material; render and inspect the SVG fallback. Attempts to use CairoSVG/ImageMagick failed because those optional SVG renderers were missing. sharp successfully rendered the reference; no repository dependency was added.
2. Generate a pixel-art environment plate, explicitly not a filtered photo/painting, and a transparent atlas. These are model-generated visual starting points, not proof of a uniform pixel grid.
3. Sample the environment to **320×180** with nearest neighbor. Sample each tight alpha-bound atlas crop directly to its target logical dimensions; crop rectangles are recorded in [atlas-crops.json](source/atlas-crops.json). Map RGB to the deliberately selected [31-color palette](source/palette.json), without interpolation or dithering. Threshold source alpha at 128 into 0/255, an art-extraction setting, not a gameplay threshold.
4. Preserve separate PNG layers: backdrop, three-quarter/profile/rear/braced Stagehand, performer, chandelier, normal/common chandelier placements, intact/disturbed scenic trim and station labels. The backdrop itself is flattened; there are no original generator layers, vector paths, PSDs, Aseprite documents, skeletal rigs or animated cycles to recover.
5. Use agent-authored pixel overlays for suspension, contour, sway ticks, physical latch contact and a separate scenic trim strip. Draw Cue text, witness brackets/slider and captions with editable bitmap glyph definitions. This prevents generator spelling variations or unintended verdicts. The arbitrary signature `E. Vale`, revision identities and symbolic window names are illustrative Production text, not adopted characters or numeric timing rules.
6. Produce one common initial file and caption referenced by both cases. Reuse the same plate and shared layers for all outcomes. Only localized physical state/character pose changes; no independently generated case camera.
7. Export main shots at exact **4× nearest neighbor** to 1280×720. Contact sheets use 2× nearest neighbor from larger logical review canvases. The SVG guide is an editable diagram, not pixel-art gameplay output. All four Stagehand poses also appear at native 32/40/48 heights and at 4× display size.
8. Inspect native/display versions and grayscale aids. Grayscale aids are tests of non-color-only representation, not color-vision simulation or accessibility certification.

The 31-color normalization and binary alpha enforce a uniform grid; they do **not** turn every generated detail into a deliberate artist-designed cluster. Raw dense texture causes surviving isolated pixels and weak shape separation. The final art is best described as **generated pixel-art sources reconstructed and corrected on a logical grid**, not entirely hand-drawn 16-bit sprites or hardware-compliant console art.

## Revision and effort log

| Pass | Actual work / finding |
| --- | --- |
| Source intake | Verified main and PR #26, read authority/fixture, inspected fallback. Missing approved raster reference explicitly recorded. |
| Generation | **2 calls**, no image-generation retries. Tool-reported wall duration: environment **43.5s**, atlas **28.7s**. These are observed call durations, not billable compute or cost. |
| Reconstruction R1 | Built fixed palette/grid compositor and exact overlays. Two early render attempts stopped on missing `_` and `;` bitmap glyphs; added those glyphs and reran. No incomplete render is presented as final. |
| R2 | Inspected main view; added one-logical-pixel dark chandelier contour because brass blended into plaster. Completed and inspected style/evidence/outcome/rig sheets. |
| R3 | Replaced an initially misplaced disturbance patch with a separate scenic strip adjoining the chandelier travel region. Background ornament remains decoration; no accepted fixture document changed. |
| R4 | Connected the braced hand to the physical latch; changed illustrative Cue windows to symbolic early/ordinary windows; added all four poses at all three direct-source-sampled scales. Rebuilt outputs and reran artifact verification. |
| Verification | 38 artifact assertions passed. Existing repository `npm run check` passed. Local browser smoke was blocked by a missing Chromium executable; the attempted browser installation failed with an empty/truncated ZIP, so no local browser pass is claimed. Remote CI is reported separately in the PR. Direct visual inspection and limitations are in VIS_REPORT. |

Recorded artwork-production timestamp: **2026-11-17T04:22:48Z** (2026-11-16 20:22:48 Pacific). At **04:33:56Z**, the recorded interval was **668 seconds**, covering prompts, generation, reconstruction, revisions, inspection and checks up to that checkpoint. Source intake preceded that timestamp; report writing and PR delivery followed it. This is a partial elapsed-session measurement, **not** a fabricated active-labor estimate. Exact total human minutes, model cost, token charges and future asset throughput were not measured. No human review time exists in this study.

## Rights and provenance limits

The repository's README says licensing/redistribution terms have not been selected. The user authorized this repository experiment, including generated artwork and an independent draft PR. That authority is not a new asset license or an assertion of exclusive copyright. The copied SVG remains attributed to Mothlight. Generated-output ownership, protectability and suitability for later distribution require the owner's eventual licensing decision; no commercial-clearance claim is made.

No third-party sprite/font/photograph was copied into the raster outputs. The simple bitmap glyph definitions were authored in the compositor. The SVG guide requests a generic system monospace font and embeds no font file. The missing approved concept may have its own source history; this task cannot establish that history or fidelity.

## Reproduce and inspect

From this experiment directory, using an installed compatible sharp (the session uses `CODEX_PRIMARY_RUNTIME_NODE_MODULES` to locate it):

```sh
node source/build-art.mjs
node source/verify-art.mjs
```

The source PNGs are retained so regeneration of the **derived assets** does not require another image-model call. The source model generation itself is not seed-reproducible from the exposed interface. Verification updates its timestamp; compare image hashes when checking art reproducibility. The files are disposable Stage 1 tooling and do not add a package, runtime schema or dependency to the game.

No automatic simulation writer, timed evidence gate, screen-reader adapter, keyboard focus system or actual reduced-motion setting is implemented. Those remain future work under separate authority. Review-only A/B and outcome labels must not be mistaken for player-visible initial information.
