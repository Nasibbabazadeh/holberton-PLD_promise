export default function fetchData() {
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
