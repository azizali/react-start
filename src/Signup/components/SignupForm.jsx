import './style.css';
import React, { useState, useEffect } from 'react';

export default function SignupForm({ sendDataUp }) {
  const [firstName, setFirstName] = useState('Starbucks');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isFirstNameValid = firstName.length > 5;
    const isLastNameValid = lastName.length > 5;
    const isEmailValid = email.length > 5;
    const isPasswordValid = password.length > 5;

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
      sendDataUp({
        firstName,
        lastName,
        email,
        password,
      });
    }
  }, [firstName, lastName, email, password, sendDataUp]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    const { value } = e.target;

    setLastName(value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      {firstName}
      {lastName}
      {email}
      {password}
      <hr />
      <label htmlFor="first-name">
        First Name:
        <input
          type="text"
          name="first-name"
          id="first-name"
          value={firstName}
          onChange={handleFirstName}
        />
        { firstName.length < 5 && <small>Field is invalid</small>}
      </label>
      <label htmlFor="last-name">
        Last Name:
        <input
          type="text"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={handleLastName}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
      </label>
      <label htmlFor="password">
        password:
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
    </>
  );
}
