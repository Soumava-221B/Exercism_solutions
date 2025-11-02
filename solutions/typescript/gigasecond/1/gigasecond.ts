export class Gigasecond {
  public gigaSecond: number = 10 ** 12
  public firstDate: Date

  // constructor to initialize firstDate
  constructor(date: Date) {
    this.firstDate = date
  }
  
  public date(): Date {
        let newDate = new Date(this.firstDate.getTime() + this.gigaSecond)
    return newDate
  }
}
