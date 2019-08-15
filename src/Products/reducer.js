import { SET_PRODUCT, CLEAR_PRODUCTS } from '../_main/actionTypes';

const initialValue = {
  list: [],
};

export default (state = initialValue, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        list: payload,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
