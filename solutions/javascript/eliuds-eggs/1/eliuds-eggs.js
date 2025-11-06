//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue) => {
  let count = 0;
  let num = displayValue;

  while (num > 0) {
    if (num % 2 === 1) {
      count++;
    }

    num = Math.floor(num / 2);
  }

  return count;
};
