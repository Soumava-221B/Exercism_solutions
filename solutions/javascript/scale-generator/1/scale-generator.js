//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic[0].toUpperCase() + tonic.slice(1).toLowerCase();
    this.majorScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    this.minorScale = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
    let natural = ['C', 'a'];
    let sharp = ['G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
    let flat = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
    
    let sharpNote = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let flatNote = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    
    if (natural.includes(tonic) 
        || sharp.includes(tonic)) {
      this.scale = sharpNote;
    } else if (flat.includes(tonic)) {
      this.scale = flatNote;
    }
  }

  chromatic() {
    let index = this.scale.indexOf(this.tonic) != -1 ? this.scale.indexOf(this.tonic) : this.scale.indexOf(this.tonic.toUpperCase());
    return this.scale.slice(index).concat(this.scale.slice(0, index))
  }

  interval(intervals) {
    if (!intervals) return this.cromatic();
    let steps = {
      'm': 1,
      'M': 2,
      'A': 3
    };
    let notes = [this.tonic];
    let i = this.scale.indexOf(this.tonic);
    for (let interval of intervals) {
      i = (i + steps[interval]) % 12;
      notes.push(this.scale[i]);
    }
    return notes;
  }
}
