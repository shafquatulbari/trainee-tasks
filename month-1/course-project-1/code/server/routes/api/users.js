const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); //import the check and validationResult functions from express-validator to validate the data
const gravatar = require("gravatar"); //import the gravatar package to get the user's gravatar
const bcrypt = require("bcryptjs"); //import the bcryptjs package to encrypt the user's password
const config = require("config"); //import the config package to get the jwtSecret
const User = require("../../models/User"); //import the User model
const jwt = require("jsonwebtoken"); //import the jsonwebtoken package

//@route POST api/users
//@desc Register user
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(), //validate the name to not be empty
    check("email", "Please include a valid email").isEmail(), //validate the email to be in the correct format
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }), //validate the password to be at least 6 characters long
  ],
  async (req, res) => {
    const errors = validationResult(req); //check if there are any errors in the request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //return the errors if there are any
    }

    const { name, email, password } = req.body; //destructure the name, email, and password from the request body

    try {
      let user;
      user = await User.findOne({
        email,
      });
      // See if user exists
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm", //default
      });

      //create instance of User
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt password using bcrypt
      const salt = await bcrypt.genSalt(10); //generate a salt

      user.password = await bcrypt.hash(password, salt); //encrypt the password

      await user.save(); //save the user to the database

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
