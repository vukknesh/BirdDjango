import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import profiles from "./profiles";

export default combineReducers({
  auth: auth,
  errors: errors,
  messages: messages,
  profiles: profiles
});
