//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  static dialogue = {
    fly: "I don't know why she swallowed the fly. Perhaps she'll die.",
    spider: "It wriggled and jiggled and tickled inside her.",
    bird: "How absurd to swallow a bird!",
    cat: "Imagine that, to swallow a cat!",
    dog: "What a hog, to swallow a dog!",
    goat: "Just opened her throat and swallowed a goat!",
    cow: "I don't know how she swallowed a cow!",
    horse: "She's dead, of course!",
  };
  static ACTIVITY = {
    spider: " that wriggled and jiggled and tickled inside her",
  };
  static ANIMALS = Object.keys(Song.dialogue);
  
  verse(index) {
    const lines = [];
    const animal = Song.ANIMALS[index - 1];
    lines.push(`I know an old lady who swallowed a ${animal}.`);
    lines.push(Song.dialogue[animal]);
    if (animal != 'horse') {
      for(var i = index - 2; i >= 0; i--) {
        const activity = Song.ACTIVITY[Song.ANIMALS[i]] ?? "";
        lines.push(`She swallowed the ${Song.ANIMALS[i + 1]} to catch the ${Song.ANIMALS[i]}${activity}.`);
      }
      if (index > 1) lines.push(Song.dialogue['fly']);
    }
    return lines.map((line) => `${line}\n`).join("");
  }

  verses(min, max) {
    const result = [];
    for (var i = min; i <= max; i++) {
      result.push(this.verse(i));
    }
    return result.map((verse) => verse + "\n").join("");
  }
}