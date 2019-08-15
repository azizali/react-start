import { SET_PRODUCT, CLEAR_PRODUCTS } from '../_main/actionTypes';

export function setProduct(data) {
  return { type: SET_PRODUCT, payload: data };
}

export function clearProducts() {
  return { type: CLEAR_PRODUCTS };
}
