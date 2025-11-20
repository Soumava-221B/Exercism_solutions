export const square = (value: number): bigint => {
  if (value <= 0 || value > 64) {
    throw new Error('Square must be between 1 and 64')
  }

  // The nth square has 2^(n-1) grains.
  return 2n ** BigInt(value - 1)
}

export const total = (): bigint => {
  // Sum of geometric series: 2^64 - 1
  return (2n ** 64n) - 1n
}
