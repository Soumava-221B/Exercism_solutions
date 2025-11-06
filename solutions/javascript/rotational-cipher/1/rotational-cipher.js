//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, shiftKey) => {
  const shiftChar = (char, base) =>
    String.fromCharCode(((char.charCodeAt(0) - base + shiftKey) % 26) + base);

  return [...text] 
    .map((char) => {
      if (/[A-Z]/.test(char)) return shiftChar(char, 65); 
      if (/[a-z]/.test(char)) return shiftChar(char, 97); 
      return char; 
    })
    .join("");
};
