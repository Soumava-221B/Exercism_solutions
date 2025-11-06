export const isIsogram = (str = '') => {
  // remove lowercase, space and haphens
  const cleanedString = str.toLowerCase().replace(/[-\s]/g, '');

  const trackUnique = new Set();

  for(const char of cleanedString) {
    if(trackUnique.has(char)) {
      return false;
    }
    trackUnique.add(char);
  }
  return true;
};
