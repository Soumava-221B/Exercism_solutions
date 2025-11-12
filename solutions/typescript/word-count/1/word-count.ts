export function count(text: string): Map<string, number> {
  const result = new Map<string, number>()
  const lowerText = text.toLowerCase()
  const words = lowerText.match(/[a-z0-9]+(?:'[a-z0-9]+)*/g) || []

  for (const word of words) {
    const count = result.get(word) || 0
    result.set(word, count + 1)
  }

  return result
}
