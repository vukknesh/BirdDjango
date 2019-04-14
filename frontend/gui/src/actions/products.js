import axios from "axios";
import { getProfileByHandle } from "./profile";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT,
  CLEAR_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCT_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS
} from "./types";
import { createMessage } from "./messages";

//add post

export const addProduct = (productData, token, history) => dispatch => {
  // dispatch(clearErrors());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("http://localhost:8000/api/products/create/", productData, config)
    .then(res => {
      dispatch(createMessage({ hotelAdd: "Produto adicionado com sucesso!" }));
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .then(res => history.push("/my-page"))

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get post

export const getProducts = () => dispatch => {
  dispatch({ type: PRODUCT_LOADING });
  axios
    .get("http://localhost:8000/api/products/")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.results
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Get post

export const getProduct = id => dispatch => {
  dispatch(setProductLoading());
  axios
    .get(`http://localhost:8000/api/products/${id}/`)
    .then(res => {
      dispatch(getProfileByHandle(res.data.user.id));

      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PRODUCT,
        payload: null
      })
    );
};
export const deleteProduct = (id, token, history) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .delete(`http://localhost:8000/api/products/${id}/delete/`, config)

    .then(res => {
      history.push("/my-page");
      dispatch(
        createMessage({ productDelete: "Produto removido com sucesso!" })
      );
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(
      err => console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    );
};
// export const getHotelsByCity = city => dispatch => {
//   dispatch(setHotelLoading());
//   axios
//     .get(`http://localhost:8000/api/hotels/?city=${city}`)
//     .then(res =>
//       dispatch({
//         type: GET_HOTELS,
//         payload: res.data.results
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_HOTELS,
//         payload: null
//       })
//     );
// };

// update hotel
export const updateHotel = (profileData, id, token, history) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .put(`http://localhost:8000/api/hotels/${id}/edit/`, profileData, config)
    .then(res => history.push(`/hotelByHandle/${id}/`))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete Post

// export const deletePost = id => dispatch => {
//   axios
//     .delete(`/api/posts/${id}`)
//     .then(res =>
//       dispatch({
//         type: DELETE_POST,
//         payload: id
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

//Add Likes
// export const addLike = id => dispatch => {
//   axios
//     .post(`/api/posts/like/${id}`)
//     .then(res => dispatch(getPosts()))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
//unlike Posts
// export const removeLike = id => dispatch => {
//   axios
//     .post(`/api/posts/unlike/${id}`)
//     .then(res => dispatch(getPosts()))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

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

// export const deleteComment = (postId, commentId) => dispatch => {
//   axios
//     .delete(`/api/posts/comment/${postId}/${commentId}`)
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

//set Loading state

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};

//clear errorrs

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//clear posts

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  };
};
