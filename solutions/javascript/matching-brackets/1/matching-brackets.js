//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (bracketString = '') => {
  const stack = [];
  const pairs = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  };
  const openings = new Set(Object.values(pairs));

  for (const char of bracketString) {
    if (openings.has(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
};
