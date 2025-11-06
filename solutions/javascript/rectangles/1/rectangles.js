//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(grid) {
  if (!grid.length) return 0;
  let rectangles = 0;
  const rows = grid.map(r => r.split(''));

  // Find possible pairs of '+'
  for (let r1 = 0; r1 < rows.length; r1++) {
    for (let c1 = 0; c1 < rows[r1].length; c1++) {
      if (rows[r1][c1] !== '+') continue;

      for (let c2 = c1 + 1; c2 < rows[r1].length; c2++) {
        if (rows[r1][c2] !== '+') continue;

        // Check the top edge ('-' or '+')
        if (!isHorizontalEdge(rows[r1], c1, c2)) continue;

        // Finding matching '+' pairs
        for (let r2 = r1 + 1; r2 < rows.length; r2++) {
          if (rows[r2][c1] !== '+' && rows[r2][c1] !== '|') break;
          if (rows[r2][c2] !== '+' && rows[r2][c2] !== '|') break;

          // Find the bottom edge
          if (rows[r2][c1] === '+' && rows[r2][c2] === '+') {
            if (isHorizontalEdge(rows[r2], c1, c2)) {
              rectangles++;
            }
          }
        }
      }
    }
  }

  return rectangles;
}

function isHorizontalEdge(row, c1, c2) {
  for (let i = c1 + 1; i < c2; i++) {
    if (row[i] !== '-' && row[i] !== '+') return false;
  }
  return true;
}
