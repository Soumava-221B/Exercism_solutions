//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  const start = time.valueOf();
  const calculateGigasecond = start + 1e12;
  return new Date(calculateGigasecond);
};
