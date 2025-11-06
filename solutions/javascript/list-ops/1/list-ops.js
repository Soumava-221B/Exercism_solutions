//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(other) {
    const result = [];
    const a = this.values;
    const b = other.values;
    for (let i = 0; i < a.length; i++) result[result.length] = a[i];
    for (let i = 0; i < b.length; i++) result[result.length] = b[i];
    return new List(result);
  }

  concat(listOfLists) {
    let result = [];
    const a = this.values;

    for (let i = 0; i < a.length; i++) result[result.length] = a[i];
    const lists = listOfLists.values;
    for (let i = 0; i < lists.length; i++) {
      const current = lists[i].values;
      for (let j = 0; j < current.length; j++) result[result.length] = current[j];
    }
    return new List(result);
  }

  filter(predicate) {
    const result = [];
    const a = this.values;
    for (let i = 0; i < a.length; i++) {
      if (predicate(a[i])) result[result.length] = a[i];
    }
    return new List(result);
  }

  map(fn) {
    const result = [];
    const a = this.values;
    for (let i = 0; i < a.length; i++) result[result.length] = fn(a[i]);
    return new List(result);
  }

  length() {
    let count = 0;
    for (const _ of this.values) count++;
    return count;
  }

  foldl(fn, acc) {
    const a = this.values;
    for (let i = 0; i < a.length; i++) acc = fn(acc, a[i]);
    return acc;
  }

  foldr(fn, acc) {
    const a = this.values;
    for (let i = a.length - 1; i >= 0; i--) acc = fn(acc, a[i]);
    return acc;
  }

  reverse() {
    const a = this.values;
    const result = [];
    for (let i = a.length - 1; i >= 0; i--) result[result.length] = a[i];
    return new List(result);
  }
}
