function fetchData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.7;
    if (success) {
      callback(null, "Data fetched successfully");
    } else {
      callback("Error fetching data", null);
    }
  }, 1000);
}

// Example usage with error handling
fetchData((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

