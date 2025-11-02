export const isPangram = (s: string): boolean => {
  // [a-z] match any lowercase letter, (?!.*\1) - negative lookahead 
  const regex = /([a-z])(?!.*\1)/g;

  // Conting unique letters for all 26 alphabets
  return (s.toLowerCase().match(regex) || []).length === 26;
  
};