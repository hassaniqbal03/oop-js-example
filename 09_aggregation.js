class Teacher {
  constructor(name) {
    this.name = name;
  }
}

class Department {
  constructor(teacher) {
    this.teacher = teacher;
  }

  showTeacher() {
    console.log(this.teacher.name);
  }
}

const t1 = new Teacher("Ali");
const dept = new Department(t1);
dept.showTeacher();
