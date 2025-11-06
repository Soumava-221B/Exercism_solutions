//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ColorList = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const units = [
    { limit: 1e9, unit: 'gigaohms' },
    { limit: 1e6, unit: 'megaohms' },
    { limit: 1e3, unit: 'kiloohms' },
  ];

export class ResistorColorTrio {
  constructor([a, b, exponent]) {
    const aIndex = ColorList.indexOf(a);
    const bIndex = ColorList.indexOf(b);
    const exponentIndex = ColorList.indexOf(exponent);
    
    if ([aIndex, bIndex, exponentIndex].includes(-1)) {
      throw new Error('/invalid color/');
    }
    this.ohms = (aIndex *10 + bIndex) * (10 ** exponentIndex);
  }
  get label() {
    const { limit, unit } = units.find(u => this.ohms >= u.limit) || { limit: 1, unit: 'ohms' };
  return `Resistor value: ${this.ohms / limit} ${unit}`;
  }
}