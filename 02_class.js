class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const u1 = new User("Ahmed");
u1.greet();
