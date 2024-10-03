function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        age: 30,
        city: 'New York',
      });
    }, 2000);
  });
}

// #TASK2:
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// #TASK3:
function fetchData() {
  return new Promise((resolve, rejected) => {
    if (!isDataAvailable) {
      rejected('Error occured while fetching');
    }
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        age: 30,
        city: 'New York',
      });
    }, 2000);
  });
}

fetchData().catch((error) => console.log(error));
