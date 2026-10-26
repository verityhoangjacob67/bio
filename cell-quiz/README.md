# Label the Cell

An interactive labeling quiz for three cell diagrams: animal, plant, and prokaryotic.
Type each structure's name into its box. A correct answer turns the box green and shows its definition.

## How to use
Open `index.html` in any modern browser. No build step or server is needed.
(An internet connection is only used to load the Google Fonts and the favicon; the page falls back to system fonts offline.)

- Type an answer and it is checked as you go; a correct one turns green and focus jumps to the next empty box.
- **Show hints** reveals the first letter of each word as a placeholder.
- **Reveal answers** fills in what you have not found yet. Revealed boxes are amber and never count toward the score.
- **Reset diagram** clears the current diagram only.
- The theme button cycles Auto (follows the system) → Light → Dark.
- Your answers, the open diagram, hints and theme are saved in the browser's localStorage.

## Folder layout
- `index.html` - page structure and metadata
- `css/style.css` - styles (light and dark mode)
- `js/app.js` - quiz data (names, accepted answers, definitions, box positions) and logic
- `images/` - diagrams with the printed labels removed
- `images/originals/` - the original, fully labeled diagrams

## Editing
In `js/app.js`, each cell has a list `T` of structures:
`{n: name, aka: optional second name shown in brackets, a: [accepted answers], x, y: box center in image pixels, w: box width, d: definition}`.
`W` and `H` for each cell are the image's pixel size. Box positions are stored as percentages of the
image, so a diagram can be re-exported at another resolution without touching the coordinates.

Saved progress uses `1` for a structure the reader found and `2` for one that was revealed.
Bump `KEY` in `js/app.js` if the structure list changes enough that old progress would land on the wrong boxes.
