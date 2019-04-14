import {
  GET_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT,
  CLEAR_HOTELS,
  DELETE_PRODUCT,
  PRODUCT_LOADING,
  CLEAR_PRODUCTS
} from "../actions/types";

const initialState = {
  product: null,
  products: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };

    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        isLoading: false
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: null,
        product: null,
        isLoading: false
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    default:
      return state;
  }
}
