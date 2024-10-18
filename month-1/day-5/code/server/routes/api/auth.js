const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const User = require("../../models/User");

//@route GET api/auth
//@desc Test route
//@access Public
//protected route with auth middleware
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // leave out the password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST api/auth
//@desc Authenticate user & get token
//@access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(), //validate the email to be in the correct format
    check("password", "Password is required").exists({ min: 6 }), //validate the password to be at least 6 characters long
  ],
  async (req, res) => {
    const errors = validationResult(req); //check if there are any errors in the request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //return the errors if there are any
    }

    const { email, password } = req.body; //destructure the name, email, and password from the request body

    try {
      let user;
      user = await User.findOne({
        email,
      });
      // See if user exists
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm", //default
      });

      //Match email and password
      const isMatch = await bcrypt.compare(password, user.password); //compare the password from the request to the password in the database
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //expires in 360000 seconds
        (err, token) => {
          //possible error and the token
          if (err) throw err;
          res.json({ token }); //send the token to the client/browser
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
