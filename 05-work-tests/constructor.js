class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
    };
  }
}

module.exports = {
  Person,
};
