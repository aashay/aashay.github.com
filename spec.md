# SITE_SPEC.md — aashay.com rebuild

Hand this file to Claude Code as the complete build instruction. It is self-contained.

## 0. Objective

Rebuild aashay.com as a single-page personal site. One-shot build to a working localhost preview, for owner review before any deployment. Astro, static, targeting the existing GitHub Pages repository on the custom domain aashay.com.

The site is a brand presence: who Aashay is and what he is about. It must read as a senior, creative, technical operator, Director of Product or VP material. It must not read as a junior portfolio.

## 1. Operating constraints (read first)

- This runs inside the existing aashay.com GitHub Pages repository. Inspect the repo before changing anything.
- Do NOT modify, move, or delete the existing `/resume` route or any file it depends on. If migrating the repo to Astro would break that route, preserve its current output as a static file under `public/resume/` so the URL keeps resolving unchanged. The owner will retire `/resume` himself later, as a separate task.
- Preserve the custom domain. If a `CNAME` file exists in the repo, copy it to `public/CNAME` (contents: `aashay.com`) so it survives every build. Losing this file breaks the domain.
- Mobile-first. Most visitors are on phones. Design and verify at 390px width first, then scale up to desktop.
- Use the copy in section 5 verbatim. Do not paraphrase, expand, soften, or add copy. No sentence fragments. No em dashes anywhere. Where copy is marked TODO, leave a clearly visible placeholder; do not invent content.
- Do not add sections, pages, navigation, analytics, cookie banners, or third-party scripts beyond what this spec defines.
- DO NOT DEPLOY. Build the site and run it on localhost only. Stop there and hand off the local preview. Deployment to GitHub Pages happens later, in a separate pass, and only after the owner reviews the local site and explicitly approves. Set everything up so deploy is a one-command step when approved, but do not run it.

## 2. Stack

- Astro, latest stable. Static output. No UI framework (no React, no Vue).
- Interactivity (email assembly, scroll reveals, Konami easter egg) is a small amount of vanilla JS, loaded as Astro client scripts. Goal: near-zero JS, fast on mobile.
- Fonts self-hosted via `@fontsource`. No external font CDN calls at runtime.
- Node 20+. Package manager: npm.

## 3. Design system

Concept: one art-directed editorial document. Severe, monochrome, confident. Restraint is the aesthetic. There is no decoration.

Rules:
- No rounded corners anywhere (`border-radius: 0`). No drop shadows. No cards. No gradients. No chrome.
- Hairline borders only: 1px, gray.
- Generous negative space. Wide margins on desktop, comfortable gutters on mobile.
- Left-aligned, single column, always.
- One oversized typographic moment: the hero statement line.
- Motif: thin corner crop marks at the page corners, persistent and low-contrast. A small monospace index label on each section after the hero.
- Imagery: the site will carry two to three editorial photos, roughly one per section, delivered later. Build them in now as placeholders, see section 4.1. Do not leave them out, and do not fake final art.

Typography:
- Display (hero, section headings, work block titles): Space Grotesk, via `@fontsource/space-grotesk`. Weight 700 for the hero statement, 500 to 600 elsewhere.
- Body (paragraphs): Geist Sans, via `@fontsource/geist-sans`. Free and open source. This is the body font, no substitution needed.
- Mono (section index labels, crop-mark captions, dates, the contact links line): Geist Mono, via `@fontsource/geist-mono`. Small sizes only, never body text.

Design tokens. Implement exactly, as a global CSS `:root` block:

```css
:root {
  /* color */
  --ink:         #0B0C0C;  /* page background, near-black, slightly cool */
  --paper:       #EDEAE3;  /* primary text, bone off-white */
  --gray-900:    #16191A;  /* raised surface */
  --gray-700:    #2A2E2F;  /* hairline borders, crop marks */
  --gray-500:    #5C6364;  /* muted text */
  --gray-300:    #8E9495;  /* secondary text */
  --accent:      #1FA98F;  /* jade, primary accent, ~5% of any screen */
  --accent-link: #2DBFA3;  /* lifted jade for small text and links on ink, AA legible */

  /* type */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Geist Sans', sans-serif;
  --font-mono:    'Geist Mono', monospace;

  /* type scale, mobile-first */
  --t-hero:   clamp(2.6rem, 11vw, 5.5rem);
  --t-h2:     clamp(1.6rem, 6vw, 2.4rem);
  --t-h3:     1.15rem;
  --t-body:   1.0625rem;   /* 17px */
  --t-small:  0.9375rem;
  --t-mono:   0.8125rem;

  /* spacing */
  --space-section: clamp(4.5rem, 14vw, 9rem);  /* vertical rhythm between sections */
  --space-block:   1.5rem;
  --measure:       66ch;   /* max line length for body text */
}
```

