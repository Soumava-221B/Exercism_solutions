//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinValues, target) {
    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }
    if (target === 0) {
      return [];
    }

    coinValues.sort((a, b) => b - a);
    const dp = Array(target + 1).fill(Infinity);
    const parent = Array(target + 1).fill(null);

    dp[0] = 0;

    for (const coin of coinValues) {
      for (let i = coin; i <= target; i++) {
        if (dp[i - coin] + 1 < dp[i]) {
          dp[i] = dp[i - coin] + 1;
          parent[i] = coin;
        }
      }
    }

    if (dp[target] === Infinity) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    const result = [];
    for (let i = target; i > 0; i -= parent[i]) {
      result.push(parent[i]);
    }

    return result.sort((a, b) => a - b);
  }
}
