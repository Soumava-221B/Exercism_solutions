//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(initialState) {
    this.currentState = initialState.map(row => [...row]); 
  }

  tick() {
    if (this.currentState.length === 0) return;

    const rows = this.currentState.length;
    const cols = this.currentState[0].length;
    const nextState = Array.from({ length: rows }, () => Array(cols).fill(0));

    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],[0, 1],[1, -1],[1, 0],[1, 1]
    ];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let liveNeighbors = 0;

        for (const [dx, dy] of directions) {
          const ni = i + dx, nj = j + dy;
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            liveNeighbors += this.currentState[ni][nj];
          }
        }

        const cell = this.currentState[i][j];
        nextState[i][j] =
          cell === 1
            ? (liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0)
            : (liveNeighbors === 3 ? 1 : 0);
      }
    }

    this.currentState = nextState;
  }

  state() {
    return this.currentState.map(row => [...row]); // deep copy
  }
}
