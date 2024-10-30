import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          exact
          path="/register"
          element={
            <section className="container">
              <Register />
            </section>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <section className="container">
              <Login />
            </section>
          }
        />
      </Routes>
    </Fragment>
  </Router>
);

export default App;
