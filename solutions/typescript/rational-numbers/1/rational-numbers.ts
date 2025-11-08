export class Rational {
  public readonly numerator: number;
  public readonly denominator: number;

  constructor(numerator: number, denominator: number) {
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));

    if (denominator < 0) {
      numerator = -numerator;
      denominator = -denominator;
    }

    this.numerator = numerator / divisor;
    this.denominator = denominator / divisor;
  }

  add(other: Rational): Rational {
    const num = this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Rational(num, den);
  }

  sub(other: Rational): Rational {
    return this.add(new Rational(-other.numerator, other.denominator));
  }

  mul(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  div(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(exp: number): Rational {
    if (exp >= 0) {
      return new Rational(
        Math.pow(this.numerator, exp),
        Math.pow(this.denominator, exp)
      );
    } else {
      const e = Math.abs(exp);
      return new Rational(
        Math.pow(this.denominator, e),
        Math.pow(this.numerator, e)
      );
    }
  }

  expreal(exp: number): number {
    const fractionValue = this.numerator / this.denominator;
    return Math.pow(exp, fractionValue);
  }

  reduce(): Rational {
    return this;
  }
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
