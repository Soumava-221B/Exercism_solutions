export function squareRoot(radicand: number): number {
  let low = 1;
  let high = radicand;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const square = mid * mid;

    if (square === radicand) {
      return mid;
    }

    if (square < radicand) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  throw new Error("Input is not a perfect square");
}
