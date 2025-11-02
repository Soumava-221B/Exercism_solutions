export function toRna(dna: string): string {

  // map each DNA nucleotide to its corresponding RNA complement
  const dnaToRna: Record<string, string> = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  
  return dna.split('').map((nucleotide: string): string => {
    
        if (!dnaToRna[nucleotide]) {
          throw new Error('Invalid input DNA.');
        }
        return dnaToRna[nucleotide];
      }).join('');
}
