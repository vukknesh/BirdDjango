import { ADD_POST, GET_POSTS, POST_LOADING } from "../actions/types";

const initialState = {
  post: null,
  posts: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: action.payload
      };
    // case PROFILE_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case POST_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    // case CLEAR_CURRENT_PROFILE:
    //   return {
    //     ...state,
    //     profile: null
    //   };
    default:
      return state;
  }
}
