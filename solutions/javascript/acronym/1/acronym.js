//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (input) => {
  let cleaned = input
    .replace(/[-_]/g, " ")     
    .replace(/[^\w\s]/g, "");  

  let words = cleaned.split(/\s+/); 
  let sigla = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    sigla += words[i][0].toUpperCase();
  }

  return sigla;
};