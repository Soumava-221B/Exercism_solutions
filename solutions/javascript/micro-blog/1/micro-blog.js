//
// This is only a SKELETON file for the 'Micro-blog' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const truncate = (input) => {
  if (typeof input !== "string") return "";

  const chars = [...input];

  return chars.slice(0, 5).join("");
};
