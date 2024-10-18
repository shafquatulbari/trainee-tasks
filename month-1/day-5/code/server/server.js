const express = require("express");
const connectDB = require("./config/db"); // import the connectDB function from the db.js file

const app = express();

// Connect Database
connectDB(); // call the connectDB function to connect to the database

// Init Middleware
app.use(express.json({ extended: false })); //initialize middleware to accept JSON data

app.get("/", (req, res) => {
  res.send("API Running"); //send data to the client/browser
});

//Define Routes so we can access the routes from the routes folder
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts")); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
