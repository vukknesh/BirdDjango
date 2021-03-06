import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/common/PrivateRoute";

import { IntlProvider } from "react-intl";
import messages from "./messages";

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
import AddHotel from "./components/Hotels/AddHotel";
import EditHotelPics from "./components/Hotels/EditHotelPics";

import EditProductPics from "./components/marketplace/EditProductPics";
import EditProduct from "./components/marketplace/EditProduct";
import AddProduct from "./components/marketplace/AddProduct";
import ProdutoProfile from "./components/marketplace/ProdutoProfile";
import MeusProdutos from "./components/MyMessages/MeusProdutos";

import Enter from "./components/layout/Enter/Enter";
import EditProfile from "./components/Profile/EditProfile";
import EditProfilePic from "./components/Profile/EditProfilePic";
import Profiles from "./components/Profile/Profiles";
import MyMessages from "./components/MyMessages/MyMessages";
import MyComments from "./components/MyMessages/MyComments";
import MyAccomodations from "./components/MyMessages/MyAccomodations";
import HotelPersonalProfile from "./components/Hotels/HotelPersonalProfile";
import EditHotel from "./components/Hotels/EditHotel";
import MarketPlace from "./components/marketplace/MarketPlace";
import ItemInfo from "./components/marketplace/ItemInfo";
import MapContainer from "./components/Maps/MapContainer";

import Post from "./components/Post/Post";

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
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
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
                  <Route exact path="/gmaps" component={MapContainer} />
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
                    <PrivateRoute
                      exact
                      path="/edit-hotel-pics"
                      component={EditHotelPics}
                    />
                    <PrivateRoute
                      exact
                      path="/add-hotel"
                      component={AddHotel}
                    />
                    <PrivateRoute
                      exact
                      path="/add-product"
                      component={AddProduct}
                    />
                    <PrivateRoute
                      exact
                      path="/edit-product"
                      component={EditProduct}
                    />
                    <PrivateRoute
                      exact
                      path="/edit-product-pics"
                      component={EditProductPics}
                    />
                    <PrivateRoute
                      exact
                      path="/edit-hotel"
                      component={EditHotel}
                    />
                    <PrivateRoute exact path="/hotels" component={FindHotels} />
                    <PrivateRoute exact path="/guide" component={Guide} />
                    {/* <PrivateRoute
                      exact
                      path="/marketplace"
                      component={MarketPlace}
                    /> */}
                  </Switch>{" "}
                  {/* <Switch>
                <PrivateRoute exact path="/feed" component={Post} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post1} />
              </Switch> */}
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path="/marketplace" component={MarketPlace} />
                  <Route exact path="/item-info/:id/" component={ItemInfo} />
                  <Route
                    exact
                    path="/hotelByHandle/:id/"
                    component={HotelPersonalProfile}
                  />
                  <Route
                    exact
                    path="/productByHandle/:id/"
                    component={ProdutoProfile}
                  />
                  <Route exact path="/my-messages" component={MyMessages} />
                  <Route exact path="/my-comments" component={MyComments} />
                  <Route
                    exact
                    path="/my-accomodations"
                    component={MyAccomodations}
                  />
                  <Route exact path="/my-products" component={MeusProdutos} />
                  <Route
                    exact
                    path="/profilebyhandle/:id/"
                    component={Profiles}
                  />
                  <Route exact path="/postByHandle/:id/" component={Post} />
                  <Footer />
                </div>
              </div>
            </Router>
          </Fragment>
        </AlertProvider>
      </IntlProvider>
    );
  }
}
const mapStateToProps = state => ({
  lang: state.locale.lang
});
export default connect(mapStateToProps)(App);
