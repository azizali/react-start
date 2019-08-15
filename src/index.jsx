import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import {
  HOME_ROUTE, COINLIST_ROUTE, SIGNUP_ROUTE, PRODUCT_ROUTE,
} from './_main/routeConstants';
import ErrorFallback from './ErrorFallback';
import SignupPage from './Signup';
import CoinList from './CyptoPrice';
import Home from './Home';
import Products from './Products';
import store from './_main/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorFallback>
          <Switch>
            <Redirect path="/login" to={SIGNUP_ROUTE} />
            <Route strict exact path={HOME_ROUTE} component={Home} />
            <Route strict exact path={SIGNUP_ROUTE} component={SignupPage} />
            <Route path={COINLIST_ROUTE} component={CoinList} />
            <Route path={PRODUCT_ROUTE} component={Products} />
            <Route component={Home} />
          </Switch>
        </ErrorFallback>
        {/* <SignupPage /> */}
        {/* <CoinList /> */}
      </BrowserRouter>
    </Provider>
  );
}

render(<App />, document.getElementById('app'));
