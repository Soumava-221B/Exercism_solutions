//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input = "") => {
  if (!input) return "";

  let result = [];
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result.push((count > 1 ? count : "") + input[i - 1]);
      count = 1;
    }
  }

  return result.join("");
};

export const decode = (input = "") =>
  input.replace(/(\d*)([A-Za-z\s])/g, (_, count, char) =>
    char.repeat(count === "" ? 1 : Number(count))
  );
