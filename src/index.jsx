import React from 'react';
import { render } from 'react-dom';
import SignupPage from './Signup/components/SignupPage';

function App() {
  return (
    <div>
      App Component
      <SignupPage />
    </div>
  );
}

render(<App />, document.getElementById('app'));
