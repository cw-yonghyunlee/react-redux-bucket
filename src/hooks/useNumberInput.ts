import React, { useCallback, useState } from 'react';

interface UseNumberInputType {
  value: number,
  plus: () => void,
  minus: () => void,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  setMaxValue: React.Dispatch<React.SetStateAction<number | undefined>>
  setMinValue: React.Dispatch<React.SetStateAction<number>>
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur: React.FocusEventHandler<HTMLInputElement>,
}

export default function useNumberInput(
  initialValue = 0,
  min = 0,
  max?: number,
): UseNumberInputType {
  const [value, setValue] = useState<number>(initialValue);
  const [maxValue, setMaxValue] = useState<number | undefined>(max);
  const [minValue, setMinValue] = useState<number>(min);

  const plus = useCallback((): void => {
    if (maxValue && value >= maxValue) {
      return;
    }
    setValue(value + 1);
  }, [value]);

  const minus = useCallback((): void => {
    if (value <= minValue) {
      return;
    }
    setValue(value - 1);
  }, [value]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const numberValue = parseInt(e.target.value, 10);
    if (numberValue < minValue) {
      setValue(minValue);
      return;
    }
    setValue(numberValue);
  }, []);

  const onBlur: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.target.value !== '') {
      return;
    }
    setValue(minValue);
  }, []);

  return {
    value,
    plus,
    minus,
    setValue,
    setMaxValue,
    setMinValue,
    onChange,
    onBlur,
  };
}
