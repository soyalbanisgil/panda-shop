import { ProductActionTypes } from './products.types';

export const addProduct = (productDetail) => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload: productDetail,
});

export const getItems = (items) => ({
  type: ProductActionTypes.GET_ITEMS,
  payload: items,
});
