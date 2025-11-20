export class ComplexNumber {
	real_part: number
	imaginary_part: number

	constructor(real: number, imaginary: number) {
		this.real_part = real
		this.imaginary_part = imaginary
	}

	public get real(): number {
		return this.real_part
	}

	public get imag(): number {
		return this.imaginary_part
	}

	public add(other: ComplexNumber): ComplexNumber {
		const real_part = this.real_part + other.real_part
		const imaginary_part = this.imaginary_part + other.imaginary_part
		return new ComplexNumber(real_part, imaginary_part)
	}

	public sub(other: ComplexNumber): ComplexNumber {
		const real_part = this.real_part - other.real_part
		const imaginary_part = this.imaginary_part - other.imaginary_part
		return new ComplexNumber(real_part, imaginary_part)
	}

	public div(other: ComplexNumber): ComplexNumber {
		const denominator = other.mul(other.conj)
		const numerator = this.mul(other.conj)
		const real_part = numerator.real_part / denominator.real_part
		const imaginary_part = numerator.imaginary_part / denominator.real_part
		return new ComplexNumber(real_part, imaginary_part)


	}

	public mul(other: ComplexNumber): ComplexNumber {
		const real_part = this.real * other.real_part - this.imaginary_part * other.imaginary_part
		const imaginary_part = this.real * other.imaginary_part + this.imaginary_part * other.real_part
		return new ComplexNumber(real_part, imaginary_part)
	}


	public get abs(): number {
		let real_dist = Math.abs(this.real_part)
		real_dist *= real_dist
		let imaginary_dist = Math.abs(this.imaginary_part)
		imaginary_dist *= imaginary_dist
		return Math.sqrt(real_dist + imaginary_dist)
	}

	public get conj(): ComplexNumber {
		const real_part = this.real_part
		const imaginary_part = -this.imaginary_part
		if (imaginary_part === 0) {
			return new ComplexNumber(this.real_part, 0)
		}
		return new ComplexNumber(real_part, imaginary_part)

	}

	public get exp(): ComplexNumber {
		const real_exp = Math.exp(this.real_part)
		const real_part = Math.cos(this.imaginary_part)
		const imaginary_part = Math.sin(this.imaginary_part)
		return new ComplexNumber(real_exp * real_part, real_exp * imaginary_part)
	}
}