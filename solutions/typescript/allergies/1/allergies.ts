export class Allergies {
  private static ITEMS: string[] = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
  ];

  #score: number;
  #matchedItems: string[];
  
  constructor(scoreValue: number) {
    this.#score = scoreValue % 256;

    let currentValue = this.#score;
    let currentBit = 0;
    let foundItems: string[] = [];

    while (currentValue > 0) {
      const isBitSet = currentValue % 2;
      if (isBitSet === 1) {
        const item = Allergies.ITEMS[currentBit];
        foundItems.push(item);
      }
      currentValue = Math.floor(currentValue / 2);
      currentBit++;
    }

    this.#matchedItems = foundItems;    
  }

  public list(): string[] {
    return this.#matchedItems;
  }

  public allergicTo(item: string): boolean {
    return this.#matchedItems.indexOf(item) !== -1;
  }
}
