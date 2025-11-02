// Colors array 
export const COLORS = [
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
];

// Return the numeric value of a given color 
export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};

