# Changelog / Log of changes

Log of work done on the GFG Official Website project.

---

## 2025-02-22 — Center layout for all screen sizes

**Issue:** Divs/sections appeared left-aligned; content should be centered on the device screen.

### Changes made

- **Containers:** Added `mx-auto` and `w-full max-w-7xl` (or section-specific max-width) to every main content container so content is centered horizontally on all devices.
- **Files updated:**
  - `frontend/app/page.tsx` — kept `max-w-[100vw] overflow-x-hidden` on main wrapper to avoid horizontal scroll.
  - `frontend/components/layout/navigation.tsx` — footer: `container mx-auto ... max-w-7xl`.
  - `frontend/components/features/EvolutionTimeline.tsx` — timeline section container.
  - `frontend/components/features/misc-sections.tsx` — misc section container.
  - `frontend/components/features/TracksSection.tsx` — tracks section container.
  - `frontend/components/features/EventsSection.tsx` — events section container.
  - `frontend/components/features/HeroSection.tsx` — hero container.
  - `frontend/components/features/FAQSection.tsx` — FAQ container (kept `max-w-4xl` for readability).
- **Note:** Navbar already used `max-w-[1600px] mx-auto`. SectionShell and TeamSection already had `mx-auto`. AboutSection and FacultySponsorSection already used `max-w-6xl mx-auto`.

---

## 2025-02-22 — Timeline image optimization (Chai Links, Founders Unplugged, etc.)

**Issue:** When deploying the website, images in the public folder used in Chai Links, Founders Unplugged, and other timeline locations were not rendering on time or at all.

### Changes made

1. **Production asset URLs (basePath)**  
   - **Problem:** App is deployed at `/GFG_OFFICIAL-Website/` but image `src` values were `/timeline/...`, so requests went to the site root and could 404.  
   - **Fix:** Added `getPublicUrl(path)` in `frontend/lib/utils.ts` so paths are prefixed with `NEXT_PUBLIC_BASE_PATH` in production.  
   - **Files:** `frontend/lib/utils.ts` (new helper), `frontend/components/ui/media-components.tsx` (all image/thumbnail/lightbox URLs use `getPublicUrl()`).

2. **ImageWithLoader behavior**  
   - **Problem:** Loader only set the visible `<img>` `src` after a preload completed, which delayed first paint and could make images seem missing.  
   - **Fix:** The visible `<img>` now gets the final URL (via `getPublicUrl(src)`) from the first render; single request and paint as soon as the browser has data. Kept loading/error state for spinner and fallback.  
   - **Files:** `frontend/components/ui/media-components.tsx` (ImageWithLoader).

3. **Priority and loading hints**  
   - **Problem:** Important images were not prioritized, so they could load late.  
   - **Fix:**  
     - Added `priority` prop to ImageWithLoader: when true, uses `loading="eager"` and `fetchPriority="high"`.  
     - Masonry: first 6 items use `priority`.  
     - Carousel: main slide image uses `priority`.  
     - Lightbox: current image uses `priority`.  
     - Thumbnails: use `getPublicUrl()`, `loading="lazy"`, `decoding="async"`.  
   - **Files:** `frontend/components/ui/media-components.tsx`.

4. **When masonry images start loading**  
   - **Problem:** Images only loaded when within 50px of viewport, so they could appear late.  
   - **Fix:** First 6 masonry items render and load immediately (no IntersectionObserver). Remaining items use IntersectionObserver with `rootMargin: "200px"` so they start loading before they enter view.  
   - **Files:** `frontend/components/ui/media-components.tsx` (MasonryItem, constants `MASONRY_PRIORITY_COUNT`, `MASONRY_LAZY_ROOT_MARGIN`).

5. **Lightbox download/share URLs**  
   - Download and share now use `getPublicUrl(currentMedia.url)` so links work in production.  
   - **Files:** `frontend/components/ui/media-components.tsx` (AdvancedLightbox).

### Files modified

- `frontend/lib/utils.ts` — added `getPublicUrl(path)`.
- `frontend/components/ui/media-components.tsx` — basePath for all timeline image URLs, ImageWithLoader rewrite, priority/lazy/decoding, masonry visibility/priority, lightbox URLs.

### Notes for maintainers

- Ensure image files exist under `frontend/public/timeline/` as in `frontend/public/timeline/README.md` (e.g. `orientation/`, `chai/ch0/`, `chai/ch1/`, `founders/zahid/`). Paths in `frontend/data/timeline-content.ts` must match those files.
- Next.js config uses `output: 'export'` and `images: { unoptimized: true }`; image optimization is not used, so the above fixes focus on correct URLs and loading behavior.

---

*Add new entries above this line with date and short title.*
