//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white',
];

export const colorCode = color => {
  const idx = COLORS.indexOf(color);
  if (idx > -1) return idx;
  throw new Error('Invalid color: ' + color);
};

