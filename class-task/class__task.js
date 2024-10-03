// #task1:
class User {
  constructor(name, age, city) {
    this._name = name;
    this._age = age;
    this._city = city;
  }
}

const user1 = new User('John Doe', 23, 'New York');

// #task2:

class User {
  constructor(name, age, city) {
    this._name = name;
    this._age = age;
    this._city = city;
  }

  greet() {
    return `Hello, my name is ${this._name}, I am ${_age} years old, and I live in
    ${this._city}.`;
  }
}
