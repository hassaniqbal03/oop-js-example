class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
// Both 'a' and 'b' refer to the same instance