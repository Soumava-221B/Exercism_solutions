//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const colorCode = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  const [x,y] = colors;
  const firstResistor = colorCode.indexOf(x).toString();
  const secondResistor = colorCode.indexOf(y).toString();
  return Number(firstResistor + secondResistor);
};
