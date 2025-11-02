export function isLeap(year: number): boolean {
  // If year divisble by 4(leap), but also divisble by 100 then it must be divisible by 400 
  // Or else it's not leap year
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
