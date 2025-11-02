const GIGASECOND_IN_MS = 1e12;

export class Gigasecond {
  
  // private initialDate for encapsulation
  constructor (private initialDate: Date) {}

  public date() { 
    return new Date(+this.initialDate + GIGASECOND_IN_MS); 
  }
}
