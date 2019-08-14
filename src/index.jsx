import React from 'react';
import { render } from 'react-dom';
import SignupPage from './Signup';
import CoinList from './CyptoPrice';

function App() {
  return (
    <div>
      {/* App Component */}
      <SignupPage />
      <CoinList />
    </div>
  );
}

render(<App />, document.getElementById('app'));
