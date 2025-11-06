//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DIGIT_MAP = {
  " _ | ||_|   ": "0",
  "     |  |   ": "1",
  " _  _||_    ": "2",
  " _  _| _|   ": "3",
  "   |_|  |   ": "4",
  " _ |_  _|   ": "5",
  " _ |_ |_|   ": "6",
  " _   |  |   ": "7",
  " _ |_||_|   ": "8",
  " _ |_| _|   ": "9",
};

function validateInput(lines) {
  if (lines.length % 4 !== 0) {
    throw new Error("Invalid number of rows");
  }

  const isInvalidWidth = lines.some(line => line.length % 3 !== 0);
  if (isInvalidWidth) {
    throw new Error("Invalid number of columns");
  }
}

function extractDigitPattern(lines, startRow, startCol) {
  return (
    lines[startRow].slice(startCol, startCol + 3) +
    lines[startRow + 1].slice(startCol, startCol + 3) +
    lines[startRow + 2].slice(startCol, startCol + 3) +
    lines[startRow + 3].slice(startCol, startCol + 3)
  );
}

//Converts one 4-line block of ASCII digits into a string of actual digits.
function parseDigitBlock(blockLines) {
  const numDigits = blockLines[0].length / 3;
  let result = "";

  for (let col = 0; col < numDigits * 3; col += 3) {
    const pattern = extractDigitPattern(blockLines, 0, col);
    result += DIGIT_MAP[pattern] || "?";
  }

  return result;
}

//Converts an OCR-style ASCII string to human-readable digits.
export function convert(input) {
  if (!input) return "";
  const lines = input.split("\n");
  validateInput(lines);
  const results = [];

  for (let row = 0; row < lines.length; row += 4) {
    const block = lines.slice(row, row + 4);
    results.push(parseDigitBlock(block));
  }
  return results.join(",");
}
