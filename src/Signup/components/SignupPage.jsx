import React from 'react';
import SignupForm from './SignupForm';

export default function SignupPage() {
  const getFormData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Signup Page</h1>
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
