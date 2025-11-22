export function sum(factors: number[], limit: number): number {
  const multiples = new Set<number>();

  for (const factor of factors) {
    if (factor === 0) continue;

    for (let m = factor; m < limit; m += factor) {
      multiples.add(m);
    }
  }

  let total = 0;
  for (const value of multiples) {
    total += value;
  }

  return total;
}
