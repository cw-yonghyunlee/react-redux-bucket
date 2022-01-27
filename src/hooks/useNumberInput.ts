import React, { useCallback, useState } from 'react';

interface UseNumberInputType {
  value: number,
  plus: () => void,
  minus: () => void,
  setValue: (v: number) => void,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
}

export default function useNumberInput(initialValue = 0): UseNumberInputType {
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

  return {
    value,
    plus,
    minus,
    setValue,
    onChange,
    onBlur,
  };
}
