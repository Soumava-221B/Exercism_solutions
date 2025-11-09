const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const REVERSE_ALPHABET = "zyxwvutsrqponmlkjihgfedcba";

function addSpaces(text: string): string {
  const result = [];

  for (let i = 0; i < text.length; i += 5) {
    result.push(text.slice(i, i + 5));
  }

  return result.join(" ");
}

export const encode = (plainText: string): string => {
  const encoded = decode(plainText);
  return addSpaces(encoded);
};

export const decode = (cipherText: string): string => {
  return cipherText
    .toLowerCase()           
    .replace(/[\W]/g, "")    
    .split("")               
    .map((char) => {
      const index = ALPHABET.indexOf(char);

      if (index === -1) return char;
      return REVERSE_ALPHABET[index];
    })
    .join("");
};
