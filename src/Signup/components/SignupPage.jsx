import React, { useState, useCallback } from 'react';
import SignupForm from './SignupForm';

export default function SignupPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getFormData = useCallback(() => {
    console.log('data');
  }, []);
  return (
    <div>
      <h1>Signup Page</h1>
      {isLoggedIn && 'Hi User'}
      <button
        type="button"
        onClick={() => { setIsLoggedIn(!isLoggedIn); }}
      >
        Toggle Login
      </button>
      <form>
        <SignupForm
          sendDataUp={getFormData}
        />
        <button type="submit">
        Signup
        </button>
      </form>
    </div>
  );
}
