export function age(planet: string, seconds: number): number {
  var planetSeconds = PLANET_ORBIT_PERIOD[planet];
  var divisor = 365.25*24*60*60*planetSeconds;
  var years = seconds/divisor;
  return Number(years.toFixed(2));
}

export const PLANET_ORBIT_PERIOD: Record<string, number> = {
  "mercury":  0.2408467,
  "venus":	0.61519726,
  "earth":	1.0,
  "mars":	1.8808158,
  "jupiter":	11.862615,
  "saturn":	29.447498,
  "uranus":	84.016846,
  "neptune":	164.79132
}