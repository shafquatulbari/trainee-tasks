const jwt = require("jsonwebtoken");
const config = require("config");

//Middleware function
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token then no authorization
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token if there is one
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //Assign the user to the request object
    req.user = decoded.user;
    next(); //callback that calls the next middleware function
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
