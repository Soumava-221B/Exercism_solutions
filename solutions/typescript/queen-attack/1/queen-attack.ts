type Position = readonly [number, number];

type Positions = {
  white: Position;
  black: Position;
};

export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;

  constructor({ white = [7, 3], black = [0, 3] }: Partial<Positions> = {}) {
    this.validatePosition(white);
    this.validatePosition(black);

    if (white[0] === black[0] && white[1] === black[1]) {
      throw new Error('Queens cannot share the same space');
    }

    this.white = white;
    this.black = black;
  }

  private validatePosition([row, col]: Position) {
    if (row < 0 || row > 7 || col < 0 || col > 7) {
      throw new Error('Queen must be placed on the board');
    }
  }

  get canAttack() {
    const [wr, wc] = this.white;
    const [br, bc] = this.black;

    if (wr === br) return true;
    if (wc === bc) return true;
    if (Math.abs(wr - br) === Math.abs(wc - bc)) return true;

    return false;
  }

  toString() {
    const board: string[] = [];

    for (let row = 0; row < 8; row++) {
      const cols: string[] = [];
      for (let col = 0; col < 8; col++) {
        if (this.white[0] === row && this.white[1] === col) {
          cols.push('W');
        } else if (this.black[0] === row && this.black[1] === col) {
          cols.push('B');
        } else {
          cols.push('_');
        }
      }
      board.push(cols.join(' '));
    }

    return board.join('\n');
  }
}
