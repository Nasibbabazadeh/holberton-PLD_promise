// #task 1:
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
export default function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new User('John Doe', 30, 'New York'));
    }, 2000);
  });
}

//
//
// #task 2:
fetchData().then((data) => console.log(data.greet()));

//
//
//

// #BONUS TASK:
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new User('John Doe', 30, 'New York'));
    }, 1000);
  });
}

function fetchUserTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Task 1', 'Task 2', 'Task 3']);
    }, 1000);
  });
}

fetchData()
  .then((user) => {
    console.log(user.greet());
    return fetchUserTasks();
  })
  .then((tasks) => {
    console.log('User tasks:', tasks);
  })
  .catch((error) => {
    console.error(error);
  });
