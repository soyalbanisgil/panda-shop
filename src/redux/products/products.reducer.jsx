import { ProductActionTypes } from './products.types';

const INITIAL_STATE = {
  productDetail: {},
  items: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return {
        ...state,
        productDetail: action.payload,
      };
    case ProductActionTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
