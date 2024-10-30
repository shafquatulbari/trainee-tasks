import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password } = formData; //destructuring to use the variables directly

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); //setting the form data
  const onSubmit = async (e) => {
    e.preventDefault(); //preventing the default action
    console.log("SUCCESS");
    // } else {
    //   const newUser = {
    //     name,
    //     email,
    //     password,
    //   };
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json", //this is to tell the server that we are sending json data
    //       },
    //       withCredentials: true,
    //     };
    //     const body = JSON.stringify(newUser); // this is the data that we are sending
    //     const res = await axios.post(
    //       "http://localhost:3001/api/users",
    //       body,
    //       config
    //     );
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err.response.data);
    //   }
    // }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
