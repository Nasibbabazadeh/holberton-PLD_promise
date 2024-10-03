export default function fetchData() {
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
