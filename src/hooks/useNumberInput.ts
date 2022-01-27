import React, { useCallback, useState } from 'react';

export default function useNumberInput(initialValue = 0): [
  number,
  () => void,
  () => void,
  React.ChangeEventHandler<HTMLInputElement>,
  React.FocusEventHandler<HTMLInputElement>,
] {
  const [value, setValue] = useState<number>(initialValue);

  const plus = useCallback((): void => {
    setValue(value + 1);
  }, [value]);

  const minus = useCallback((): void => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  }, [value]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const numberValue = parseInt(e.target.value, 10);
    if (numberValue < 0) {
      setValue(0);
      return;
    }
    setValue(numberValue);
  }, []);

  const onBlur: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.target.value !== '') {
      return;
    }
    setValue(0);
  }, []);

  return [
    value,
    plus,
    minus,
    onChange,
    onBlur,
  ];
}