Color discipline: the page is monochrome. The jade accent covers roughly 5 percent of any screen. It appears only on links, the hover and active state, section index numbers, and the easter egg. It is never a background fill and never a section theme.

Motion:
- Restrained. On scroll, sections and work blocks fade in and translate up a few pixels. Short durations (about 400ms), ease-out. Use Intersection Observer, no library.
- The whisper glow: interactive elements (links, the contact email, the CTA) get a faint jade glow on hover, focus, and active, a few pixels of soft `text-shadow` or `box-shadow` in `--accent`. Subtle. Never ambient, never on non-interactive elements.
- Respect `prefers-reduced-motion: reduce`: disable all scroll motion and glow transitions, render everything in final state.

Accessibility:
- Semantic HTML5 landmarks, logical heading order.
- Every interactive element is keyboard reachable with a visible focus state. The glow may accompany focus, but a clear outline must also exist.
- Body text and links meet WCAG AA contrast on `--ink`.
- Tap targets at least 44 by 44 px on mobile.

## 4. Structure

Single page, long scroll. Sections, top to bottom:

1. Hero
2. Thesis
3. Selected work (five blocks)
4. Contact

Reserved, NOT built in v1: a Writing section that will later embed Substack. Leave a clean seam for it between Selected work and Contact, but render nothing there now.

No site navigation bar. The hero CTA is the only nav affordance and it anchors to the Contact section.

Each section after the hero carries a small monospace index label (`01`, `02`, `03`).

Work block header treatment: the product or role name on its own line in the display face, and below it a mono meta line, for example `Meta · 2024 to now`. Use a middot separator and the word "to" for ranges. No dashes.

## 4.1 Photo placeholders (FPO)

The site will carry two to three editorial photos, professionally shot, roughly one per major section (Hero, Thesis or Selected work, Contact). The owner does not have the final images yet. Build the photo system now, with FPO ("for placement only") placeholders, so adding the real shots later is a clean drop-in and not a layout change.

Requirements:
- Define one image slot per major section. Each slot has an explicit, fixed aspect ratio and defined placement, so the layout does not shift when a real photo replaces a placeholder.
- The placeholders must carry the real final dimensions. The point is to see, in v1, exactly how much space each photo occupies and how type sits around it. Do not use vague or arbitrary box sizes.
- Suggested slot ratios, adjust only if layout demands it: Hero photo 3:2 landscape, Thesis or Selected work photo 4:5 portrait, Contact photo 3:2 landscape. Each slot is full-bleed to the section gutter on mobile and given generous, intentional space on desktop.
- Render each placeholder as a flat `--gray-900` block with a 1px `--gray-700` hairline border and a small centered mono caption that states the slot and its intended size, for example `FPO · photo 01 · 3:2`. No stock images, no AI images, no fake portraits.
- Each slot is a real `<img>` element set to the intended dimensions, with lazy loading, an empty but present `alt` to be filled later, and a comment marking it: `<!-- FPO PLACEHOLDER: replace with editorial photo 01 -->`.
- Default the photos to full color. The crop marks may frame an image as they frame the page.
- The photos are a primary visual layer, not decoration. Give them real space. Typography shares the stage with them rather than competing.
- Adding a real image later must be a single edit per slot: swap the `src`, write the `alt`, remove the FPO comment. Nothing else moves.

## 4.2 Head and metadata
- Title: `Aashay Desai`.
- Meta description: `Aashay Desai builds the platforms developers build on. Close to two decades in engineering, partnerships, and product, today as a product manager at Meta.`
- Open Graph: title, description, `type=website`, `url=https://aashay.com`. OG image can be added later with the real photos.
- Favicon: a minimal monogram mark, an `A` in `--paper` or `--accent` on `--ink`. No external favicon service.
- No tracking, no analytics.

