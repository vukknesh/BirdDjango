import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {
  GET_PROFILE,
  USER_LOADING,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CLEAR_PROFILES,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILES
} from "./types";

//get current profile

export const getCurrentProfile = id => (dispatch, getState) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //if token, add to headers config
  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }

  dispatch(setProfileLoading);
  axios
    .get(`http://localhost:8000/api/profiles/${id}/`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// myprofile
export const getMyProfile = id => (dispatch, getState) => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //if token, add to headers config
  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }

  dispatch(setProfileLoading);
  axios
    .get(`http://localhost:8000/api/profiles/${id}/`)
    .then(res =>
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// //get current profile by handle

export const getProfileByHandle = id => dispatch => {
  dispatch(setProfileLoading);
  axios
    .get(`http://localhost:8000/api/profiles/${id}/`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
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

// Create profile
export const updateProfile = (profileData, id, token, history) => dispatch => {
  dispatch(showLoading());
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .put(`http://localhost:8000/api/profiles/${id}/`, profileData, config)

    .then(res => history.push("/my-page"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  dispatch(hideLoading());
};

// Profile Loading

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear Loading

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const clearAllProfiles = () => {
  return {
    type: CLEAR_PROFILES
  };
};

// //add experience

// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post("/api/profile/experience", expData)
//     .then(res => history.push("/dashboard"))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// //Delete experience

// export const deleteExperience = id => dispatch => {
//   axios
//     .delete(`/api/profile/experience/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
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

// //Delete Education

// export const deleteEducation = id => dispatch => {
//   axios
//     .delete(`/api/profile/education/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
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

// //add education

// export const addEducation = (eduData, history) => dispatch => {
//   axios
//     .post("/api/profile/education", eduData)
//     .then(res => history.push("/dashboard"))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// GET PROFILES
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("http://localhost:8000/api/profiles/")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

//get profiles filter by city

export const getProfilesByCity = city => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`http://localhost:8000/api/profiles/?city=${city}`)
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// //GET find guides by name
// export const findGuides = user => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get("/api/profile/all/name", user)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: {}
//       })
//     );
// };

// //Delete account
// export const deleteAccount = () => dispatch => {
//   if (window.confirm("Are you sure? This can not be undune!")) {
//     axios
//       .delete("/api/profile")
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };
