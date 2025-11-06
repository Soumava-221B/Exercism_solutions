//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0))

  let num = 1;
  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;

  while (top <= bottom && left <= right) {
    //  Moving left to right
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    // Moving Top to Bottom
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;

    // Moving right to left
    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;

    // Moving bottom to top
    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }
  return matrix;
};
