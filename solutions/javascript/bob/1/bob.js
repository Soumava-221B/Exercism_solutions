//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const question = message.trim().match(/\?$/)
  const yell = message.match(/[A-Z]/g) && message.match(/[A-Z]/g).length >= (message.replace(/\s|\W|\d/g, '').length)
  const silence = message.replace(/\s/g, '').length === 0
  
  if(question && yell) {
    return "Calm down, I know what I'm doing!"
  }
  else if(question) {
    return "Sure."
  }
  else if(yell) {
    return "Whoa, chill out!"
  }
  else if(silence) {
    return "Fine. Be that way!"
  }
  else {
    return "Whatever." 
  }
};
