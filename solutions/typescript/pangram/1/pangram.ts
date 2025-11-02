export function isPangram(sentence: string): boolean {
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  const emptyAlphabet: Set<string> = new Set();

  // Empty string condition
  if (sentence.length === 0) {
    return false;
  }
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (alphabet.includes(letter)) {
      emptyAlphabet.add(letter);
    }
  }
  
  return Array.from(emptyAlphabet).sort().join('') === alphabet;
}