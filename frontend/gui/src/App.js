import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layout/Alerts";
// import PrivateRoute from "./components/common/PrivateRoute";
import store from "./store";
// import { loadUser } from "./actions/auth";
//components
import NotFound from "./components/not-found/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import MyPage from "./components/MyPage/MyPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Guide from "./components/Guide/Guide";

//ALERT OPTIONS

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "100px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Fragment>
            <Router>
              <div>
                <Navbar />
                <Alerts />

                <Route exact path="/" component={Landing} />
                <div>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/my-page" component={MyPage} />
                  {/* <Route exact path="/profile/:handle" component={Profile} /> */}
                  {/* <Switch>
              <PrivateRoute exact path="/my-page" component={MyPage} />
            </Switch> */}
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
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
