import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import profiles from "./profiles";

export default combineReducers({
  auth,
  profiles,
  messages,
  errors
});
