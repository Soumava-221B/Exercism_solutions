export class Clock {
  private hour: number;
  private minute: number;

  constructor(hour: number, minute: number = 0) {
    const totalMinutes = hour * 60 + minute;

    const normalMinutes =((totalMinutes % 1440) + 1440) % 1440;

    this.hour = Math.floor(normalMinutes / 60);
    this.minute = normalMinutes % 60;
  }

  public toString(): string {
    const hh = this.hour.toString().padStart(2, '0');
    const mm = this.minute.toString().padStart(2, '0');
    return `${hh}:${mm}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: unknown): boolean {
    if (!(other instanceof Clock)) return false;
    return (
      this.hour === other.hour &&
      this.minute === other.minute
    );
  }
}