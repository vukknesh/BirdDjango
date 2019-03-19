import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  auth: auth,
  errors: errors,
  messages: messages
});
