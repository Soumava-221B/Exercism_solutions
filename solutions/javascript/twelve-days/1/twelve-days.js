//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (start, end = start) => {
  const days = [
    "first", "second", "third",
    "fourth", "fifth", "sixth",
    "seventh", "eighth", "ninth",
    "tenth", "eleventh", "twelfth"
  ];

  const gifts = [
    "a Partridge in a Pear Tree.",
    "two Turtle Doves",
    "three French Hens",
    "four Calling Birds",
    "five Gold Rings",
    "six Geese-a-Laying",
    "seven Swans-a-Swimming",
    "eight Maids-a-Milking",
    "nine Ladies Dancing",
    "ten Lords-a-Leaping",
    "eleven Pipers Piping",
    "twelve Drummers Drumming"
  ];

  const verses = [];

  for (let i = start - 1; i < end; i++) {
    let verse = `On the ${days[i]} day of Christmas my true love gave to me: `;
    const giftsList = [];

    for (let j = i; j >= 0; j--) {
      let gift = gifts[j];
      if (i > 0 && j === 0) gift = "and " + gift;
      giftsList.push(gift);
    }

    verse += giftsList.join(", ");
    verses.push(verse);
  }
  return verses.join("\n\n") + "\n";
};


