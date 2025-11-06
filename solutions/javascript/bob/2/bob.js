//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function hey(message) {
  const speech = message.trim();
  if (speech == '') {
    return 'Fine. Be that way!';
  }

  const isQuestion = speech.endsWith('?');
  const isShout = /[A-Z]{1}/.test(speech) && speech == speech.toUpperCase();

  switch (true) {
    case isQuestion && isShout:
      return "Calm down, I know what I'm doing!";
    case isShout:
      return 'Whoa, chill out!';
    case isQuestion:
      return 'Sure.';
    default:
      return 'Whatever.';
  }
}
