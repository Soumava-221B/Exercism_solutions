//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
    constructor(real, imag) {
        this.real = Object.is(real, -0) ? 0 : real;
        this.imag = Object.is(imag, -0) ? 0 : imag;
    }

    add(cn) {
        return new ComplexNumber(this.real + cn.real, this.imag + cn.imag);
    }

    sub(cn) {
        return new ComplexNumber(this.real - cn.real, this.imag - cn.imag);
    }

    mul(cn) {
        const real = this.real * cn.real - this.imag * cn.imag;
        const imag = this.imag * cn.real + this.real * cn.imag;
        return new ComplexNumber(real, imag);
    }

    div(cn) {
        const denom = cn.real * cn.real + cn.imag * cn.imag;
        const real = (this.real * cn.real + this.imag * cn.imag) / denom;
        const imag = (this.imag * cn.real - this.real * cn.imag) / denom;
        return new ComplexNumber(real, imag);
    }

    get abs() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }

    get conj() {
        return new ComplexNumber(this.real, -this.imag);
    }

    get exp() {
        const expReal = Math.exp(this.real);
        return new ComplexNumber(expReal * Math.cos(this.imag), expReal * Math.sin(this.imag));
    }

    toString() {
        const sign = this.imag >= 0 ? "+" : "-";
        return `${this.real} ${sign} ${Math.abs(this.imag)}i`;
    }
}

