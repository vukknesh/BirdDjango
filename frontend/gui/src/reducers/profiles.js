import {
  GET_PROFILES,
  PROFILE_LOADING,
  GET_PROFILE,
  CLEAR_PROFILES,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        loading: false,
        profiles: action.payload
      };
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: null
      };
    default:
      return state;
  }
}
