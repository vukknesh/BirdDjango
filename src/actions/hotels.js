import axios from "axios";
import { getProfileByHandle } from "./profile";
import {
  GET_HOTEL,
  GET_HOTELS,
  ADD_HOTEL,
  CLEAR_HOTELS,
  DELETE_HOTEL,
  HOTEL_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS
} from "./types";
import { createMessage } from "./messages";

//add post

export const addHotel = (hotelData, token, history) => dispatch => {
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
    .post("http://localhost:8000/api/hotels/create/", hotelData, config)
    .then(res => {
      dispatch(createMessage({ hotelAdd: "Acomodação criada com sucesso!" }));
      dispatch({
        type: ADD_HOTEL,
        payload: res.data
      });
    })
    .then(res => history.push("/my-accomodations"))

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get post

export const getHotels = () => dispatch => {
  dispatch({ type: HOTEL_LOADING });
  axios
    .get("http://localhost:8000/api/hotels/")
    .then(res =>
      dispatch({
        type: GET_HOTELS,
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

export const getHotel = id => dispatch => {
  dispatch(setHotelLoading());
  axios
    .get(`http://localhost:8000/api/hotels/${id}/`)
    .then(res => {
      dispatch(getProfileByHandle(res.data.user.id));

      dispatch({
        type: GET_HOTEL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_HOTEL,
        payload: null
      })
    );
};
export const getHotelsByCity = city => dispatch => {
  dispatch(setHotelLoading());
  axios
    .get(`http://localhost:8000/api/hotels/?city=${city}`)
    .then(res =>
      dispatch({
        type: GET_HOTELS,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: GET_HOTELS,
        payload: null
      })
    );
};

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

// delete hotel

export const deleteHotel = (id, token, history) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .delete(`http://localhost:8000/api/hotels/${id}/delete/`, config)

    .then(res => {
      history.push("/my-accomodations");
      dispatch(
        createMessage({ hotelDelete: "Acomodação removida com sucesso!" })
      );
      dispatch({
        type: DELETE_HOTEL,
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

export const setHotelLoading = () => {
  return {
    type: HOTEL_LOADING
  };
};

//clear errorrs

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//clear posts

export const clearHotels = () => {
  return {
    type: CLEAR_HOTELS
  };
};
