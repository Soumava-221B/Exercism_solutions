//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  if (!/^[ACGT]*$/.test(strand)) {
    throw new Error('Invalid nucleotide in strand');
  }

  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (const ch of strand) {
    counts[ch]++;
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
