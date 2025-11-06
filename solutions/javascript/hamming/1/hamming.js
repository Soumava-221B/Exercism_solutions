//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (pattern1, pattern2) => {
  if (pattern1.length !== pattern2.length) throw new Error('strands must be of equal length');
  
  let differences = 0;
  
  for (let i = 0; i < pattern1.length; i++) {
    if (pattern1[i] !== pattern2[i]) differences++;
  }
  
  return differences;
};
