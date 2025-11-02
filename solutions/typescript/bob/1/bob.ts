export function hey(message: string): string {
  
  const storedMessage = message.trim();

  // Convert the message to uppercase for shouting 
  const isUpperCase = /[A-Z]+/.test(storedMessage) && storedMessage == storedMessage.toUpperCase();

  if (storedMessage === "") {
    return "Fine. Be that way!";
  }

  if (isUpperCase && storedMessage.endsWith("?")) {
    return "Calm down, I know what I'm doing!";
  }

  if (isUpperCase) {
    return "Whoa, chill out!";
  }
  
  if (storedMessage.endsWith("?")) {
    return "Sure.";
  }
  
  return "Whatever.";
}