import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import profiles from "./profiles";
import posts from "./posts";
import hotels from "./hotels";
import products from "./products";

export default combineReducers({
  auth,
  profiles,
  posts,
  hotels,
  messages,
  products,
  loadingBar: loadingBarReducer,
  errors
});
