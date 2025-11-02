export class Matrix {
  private _rows: number[][];

  constructor(matrixStr: string) {
    const lines = matrixStr.trim().split('\n');

    this._rows = lines.map(line => {
      return line.trim().split(/\s+/) .map(Number);  
    });
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._rows[0].map((_, columnIndex) => {
      return this._rows.map(row => row[columnIndex]);
    });
  }
}
