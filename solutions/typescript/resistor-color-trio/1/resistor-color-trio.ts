export function decodedResistorValue(resistors: string[]): string {
  const color_code = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ]
  const code: number[] = resistors.map(r => {
    const index = color_code.indexOf(r.toLowerCase());
    if (index === -1) throw new Error(`Invalid color: ${r}`);
    return index;
  });
  const baseValue: number = parseInt(`${code[0]}${code[1]}`);
  const multiplier: number = Math.pow(10, code[2]);
  const resistance = baseValue * multiplier;

  if (resistance < 1_000) {
    return `${resistance} ohms`
  } else if (resistance >= 1_000 && resistance < 1_000_000) {
    return `${resistance/1_000} kiloohms`
  } else if (resistance >= 1_000_000 && resistance < 1_000_000_000) {
    return `${resistance/1_000_000} megaohms`
  } else {
    return `${resistance/1_000_000_000} gigaohms`
  }
  return 'invalid resistance';
}
