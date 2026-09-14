# Local upgrade and deployment handover

Updated 14 September 2026. All three existing projects now use React and React DOM 19.3.0. Calyco and Gigacore use Next.js 16.3.5. BENE retains its Vite/Vinext architecture (Vinext 1.0.0-beta.9) and produces a Node server with Nitro.

## Active projects

| Site | Project directory | Build | Production start |
| --- | --- | --- | --- |
| BENE | bene-llc-new-main/bene-llc-new-main | npm run build | npm start |
| Calyco | Calycointeriors-main/Calycointeriors-main | npm run build | npm start |
| Gigacore | Gigacore-main/Gigacore-main | npm run build | npm start |

Use Node 22.13 or newer and npm ci inside each project. Keep each package-lock.json. Local previews use ports 3100, 3101, and 3102. Set PORT for BENE; use npm start -- --port 3101 (or 3102) for Next.js.

These remain three applications. The division switcher connects the local ports during preview and the existing public domains outside localhost. This work does not merge deployments into one domain, configure DNS, or publish anything. The public destination mapping must be reviewed when staging or domain consolidation is requested.

## Changes

- Static, optimized WebP commodity imagery replaces BENE's Three.js renderer; metals has a dedicated fifth tab. Hero artwork remains the supplied sulphur specimen, with feathered edges.
- All three sites retain their content and share the division switcher. Its mobile control is more compact.
- React 19-compatible model-viewer JSX types and animation easing types; compatible icon and lint tooling; lockfiles updated.
- Calyco's 24 MB sofa model is no longer prefetched on every page. The viewer script is loaded only on /design.
- Corrected encoded-comma image URLs and added the missing Gigacore grid asset.

## Cleanup and recovery

The original three ZIP files were checked against extracted contents: 82 BENE files, 214 Calyco files and 174 Gigacore files, with none missing. The ZIPs and 40 unused media files (about 129 MB) were sent to the Windows Recycle Bin.

Unused components/hooks were removed following import traversal and explicit reference checks: 57 from BENE, three unused Gigacore home sections, plus BENE's obsolete material-scene.tsx and superseded Calyco ESLint configuration. The recycled ZIPs can recover the original source. Removed libraries were used only by removed components.

Calyco's estimator source/data and dynamically selected visualizer assets are retained, along with model-editing source files and supplied business documents. The development overlay API is blocked in production. These are not safe to classify as disposable using import references alone.

## Verification

All three production builds and TypeScript checks pass. Browser results and screenshots are in qa/. Tests cover desktop/mobile homepages, commodity tabs and details, division navigation including a round trip, interior routes, JavaScript errors and local failed asset requests.

Contact delivery was not submitted to external services. BENE and Gigacore retain their email-client enquiry flows; Calyco retains its existing Web3Forms integration. Production recipient/account verification remains an owner task before launch.

## Commodity image provenance

Built-in image generation was used, not an API-key CLI. Final assets are in bene-llc-new-main/bene-llc-new-main/public/commodities/: sulphur.webp, urea.webp, crude-oil.webp, lng.webp, metals.webp. Each is 1536 × 1024; the set is about 670 KB.

Creative brief for urea, crude oil and LNG: realistic studio material photography; a white urea-prill mound, glossy crude oil pouring into a small pool, and a stainless cryogenic tank with subtle vapor respectively; centered landscape composition with dark charcoal #151816 seamless background, soft grounded shadows, no labels/frames/grids/logos.

Metals prompt: high-resolution landscape photoreal studio product photograph of copper ingots and brushed steel billets, realistic imperfections and metallic texture, three-quarter view, centered with generous margins, seamless #151816 background, grounded shadow and controlled reflections; no words/logos/frames/grids or low-poly styling.

Sulphur edit prompt: preserve the supplied golden crystal's shape and faceted texture, change the cream background to seamless #151816, soft dark contact shadow, whole specimen intact with generous margins, no frame/text/grid. The original light-background hero file is preserved.
