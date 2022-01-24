import React, { useState } from 'react';

export default function useNumberInput(initialValue = 0): [
  number,
  () => void,
  () => void,
  React.ChangeEventHandler<HTMLInputElement>,
  React.FocusEventHandler<HTMLInputElement>,
] {
  const [ value, setValue ] = useState<number>(initialValue);

  const plus = (): void => {
    setValue(value + 1);
  }

  const minus = (): void => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const numberValue = parseInt(e.target.value);
    if (numberValue < 0) {
      setValue(0);
      return;
    }
    setValue(numberValue);
  }

  const onBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      return;
    }
    setValue(0);
  }

  return [
    value,
    plus,
    minus,
    onChange,
    onBlur,
  ];
}