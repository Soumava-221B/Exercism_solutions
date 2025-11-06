//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let aliquotSum = 0;

  for(let i = 1; i < num; i++) {
    if (num%i === 0) {
      aliquotSum += i;
    }
  }

  if (aliquotSum === num) return "perfect";
  if (aliquotSum > num) return "abundant";
  
  return "deficient";
 };
