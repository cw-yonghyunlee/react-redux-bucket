import React from 'react';

interface NumberInputProps {
  value: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function NumberInput(props: NumberInputProps): JSX.Element {
  return (
    <input className="number" type="number" {...props} />
  )
}

export default NumberInput;
