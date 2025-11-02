export function decodedValue(resistrors: string[]):number {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ]

  const colorCode = resistrors.map(r => {
    const result = COLORS.indexOf(r.toLowerCase());
    if(result >= 0) return result;
  });
  return parseInt(colorCode.join("").slice(0,2));
}
