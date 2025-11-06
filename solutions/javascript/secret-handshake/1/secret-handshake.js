//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const actions = ["wink", "double blink", "close your eyes", "jump"];
  let result = [];

  actions.forEach((action, i) => {
    if (num & (1 << i)) result.push(action);
  });

  if (num & 16) result.reverse();

  return result;
};
