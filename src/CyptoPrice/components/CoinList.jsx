import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SIGNUP_ROUTE } from '../../_main/routeConstants';

import Loading from '../../Loading';
import { getCoinList } from '../actions';

function CoinList({ getList, list, isLoading }) {
  useEffect(() => {
    getList();
  }, [getList]);

  const renderList = () => (
    <ul>
      {list.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  );

  return (
    <div>
      <h2>Coin List</h2>
      <Link to={SIGNUP_ROUTE}>Go to Coin List Page</Link>
      { isLoading && <Loading />}
      { !isLoading && list.length > 0 && renderList()}
      {/* <pre>{JSON.stringify(list, null, 4)}</pre> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.coins.list.data,
  isLoading: state.coins.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getCoinList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
