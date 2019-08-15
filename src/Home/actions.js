import { SET_LOGIN_STATUS } from '../_main/actionTypes';

export function setUserLogin(isLoggedIn) {
  return { type: SET_LOGIN_STATUS, payload: isLoggedIn };
}
