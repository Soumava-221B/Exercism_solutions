//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (p <= 1 || g <= 1) {
      throw new Error('p and g must be greater than 1');
    }
    if (!DiffieHellman.isPrime(p)) {
      throw new Error('p must be prime');
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    this.validatePrivateKey(privateKey);
    return DiffieHellman.modularExponentiation(this.g, privateKey, this.p);
  }

  getSecret(otherPublicKey, myPrivateKey) {
    this.validatePrivateKey(myPrivateKey);
    return DiffieHellman.modularExponentiation(otherPublicKey, myPrivateKey, this.p);
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }

  validatePrivateKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error(`Private key must be between 2 and ${this.p - 1}`);
    }
  }

  static isPrime(n) {
    if (n <= 3) return n > 1;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  static modularExponentiation(base, exponent, modulus) {
    let result = 1;
    base %= modulus;

    while (exponent > 0) {
      if (exponent & 1) {
        result = (result * base) % modulus;
      }
      exponent >>= 1; 
      base = (base * base) % modulus;
    }

    return result;
  }
}
