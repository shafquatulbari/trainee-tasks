import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // Your useEffect function should have an empty dependency array, so it only runs once when the component mounts.

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route
              exact
              path="/alert"
              element={
                <section className="container">
                  <Alert />
                </section>
              }
            />
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
            <Route
              exact
              path="/profiles"
              element={
                <section className="container">
                  <Profiles />
                </section>
              }
            />
            <Route
              exact
              path="/profile/:id"
              element={
                <section className="container">
                  <Profile />
                </section>
              }
            />
            <PrivateRoute
              exact
              path="/dashboard"
              element={
                <section className="container">
                  <Dashboard />
                </section>
              }
            />
            <PrivateRoute
              exact
              path="/create-profile"
              element={
                <section className="container">
                  <CreateProfile />
                </section>
              }
            />
            <PrivateRoute
              exact
              path="/edit-profile"
              element={
                <section className="container">
                  <EditProfile />
                </section>
              }
            />
            <PrivateRoute
              exact
              path="/add-experience"
              element={
                <section className="container">
                  <AddExperience />
                </section>
              }
            />
            <PrivateRoute
              exact
              path="/add-education"
              element={
                <section className="container">
                  <AddEducation />
                </section>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
