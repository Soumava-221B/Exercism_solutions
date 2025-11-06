//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  const fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1; // 1 = down, -1 = up

  for (const char of message) {
    fence[rail].push(char);

    if (rail === 0) direction = 1;
    else if (rail === rails - 1) direction = -1;

    rail += direction;
  }
  return fence.flat().join('');
};

export const decode = (message, rails) => {
  const pattern = [];
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < message.length; i++) {
    pattern.push(rail);
    if (rail === 0) direction = 1;
    else if (rail === rails - 1) direction = -1;
    rail += direction;
  }

  const railLengths = Array(rails).fill(0);
  for (const r of pattern) railLengths[r]++;
  const railsData = [];
  let index = 0;
  for (let r = 0; r < rails; r++) {
    railsData[r] = message.slice(index, index + railLengths[r]).split('');
    index += railLengths[r];
  }

  const result = [];
  for (const r of pattern) {
    result.push(railsData[r].shift());
  }
  return result.join('');
};
