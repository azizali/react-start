// value, update
// value, setValue, handle

import React, { useState } from 'react';

export default function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValue];
}
