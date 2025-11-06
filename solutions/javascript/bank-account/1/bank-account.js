export class BankAccount {
  constructor() {
    this.isOpen = false;
    this._balance = 0; 
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
      this._balance = 0;
    } else {
      throw new ValueError();
    }
  }

  deposit(value) { 
    if (value >= 0 && this.isOpen) {
      this._balance += value;
    } else {
      throw new ValueError();
    }
  }

  withdraw(value) { 
    if (value >= 0 && this.isOpen && this._balance >= value) {
      this._balance -= value;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.isOpen) {
      return this._balance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
