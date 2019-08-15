import { SET_LOGIN_STATUS } from '../_main/actionTypes';

const initialValue = {
  isUserLoggedIn: true,
  name: 'Starbucks',
};

export default (state = initialValue, { type, payload }) => {
  switch (type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: payload,
      };
    default:
      return state;
  }
};
