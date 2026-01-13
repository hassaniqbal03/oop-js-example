class Counter {
  static count = 0;

  constructor() {
    Counter.count++;
  }

  static showCount() {
    console.log("Total objects:", Counter.count);
  }
}

new Counter();
// new Counter();
Counter.showCount();
