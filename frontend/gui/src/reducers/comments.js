import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT,
  GET_COMMENTS
} from "../actions/types";

const initialState = {
  comment: {},
  comments: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };
    // case POST_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
        isLoading: false
      };
    // case CLEAR_POSTS:
    //   return {
    //     ...state,
    //     posts: null,
    //     post: null,
    //     isLoading: false
    //   };
    default:
      return state;
  }
}
