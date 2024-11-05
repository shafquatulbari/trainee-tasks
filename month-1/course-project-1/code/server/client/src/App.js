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
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/alert"
              element={
                <section className="container">
                  <Alert />
                </section>
              }
            />
            <Route
              path="/register"
              element={
                <section className="container">
                  <Register />
                </section>
              }
            />
            <Route
              path="/login"
              element={
                <section className="container">
                  <Login />
                </section>
              }
            />
            <Route
              path="/profiles"
              element={
                <section className="container">
                  <Profiles />
                </section>
              }
            />
            <Route
              path="/profile/:id"
              element={
                <section className="container">
                  <Profile />
                </section>
              }
            />
            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/dashboard"
                element={
                  <section className="container">
                    <Dashboard />
                  </section>
                }
              />
              <Route
                path="/create-profile"
                element={
                  <section className="container">
                    <CreateProfile />
                  </section>
                }
              />
              <Route
                path="/edit-profile"
                element={
                  <section className="container">
                    <EditProfile />
                  </section>
                }
              />
              <Route
                path="/add-experience"
                element={
                  <section className="container">
                    <AddExperience />
                  </section>
                }
              />
              <Route
                path="/add-education"
                element={
                  <section className="container">
                    <AddEducation />
                  </section>
                }
              />
              <Route
                path="/posts"
                element={
                  <section className="container">
                    <Posts />
                  </section>
                }
              />
              <Route
                path="/posts/:id"
                element={
                  <section className="container">
                    <Post />
                  </section>
                }
              />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
