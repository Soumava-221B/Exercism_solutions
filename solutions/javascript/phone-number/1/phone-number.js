//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const err = (message) => {
  throw new Error(message);
}

export const clean = (input) => {
  let sanitize = input.replace(/[ \-._\(\)\+]/g, '');

  // Validate length
  if (sanitize.length < 10) err('Incorrect number of digits');
  if (sanitize.length > 11) err("More than 11 digits");

  // Check for invalid characcter
  if (/[a-zA-Z]/.test(sanitize)) err("Letters not permitted");
  if (/\W/.test(sanitize)) err('Punctuations not permitted');

  // conditions for 11 digit number
  if (sanitize.length === 11 && sanitize.charAt(0) !== '1') err('11 digits must start with 1')
  if (sanitize.length === 11 && sanitize.charAt(0) === '1') {
    sanitize = sanitize.split('');
    sanitize.shift();
    sanitize = sanitize.join('');
  }

  // Validate Area code
  if (sanitize.charAt(0) === '0') err('Area code cannot start with zero');
  if (sanitize.charAt(0) === '1') err('Area code cannot start with one');

  // Validate Exchange code
  if (sanitize.charAt(3) === '0') err('Exchange code cannot start with zero');
  if (sanitize.charAt(3) === '1') err('Exchange code cannot start with one');
  return sanitize;
};
