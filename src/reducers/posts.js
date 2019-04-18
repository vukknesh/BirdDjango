import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  CLEAR_POSTS,
  DELETE_POST,
  GET_POST
} from "../actions/types";

const initialState = {
  post: {},
  posts: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case POST_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        isLoading: false
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: null,
        post: null,
        isLoading: false
      };
    default:
      return state;
  }
}
