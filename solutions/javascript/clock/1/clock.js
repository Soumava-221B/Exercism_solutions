//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, min = 0) {
    this._hour = hour;
    this._min = min;
    this.convertTime();
  }

  toString() {
    return `${this.padToTwoDigits(this._hour)}:${this.padToTwoDigits(this._min)}`;
  }

  plus(min) {
    return new Clock(this._hour, this._min + min);
  }

  minus(min) {
    return new Clock(this._hour, this._min - min);
  }

  equals(clock) {
    return this._hour === clock._hour && this._min === clock._min;
  }

  padToTwoDigits(n) {
    return String(n).padStart(2, '0');
  }

  convertTime() {
    let totalMins = (this._hour * 60 + this._min) % 1440;
    if (totalMins < 0) totalMins += 1440;

    this._hour = Math.floor(totalMins / 60);
    this._min = totalMins % 60;
  }
}
