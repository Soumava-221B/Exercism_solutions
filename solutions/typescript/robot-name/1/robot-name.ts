export class Robot {
  private static usedNames = new Set<string>()
  private _name = ''

  private static generateName(): string {
    const alphabet_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newName = ''
    do {
      const letters =
        alphabet_list[Math.floor(Math.random() * 26)] +
        alphabet_list[Math.floor(Math.random() * 26)]
      const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      newName = letters + numbers
    } while (Robot.usedNames.has(newName))

    Robot.usedNames.add(newName)
    return newName
  }

  public get name(): string {
    if (!this._name) {
      this._name = Robot.generateName()
    }
    return this._name
  }

  public resetName(): void {
    this._name = Robot.generateName()
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }
}