## 5. Copy (verbatim)

### Hero
- Greeting line: `Hey, I'm Aashay.`
- Statement, the oversized moment: `I build the platforms developers build on.`
- Supporting line: `I have spent close to two decades in engineering, partnerships, and product, and I do it today as a product manager at Meta.`
- CTA, anchors to Contact: `Let's talk`

### Thesis
One paragraph:

> I started as an engineer in 2007, writing code and running infrastructure. From there I moved to the seam where a technical product meets the people who depend on it: developer relations, then partner engineering (the work the industry now calls Forward Deployed Engineering), years before it had a name. Eventually I started building the platforms myself. Across close to two decades I have worked on developer platforms as an engineer, as a partner to the companies betting on them, and now as the product manager who owns where they go next.

### Selected work
Section title: `Selected work`

Five blocks, in this order.

**Block 1**
Header: `Developer Support Platform` / mono meta line `Meta · 2024 to now`
Body:

> I pitched a better way for developers across Meta's platforms to report problems and shape what gets fixed. That better way is Feedback Center: the public board where developers vote on the issues that matter. Behind it, an agentic AI layer triages incoming reports, cutting first response from hours to minutes. I secured the funding and grew it from a side project into a staffed, multi-product platform.

Link: the words `Feedback Center` in the body link to `https://developers.meta.com/horizon/feedback`, opening in a new tab. TAKEDOWN NOTE: implement this link as a single, clearly commented line so it can be removed in one edit later. Comment it `<!-- Feedback Center live link: may need removal if access changes -->`.

**Block 2**
Header: `Presence Platform` / mono meta line `Meta · 2021 to 2024`
Body:

> I led third-party engagement for Meta's machine perception and AI platform for AR, VR, and MR developers. I onboarded the first wave of studios and built the developer feedback infrastructure that became the foundation for the support platform above.

**Block 3**
Header: `Commerce Platform` / mono meta line `Meta · 2020 to 2021`
Body:

> I owned the roadmap for Meta's commerce APIs and developer tooling, the surfaces Shopify, BigCommerce, and WooCommerce build against. I led a cross-functional team of engineers, designers, and marketers, and I had spent the prior four years integrating these same APIs as a partner engineer before I owned them.

**Block 4**
Header: `Partner Engineering` / mono meta line `Meta Commerce · 2016 to 2020`
Body:

> I was Meta's first partner engineer on commerce, embedded with the largest commerce companies in the world to ship integrations alongside their own teams. I was on the launch team for Instagram Shopping checkout, working directly with brands like Nike, Adidas, and KKW. I built Meta's automotive integrations for Marketplace, including the Kelley Blue Book, Cars.com, and Edmunds partnerships. I also built the Facebook for WooCommerce plugin, which connected millions of merchants to Facebook.

**Block 5**
Header: `Foundations` / mono meta line `2007 to 2016`
Body:

> Before Meta, I did developer relations and partner engineering at Clever, the platform connecting K-12 schools to software, where I worked with Scholastic, Instructure, and Amazon. Earlier still, I ran web infrastructure at Inkling and wrote code at Salesforce, where I helped build its first REST API.

### Contact
Heading: `Let's talk.`
Body:

> I am always up for a good conversation about product strategy, AI-native development, or developer platforms. I am especially interested in the zero-to-one problem of standing one up from scratch.

Links line, in mono: email, LinkedIn, GitHub.
- Email: assembled at runtime, see section 6. Address is `aashayd@gmail.com`.
- LinkedIn: `https://www.linkedin.com/in/aashaydesai/`
- GitHub: `https://github.com/aashay`

## 6. Email obfuscation (implement carefully)

Requirement: the email address must not appear in the served HTML as plain text or as a `mailto:` link. A scraper reading the static HTML must find nothing usable.

Method:
- Store the address split into parts, base64-encoded, in a small client script. Do not put the assembled string or a `mailto:` anywhere in the static markup.
- On `DOMContentLoaded`, decode and assemble the address, set it as the visible text of the contact email element, and attach the `mailto:` href at that point.
- The static HTML for that element contains a neutral placeholder, the word `Email`, and no address.
- Illustrative shape, implement cleanly:

