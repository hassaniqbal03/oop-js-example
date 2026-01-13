class Car {
  constructor(model) {
    this.model = model;
  }

  show() {
    console.log("Car model:", this.model);
  }
}

const c1 = new Car("BMW");
c1.show();
