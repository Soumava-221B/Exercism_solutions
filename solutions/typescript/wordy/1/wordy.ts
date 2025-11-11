const removeOperands = (xs: string[]): string[] =>
  xs.filter((x) => !parseInt(x, 10));

const allValidOperators = (xs: string[]): boolean =>
  xs.every(
    (x) =>
      x === "plus" || x === "minus" || x === "multiplied" || x === "divided",
  );

const operations: { [key: string]: (x: number, y: number) => number } = {
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
  divided: (x, y) => x / y,
  multiplied: (x, y) => x * y,
};

const id = <T>(x: T): T => x;

export const answer = (problem: string): number => {
  if (!problem.startsWith("What is")) {
    throw new Error("Unknown operation");
  }

  // Gaurd clause 
  const [a, op1, b, op2, c]: string[] = (
    problem.match(
      /What is\s?(-?\d{1,})?\s?(\w+)?\s?(?:by )?(-?\d{1,})?\s?(\w+)?\s?(?:by )?(-?\d{1,})?/,
    ) ?? []
  ).slice(1);

  const maybeOperators = [op1, op2];
  const maybeOperands = [a, b, c];
  const operators = maybeOperators.filter(id);
  const operands: number[] = maybeOperands
    .filter(id)
    .map((x) => parseInt(x, 10));

  if (!allValidOperators(removeOperands(operators))) {
    throw new Error("Unknown operation");
  }

  if (operators.find((x) => parseInt(x, 10))) {
    throw new Error("Syntax error");
  }

  if (operands.length - operators.length !== 1) {
    throw new Error("Syntax error");
  }

  if (operators.length === 0 && operands.length === 1) {
    return operands[0];
  }

  return operators.reduce(
    (result: number, operator: string, i: number): number => {
      const f = operations[operator] ?? id;

      if (i === 0) {
        const x = operands.shift();
        const y = operands.shift();

        // @ts-expect-error x and y are always defined
        return f(x, y);
      }

      const x = operands.shift();

      // @ts-expect-error x is always defined
      return f(result, x);
    },
    0,
  );
};
