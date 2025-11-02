export function annotate(garden: string[]): string[] {
  if (garden.length === 0) return [];

  const numberOfRows = garden.length;
  const numberOfColumns = garden[0].length;

  const emptySymbol = garden.some(row => row.includes('.')) ? '.' : ' ';

  const result: string[] = [];

  for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
    let newRow = '';

    for (let currentColumn = 0; currentColumn < numberOfColumns; currentColumn++) {
      const currentCell = garden[currentRow][currentColumn];

      if (currentCell === '*') {
        newRow += '*';
        continue;
      }

      let flowerCount = 0;

      // These two for loops let's move in the garden
      for (let rowChange = -1; rowChange <= 1; rowChange++) {
        for (let columnChange = -1; columnChange <= 1; columnChange++) {
          if (rowChange === 0 && columnChange === 0) continue; // Don't count your current position

          const neighborRow = currentRow + rowChange;
          const neighborColumn = currentColumn + columnChange;

          const isInsideGarden =
            neighborRow >= 0 &&
            neighborRow < numberOfRows &&
            neighborColumn >= 0 &&
            neighborColumn < numberOfColumns;

          if (isInsideGarden && garden[neighborRow][neighborColumn] === '*') {
            flowerCount++;
          }
        }
      }

      newRow += flowerCount > 0 ? flowerCount.toString() : emptySymbol;
    }
    result.push(newRow);
  }

  return result;
}
