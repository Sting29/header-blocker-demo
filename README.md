# Header Blocker Demo

A sticky header that appears to change its background color while you scroll. Pure CSS, no scroll listeners.

Technique by Josh W. Comeau: https://www.joshwcomeau.com/css/header-blockers/

## How it works

- The header is `position: fixed` and always transparent.
- Each section starts with a blocker: an empty element with `position: sticky; top: 0`, as tall as the header and filled with that section's color.
- A sticky element stays inside its parent. When a section ends, its blocker scrolls away and the next section's blocker takes over.

```css
.site-header { position: fixed; inset: 0 0 auto 0; height: var(--header-h); z-index: 20; }
.cover       { position: sticky; top: 0; z-index: 1; height: var(--header-h); background: var(--cover-bg); }
.hero        { --cover-bg: #cfe0f6; }
.content     { --cover-bg: #fafbfd; }
```

## Trade-off

Each blocker needs an empty strip as tall as the header at the start of its section, so it has somewhere to sit when the page is at the top.

## Demo controls

`demo.js` only toggles classes for the bottom bar (No blockers / Blockers / X-ray / Hide), so you can record a before and after. It is not part of the technique.

## Run

Open `index.html` in a browser. No build step.
