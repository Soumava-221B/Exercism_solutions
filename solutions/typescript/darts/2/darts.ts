export function score(x: number, y: number): number {
  // Calculate distance using Euclidean distance formula
  const dist = Math.sqrt(x ** 2 + y ** 2);

  if (dist <= 1) return 10;
  if (dist <= 5) return 5;
  if (dist <= 10) return 1;

  return 0;
}
