import './style.css';
import React, { useState, useEffect } from 'react';
import useInput from '../../_main/hooks/useInput';

export default function SignupForm({ sendDataUp }) {
  const [firstName, setFirstName] = useInput('Starbucks');
  const [lastName, setLastName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

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
          onChange={setFirstName}
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
          onChange={setLastName}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={setEmail}
        />
      </label>
      <label htmlFor="password">
        password:
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={setPassword}
        />
      </label>
    </>
  );
}
