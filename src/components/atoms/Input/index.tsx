import React, { HTMLInputTypeAttribute } from 'react';

interface NumberInputProps {
  value: number;
  type?: HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function Input(props: NumberInputProps): JSX.Element {
  return (
    <input {...props} />
  );
}

export default Input;
