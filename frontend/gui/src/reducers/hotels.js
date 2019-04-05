import {
  GET_HOTEL,
  GET_HOTELS,
  ADD_HOTEL,
  CLEAR_HOTELS,
  DELETE_HOTEL,
  HOTEL_LOADING
} from "../actions/types";

const initialState = {
  hotel: null,
  hotels: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
        hotels: [action.payload, ...state.hotels]
      };
    case HOTEL_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case HOTEL_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isLoading: false
      };
    case GET_HOTEL:
      return {
        ...state,
        hotel: action.payload,
        isLoading: false
      };
    case CLEAR_HOTELS:
      return {
        ...state,
        hotels: null,
        hotel: null,
        isLoading: false
      };
    default:
      return state;
  }
}
