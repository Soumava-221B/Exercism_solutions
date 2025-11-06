//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const BOOK_PRICE = 800;
  const DISCOUNTS = {
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25
  };

  const groupCost = (size) => {
    return Math.round(size * BOOK_PRICE * (1 - DISCOUNTS[size]));
  };

  let counts = [0, 0, 0, 0, 0];
  books.forEach((b) => counts[b - 1]++);

  let groups = [];

  while (Math.max(...counts) > 0) {
    let groupSize = 0;

    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        groupSize++;
      }
    }
    groups.push(groupSize);
  }

  while (groups.includes(5) && groups.includes(3)) {
    groups.splice(groups.indexOf(5), 1);
    groups.splice(groups.indexOf(3), 1);
    groups.push(4, 4);
  }

  return groups.reduce((sum, size) => sum + groupCost(size), 0);
};
