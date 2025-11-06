//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(string) {
    this.normalized = (string || '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    this.len = this.normalized.length;

    if (this.len > 0) {
      const size = Math.ceil(Math.sqrt(this.len));
      this.cols = size;
      this.rows = Math.ceil(this.len / size);
    }
  }

  get ciphertext() {
    if (this.len === 0) return '';

    const { normalized, len, rows, cols } = this;

    return Array.from({ length: cols }, (_, c) =>
      Array.from({ length: rows }, (_, r) => {
        const i = r * cols + c;
        return i < len ? normalized[i] : ' ';
      }).join('')
    ).join(' ');
  }
}
