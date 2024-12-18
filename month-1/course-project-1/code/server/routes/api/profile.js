const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");
const c = require("config");

//@route GET api/profile/me
//@desc Get current users profile
//@access Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    ); //populate from user model, get name and avatar

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile); //return the profile if it exists
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST api/profile
//@desc Create or update user profile
//@access Private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim()); //split the skills by comma and remove any whitespace and map through them to return an array
    }
    //Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update the profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create the profile if it does not exist
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route GET api/profile
//@desc Get all profiles
//@access Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]); //populate from user model, get name and avatar
    res.json(profiles); //return the profiles
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET api/profile/user/:user_id
//@desc Get profile by user ID
//@access Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id, //get the user id from the request parameters
    }).populate("user", ["name", "avatar"]); //populate from user model, get name and avatar

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile); //return the profile
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route DELETE api/profile
//@desc Delete profile, user & posts
//@access Private
router.delete("/", auth, async (req, res) => {
  try {
    //Remove user posts
    await Post.deleteMany({ user: req.user.id });
    //Remove profile
    await Profile.findOneAndDelete({ user: req.user.id });
    //Remove user
    await User.findOneAndDelete({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route PUT api/profile/experience
//@desc  Add profile experience
//@access Private
router.put(
  /*"/experience"*/ "/experience",
  [
    check("title", "Title is required").not().isEmpty(),
    check("company", "Company is required").not().isEmpty(),
    check("from", "From date is required").not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //return the errors
    }

    const { title, company, location, from, to, current, description } =
      req.body;

    const newExp = {
      title, //same as title: title
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id }); //get the profile

      profile.experience.unshift(newExp); //add the new experience to the beginning of the array

      await profile.save(); //save the profile

      res.json(profile); //return the profile
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route DELETE api/profile/experience/:exp_id
//@desc  Delete experience from profile
//@access Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }); //get the profile

    //Get the index of the experience to remove
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1); //remove the experience

    await profile.save(); //save the profile

    res.json(profile); //return the profile
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/profile/education
// @desc Add profile education
// @access Private
router.put(
  "/education",
  [
    check("school", "School is required").not().isEmpty(),
    check("degree", "Degree is required").not().isEmpty(),
    check("fieldofstudy", "Field of study is required").not().isEmpty(),
    check("from", "From date is required").not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //return the errors
    }

    const { school, degree, fieldofstudy, from, to, current, description } =
      req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id }); //get the profile

      profile.education.unshift(newEdu); //add the new education to the beginning of the array

      await profile.save(); //save the profile

      res.json(profile); //return the profile
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route DELETE api/profile/education/:edu_id
//@desc  Delete education from profile
//@access Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }); //get the profile

    //Get the index of the education to remove
    const removeIndex = profile.education
      .map((item) => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1); //remove the education

    await profile.save(); //save the profile

    res.json(profile); //return the profile
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET api/profile/github/:username
//@desc  Get user repos from Github
//@access Public
router.get("/github/:username", (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?per_page=5&sort=created:asc&client_id=${c.get(
        "githubClientId"
      )}&client_secret=${c.get("githubSecret")}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: "No Github profile found" });
      }

      res.json(JSON.parse(body)); //return the repos
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
