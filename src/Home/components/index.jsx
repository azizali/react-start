import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCT_ROUTE } from '../../_main/routeConstants';
import ColorPicker from '../../ColorPicker';
import { setUserLogin } from '../actions';

function Home({
  isLoggedIn, userName, logout, login,
}) {
  return (
    <>
      <h1>Welcome Back!</h1>
      {' '}
      {isLoggedIn && userName}
      <button type="button" onClick={logout}>Logout</button>
      <button type="button" onClick={login}>Login</button>
      <ColorPicker />
      <div>This is home</div>
      <Link to={PRODUCT_ROUTE}>Products</Link>
      <Link to={`${PRODUCT_ROUTE}/one`}>Products</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isUserLoggedIn,
  userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(setUserLogin(false));
  },
  login: () => {
    dispatch(setUserLogin(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
