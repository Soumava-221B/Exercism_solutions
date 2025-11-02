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
] as const;

// Define type of color
export type Color = typeof COLORS[number];

// Return the numeric value of a given color 
export const colorCode = (color: Color) => COLORS.indexOf(color);
