//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (originalScores) => {
  let updatedScores = {};
  
  for (const [score, letters] of Object.entries(originalScores)) {
    for (let index = 0; index < letters.length; index++) {
      const letter = letters[index].toLowerCase();
      updatedScores[letter] = parseInt(score);
    }
  }
  return updatedScores;
};
