// Object = properties + methods

const user = {
  name: "Hassan",
  role: "Developer",
  login() {
    console.log(this.name + " logged in");
  }
};

user.login();
