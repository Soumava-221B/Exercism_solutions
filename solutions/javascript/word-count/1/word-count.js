//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  const word_count = {};
  str.toLowerCase().split(/[^'A-Za-z0-9]/).forEach((word) => {
    const concat = word.replace(/^'+|'+$/g, "");
    if (concat) {
      word_count[concat] = (word_count[concat] || 0) + 1;
    }
  });
  return word_count;
};

