//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (cardNumber) => {
  // Remove spaces
  const digitsOnly = cardNumber.replace(/\s+/g, "");

  // For invalid input
  if (digitsOnly.length <= 1 || /\D/.test(digitsOnly)) return false;

  // Luhn algorithm
  const sum = digitsOnly
    .split("")
    .reverse()
    .map(Number)
    .map((digit, index) => {
      if (index % 2 === 1) {
        const doubled = digit * 2;
        return doubled > 9 ? doubled - 9 : doubled;
      }
      return digit;
    })
    .reduce((a, b) => a + b, 0);

  // Divisibility by 10
  return sum % 10 === 0;
};

