//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (targetWord, candidates) => {
  const normalize = (word) =>
    word.toLowerCase().split('').sort().join('');

  const normalizedTarget = normalize(targetWord);

  return candidates.filter(
    (value) =>
      value.toLowerCase() !== targetWord.toLowerCase() &&
      normalize(value) === normalizedTarget
  );
};
