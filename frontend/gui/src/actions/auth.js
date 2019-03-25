import axios from "axios";
import { returnErrors } from "./messages";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "./types";

// check token and load user
export const loadUser = id => (dispatch, getState) => {
  // user loading

  //get token from state
  // const token = getState().auth.token;

  // //headers
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // };

  // //if token, add to headers config
  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }

  axios
    .get(`http://localhost:8000/userprofile/profile/${id}`)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//LOGIN USER
export const login = (username, password) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //request body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://localhost:8000/userprofile/authenticate/", body, config)
    .then(res => {
      dispatch(loadUser(res.data.id));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//register USER
export const registerUser = newUser => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //request body
  const body = JSON.stringify(newUser);

  axios
    .post("http://localhost:8000/userprofile/profile/", body, config)
    .then(res => {
      dispatch(loadUser(res.data.id));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//LOGOUT USER

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};
