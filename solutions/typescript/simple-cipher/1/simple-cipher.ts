export class SimpleCipher {
  key: string

  constructor(key?: string) {
    if (key && /^[a-z]+$/.test(key)) {
      this.key = key
    } else {
      this.key = ''
      for (let i = 0; i < 100; i++) {
        this.key += String.fromCharCode(97 + Math.floor(Math.random() * 26))
      }
    }
  }

  // Convert a letter to a shift number (a = 0, b = 1, c = 2, ...)
  private getShiftAmount(letter: string): number {
    return letter.charCodeAt(0) - 97
  }

  encode(plainText: string): string {
    let result = ''

    for (let i = 0; i < plainText.length; i++) {
      const plainCharValue = plainText.charCodeAt(i) - 97
      const keyShift = this.getShiftAmount(this.key[i % this.key.length])
      const encodedValue = (plainCharValue + keyShift) % 26
      result += String.fromCharCode(encodedValue + 97)
    }

    return result
  }

  decode(cipherText: string): string {
    let result = ''

    for (let i = 0; i < cipherText.length; i++) {
      const cipherCharValue = cipherText.charCodeAt(i) - 97
      const keyShift = this.getShiftAmount(this.key[i % this.key.length])
      const decodedValue = (cipherCharValue - keyShift + 26) % 26
      result += String.fromCharCode(decodedValue + 97)
    }

    return result
  }
}