```js
const u = atob('YWFzaGF5ZA==');   // local part
const d = atob('Z21haWwuY29t');   // domain
const el = document.getElementById('contact-email');
el.textContent = u + '@' + d;
el.setAttribute('href', 'mailto:' + u + '@' + d);
```

## 7. Konami code easter egg

- Listen for the Konami sequence (up, up, down, down, left, right, left, right, B, A) on keydown.
- On trigger: a tasteful, deniable moment. Reveal a single hidden line set in mono, near the footer, in `--accent-link`. Optionally let the whisper glow bloom once across the page and settle.
- Keep it modest. No sound, no animation spectacle, no game references in any visible text.
- Payoff copy: `[TODO: Aashay's easter egg line, one line, mono]`. Leave this as a visible placeholder until the owner provides it.

## 8. Repo, build, local preview, deploy

This build stops at a working localhost preview. Deployment is a separate, owner-approved step.

- Inspect the existing repository first. Report what currently builds the site (likely Jekyll), the location of the `/resume` route, and the location of any `CNAME` file.
- Preserve `/resume` and `CNAME` exactly as described in section 1.
- Configure Astro: `site: 'https://aashay.com'`, `base: '/'`. Static output.
- Run the site locally with the Astro dev server and confirm it serves cleanly. This local preview is the deliverable of this pass. Report the local URL and stop.
- Prepare deployment but DO NOT run it: add the GitHub Actions workflow at `.github/workflows/deploy.yml` using Astro's official GitHub Pages workflow (`withastro/action`), and note in the final report the one step needed to go live (push to the deploy branch, or set the Pages source to "GitHub Actions"). Leave that final action for the owner.
- Keep existing Jekyll source files only if `/resume` depends on them. Migration is otherwise fine, but never at the cost of `/resume` or `CNAME`.
- Do not deploy, do not push to a Pages branch, and do not change repository Pages settings until the owner reviews the local preview and explicitly approves.

## 9. Build order

1. Inspect the repo. Note `/resume`, `CNAME`, and the current deploy method.
2. Scaffold Astro, install the three `@fontsource` packages.
3. Implement the global stylesheet with the section 3 tokens.
4. Build the four sections with the verbatim section 5 copy, including the per-section FPO photo placeholder slots from section 4.1.
5. Add the vanilla JS: scroll reveals, whisper glow, email assembly, Konami easter egg.
6. Preserve `/resume` and `CNAME` into `public/`.
7. Add the Actions deploy workflow, configured but not triggered.
8. Build, run locally, verify against section 10. Hand off the localhost preview and stop. Do not deploy.

## 10. Acceptance checklist

- [ ] Renders correctly at 390px first, scales cleanly to desktop.
- [ ] All copy matches section 5 verbatim. No fragments, no em dashes, no invented copy.
- [ ] Monochrome holds. Jade accent is roughly 5 percent coverage, on links, hover and active, index labels, and the easter egg only.
- [ ] No rounded corners, no shadows except the whisper glow, no cards.
- [ ] `Feedback Center` links live and sits on its own commented line.
- [ ] The email never appears as plain text or `mailto:` in the served HTML.
- [ ] The Konami easter egg fires. Its payoff is a visible TODO placeholder.
- [ ] Each major section has a photo slot at its intended final aspect ratio, rendered as a labeled FPO placeholder, ready for a single-edit swap.
- [ ] `prefers-reduced-motion` disables motion and glow transitions.
- [ ] `/resume` still resolves. `CNAME` is present in the build output. The custom domain is intact.
- [ ] Lighthouse performance and accessibility are strong on mobile. JS payload is near zero.
- [ ] No third-party scripts, analytics, or tracking were added.
- [ ] The site runs on localhost and the local URL is reported. Nothing was deployed. The Pages workflow is in place but untriggered.

## 11. Out of scope

- The Writing or Substack section. Reserved seam only, render nothing.
- Final photography. Slots are built as placeholders per section 4.1; the real images are swapped in later.
- Retiring the `/resume` page. The owner does this later.
- Any content, section, or integration not named in this spec.
