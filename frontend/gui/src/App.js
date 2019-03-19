import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/common/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import store from "./store";
import "./App.css";

//components
import NotFound from "./components/not-found/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import MyPage from "./components/MyPage/MyPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Guide from "./components/Guide/Guide";

//check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser);
    //clear current profile
    store.dispatch(clearCurrentProfile);
    //redirect to login
    window.location.href = "/landing";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              {/* <Route exact path="/profile/:handle" component={Profile} /> */}
              <Switch>
                <PrivateRoute exact path="/my-page" component={MyPage} />
              </Switch>
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute exact path="/feed" component={Post} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post1} />
              </Switch> */}
              <Route exact path="/not-found" component={NotFound} />

              <Route exact path="/guide" component={Guide} />
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
