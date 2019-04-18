import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import profiles from "./profiles";
import posts from "./posts";
import hotels from "./hotels";
import products from "./products";
import comments from "./comments";
import locale from "./locale";

export default combineReducers({
  auth,
  profiles,
  posts,
  hotels,
  messages,
  products,
  comments,
  locale,
  errors
});
