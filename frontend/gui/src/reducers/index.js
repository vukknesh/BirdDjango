import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import profiles from "./profiles";
import posts from "./posts";

export default combineReducers({
  auth,
  profiles,
  messages,
  posts,
  errors
});
