import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  CLEAR_POSTS,
  CLEAR_ERRORS,
  DELETE_POST
} from "./types";
import { createMessage } from "./messages";

//add post

export const addPost = (content, token) => dispatch => {
  // dispatch(clearErrors());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const body = JSON.stringify({ content });
  axios
    .post("http://localhost:8000/api/posts/create/", body, config)
    .then(res => {
      dispatch(createMessage({ postSucesso: "Post criado com sucesso!" }));
      dispatch({
        type: ADD_POST,
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

//Get post

export const getPosts = () => dispatch => {
  dispatch({ type: POST_LOADING });
  axios
    .get("http://localhost:8000/api/posts/")
    .then(res => {
      dispatch({
        type: GET_POSTS,
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

//Get post

export const getPost = id => dispatch => {
  axios
    .get(`http://localhost:8000/api/posts/${id}/`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};

//delete Post

export const deletePost = (id, token) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .delete(`http://localhost:8000/api/posts/${id}/delete/`, config)
    .then(res => {
      dispatch(createMessage({ deletePost: "Post deletado com sucesso!" }));
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => {
      console.log(err);
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response
      // });
    });
};

//Add Likes
export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//unlike Posts
export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//add Comment

// export const addComment = (postId, newComment) => dispatch => {
//   dispatch(clearErrors());
//   axios
//     .post(`/api/posts/comment/${postId}`, newComment)
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

//Delete Comment

export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set Loading state

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

//clear errorrs

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//clear posts

export const clearPosts = () => {
  return {
    type: CLEAR_POSTS
  };
};
