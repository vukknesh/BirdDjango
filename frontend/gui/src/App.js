import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/common/PrivateRoute";
import store from "./store";
// import { loadUser } from "./actions/auth";
//components
import NotFound from "./components/not-found/NotFound";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Aboutus from "./components/layout/aboutpages/Aboutus";
import Contactus from "./components/layout/aboutpages/Contactus";
import MyPage from "./components/MyPage/MyPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Guide from "./components/Guide/Guide";
import FindHotels from "./components/Hotels/FindHotels";

import Enter from "./components/layout/Enter/Enter";
import EditProfile from "./components/Profile/EditProfile";
import EditProfilePic from "./components/Profile/EditProfilePic";
import Profiles from "./components/Profile/Profiles";
import MyMessages from "./components/MyMessages/MyMessages";
import MyComments from "./components/MyMessages/MyComments";
import HotelPersonalProfile from "./components/Hotels/HotelPersonalProfile";

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
                <Topbar />
                <Alerts />

                <Route exact path="/" component={Landing} />
                <div>
                  <Route exact path="/enter" component={Enter} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/about" component={Aboutus} />
                  <Route exact path="/contact" component={Contactus} />
                  <Switch>
                    <PrivateRoute exact path="/my-page" component={MyPage} />
                  </Switch>{" "}
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/edit-profile"
                      component={EditProfile}
                    />
                    <PrivateRoute
                      exact
                      path="/edit-profile-pic"
                      component={EditProfilePic}
                    />
                  </Switch>{" "}
                  {/* <Switch>
                <PrivateRoute exact path="/feed" component={Post} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post1} />
              </Switch> */}
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path="/guide" component={Guide} />
                  <Route exact path="/hotels" component={FindHotels} />
                  <Route
                    exact
                    path="/hotelByHandle/:id/"
                    component={HotelPersonalProfile}
                  />
                  <Route exact path="/my-messages" component={MyMessages} />
                  <Route exact path="/my-comments" component={MyComments} />
                  <Route
                    exact
                    path="/profilebyhandle/:id/"
                    component={Profiles}
                  />
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
