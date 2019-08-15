import React, { useReducer } from 'react';

const initialValue = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  // TYPE: NAME OF THE COMMAND
  // {
  //   type: 'UPDATE_RED',
  //   payload:
  // }
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_RED':
      return {
        ...state,
        green: state.green + 5,
        red: payload,
      };
    case 'UPDATE_GREEN':
      return {
        ...state,
        green: payload,
      };
    case 'UPDATE_BLUE':
      return {
        ...state,
        blue: payload,
      };
    default:
      return state;
  }
};

export default function ColorPicker() {
  const [{ red, blue, green }, dispatch] = useReducer(reducer, initialValue);
  return (
    <div style={{
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }}
    >
      <label htmlFor="red">
        Red:
        {' '}
        {red}
        <input
          type="range"
          name="red"
          id="red"
          min="0"
          max="255"
          value={red}
          onChange={(e) => {
            dispatch({ type: 'UPDATE_RED', payload: e.target.value });
          }}
        />
      </label>
      <label htmlFor="green">
        Green:
        {' '}
        {green}
        <input
          type="range"
          name="green"
          id="green"
          min="0"
          max="255"
          value={green}
          onChange={(e) => {
            dispatch({ type: 'UPDATE_GREEN', payload: e.target.value });
          }}
        />
      </label>
      <label htmlFor="blue">
        Blue:
        {' '}
        {blue}
        <input
          type="range"
          name="blue"
          id="blue"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => {
            dispatch({ type: 'UPDATE_BLUE', payload: e.target.value });
          }}
        />
      </label>
    </div>
  );
}
