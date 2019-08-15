import { SET_COINS, CLEAR_COINS, SET_COINS_LOADING } from '../_main/actionTypes';

const initialState = {
  list: {
    data: [],
    isLoading: true,
    error: '',
  },
  single: {
    data: {},
    isLoading: true,
    error: '',
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_COINS:
      return {
        ...state,
        list: {
          data: payload,
          isLoading: false,
          error: '',
        },
      };
    case CLEAR_COINS:
      return {
        ...state,
        list: {
          ...initialState.list,
        },
      };
    case SET_COINS_LOADING:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: payload,
        },
      };
    default:
      return state;
  }
}
