function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.7;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

// Example usage with Promise error handling
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
