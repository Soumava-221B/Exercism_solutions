//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (elems) => {
  if (!elems || elems.length === 0) return [];

  const rows = Math.max(...elems.map(e => e.length));
  const transposed = [];

  for (let i = 0; i < rows; i++) {
    let row = "";
    let endIndex = -1;

    for (let j = elems.length - 1; j >= 0; j--) {
      if (elems[j][i] !== undefined) {
        endIndex = j;
        break;
      }
    }

    for (let j = 0; j <= endIndex; j++) {
      row += elems[j][i] ?? " ";
    }

    transposed.push(row);
  }

  return transposed;
};
