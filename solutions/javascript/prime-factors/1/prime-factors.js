//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  const result = [];

  while (num % 2 === 0) {
    result.push(2);
    num /= 2;
  }

  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      result.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    result.push(num);
  }

  return result;
};
