# Label the Cell

An interactive labeling quiz for three cell diagrams: animal, plant, and prokaryotic.
Type each structure's name into its box. A correct answer turns the box green and shows its definition.

## How to use
Open `index.html` in any modern browser. No build step or server is needed.
(An internet connection is only used to load the Google Fonts; the page falls back to system fonts offline.)

## Folder layout
- `index.html` - page structure
- `css/style.css` - styles (light and dark mode)
- `js/app.js` - quiz data (names, accepted answers, definitions, box positions) and logic
- `images/` - diagrams with the printed labels removed
- `images/originals/` - the original, fully labeled diagrams

## Editing
In `js/app.js`, each cell has a list `T` of structures:
`{n: name, a: [accepted answers], x, y: box center in image pixels, w: box width, d: definition}`.
`W` and `H` for each cell are the image's pixel size. Progress is saved in the browser's localStorage.
