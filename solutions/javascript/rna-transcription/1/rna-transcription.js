//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotides) => {
  let givenNucleotides = [...nucleotides]
  let rna = [];
  for (let i = 0; i < givenNucleotides.length; i++) {
    if(givenNucleotides[i] === 'G') {
      rna.push('C')
    } else if (givenNucleotides[i] === 'C') {
      rna.push('G');
    } else if (givenNucleotides[i] === 'T') {
      rna.push('A');
    } else if (givenNucleotides[i] === 'A') {
      rna.push('U');
    }
  }
  let ans = rna.join('');
  return ans;
};
