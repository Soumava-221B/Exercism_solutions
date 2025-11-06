//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span > input.length) {
    throw new Error("span must not exceed string length");
  }
  if (span < 0) {
    throw new Error("span must not be negative");
  }
  if (/[^0-9]/.test(input)) {
    throw new Error("digits input must only contain digits");
  }

  if (span === 0) return 1;

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    let series = input.slice(i, i + span);
    let product = 1;

    for (let j = 0; j < series.length; j++) {
      product *= Number(series[j]);
    }

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
