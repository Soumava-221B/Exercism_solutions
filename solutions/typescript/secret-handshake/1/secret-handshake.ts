export const commands = (code: number) => {
  const actions: string[] = [];

  if (code & 0b00001) actions.push("wink");
  if (code & 0b00010) actions.push("double blink");
  if (code & 0b00100) actions.push("close your eyes");
  if (code & 0b01000) actions.push("jump");

  // reverse the actions
  if (code & 0b10000) actions.reverse();

  return actions;
};
