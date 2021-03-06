import axios from "axios";
import { returnErrors, createMessage } from "./messages";
import { clearCurrentProfile, clearAllProfiles } from "./profile";
import { clearPosts } from "./Post";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:8000/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS
      });
    });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://localhost:8000/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,

        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// REGISTER USER
export const register = ({
  username,
  password,
  email,
  first_name,
  last_name
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({
    username,
    email,
    password,
    first_name,
    last_name
  });

  axios
    .post("http://localhost:8000/api/auth/register", body, config)
    .then(res => {
      dispatch(
        createMessage({
          registerSuccess: `Bem vindo ao Murucututu.com.br ${
            res.data.user.first_name
          } ${res.data.user.last_name}`
        })
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  dispatch(clearCurrentProfile());
  dispatch(clearAllProfiles());
  dispatch(clearPosts());
  axios
    .post("http://localhost:8000/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
