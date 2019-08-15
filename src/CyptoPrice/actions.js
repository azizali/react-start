import { SET_COINS, SET_COINS_LOADING } from '../_main/actionTypes';

export function setCoins(data) {
  return {
    type: SET_COINS,
    payload: data,
  };
}

function setLoading(isLoading) {
  return {
    type: SET_COINS_LOADING,
    payload: isLoading,
  };
}

export function getCoinList() {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetch('https://api.coinpaprika.com/v1/coins')
      .then((res) => res.json())
      .then((json) => {
        dispatch(setCoins(json));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        // console.log(err);
      });
  };
}
