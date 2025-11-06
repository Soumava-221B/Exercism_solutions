//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numStr = number.toString();
  const numDigits = numStr.length;

  let sum = 0n;

  for (let i = 0; i < numDigits; i++) {
    const digit = BigInt(parseInt(numStr[i], 10));
    sum += digit ** BigInt(numDigits);
  }

  return sum === BigInt(number);
};
