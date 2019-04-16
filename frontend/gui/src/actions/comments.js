import axios from "axios";

import {
  ADD_COMMENT,
  GET_COMMENT,
  GET_COMMENTS,
  DELETE_COMMENT,
  GET_ERRORS
} from "./types";

import { createMessage } from "./messages";

// ADD COMMENT

export const addComment = (
  content,
  type,
  slug,
  id,
  token,
  history
) => dispatch => {
  // dispatch(clearErrors());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  // const body = JSON.stringify({ content });
  history.push(`/hotelByHandle/${id}/`);
  axios
    .post(
      `http://localhost:8000/api/comments/create/?type=${type}&slug=${slug}`,
      content,
      config
    )
    .then(res => {
      dispatch(
        createMessage({ commentSucesso: "Comentario criado com sucesso!" })
      );
      dispatch({
        type: ADD_COMMENT,
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

//Get comments

export const getComments = () => dispatch => {
  axios
    .get("http://localhost:8000/api/comments/")
    .then(res => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Get comment

export const getComment = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/comments/${id}`)
    .then(res =>
      dispatch({
        type: GET_COMMENT,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
