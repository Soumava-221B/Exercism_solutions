//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    const { n } = this;
    let sumSquare = 0;
    for (let i = 1; i <= n; i++) sumSquare += i * i; 
    return sumSquare;
  }

  get squareOfSum() {
    const { n } = this;
    let SquareSum = 0;
    let sum = 0
    for (let i = 1; i <= n; i++) {
      sum += i; 
      SquareSum = sum * sum;
    } 
    return SquareSum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
