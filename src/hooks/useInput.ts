import React, { useState } from 'react';

export default function useInput(initialValue = ''): [ string, React.ChangeEventHandler<HTMLInputElement>, React.FocusEventHandler<HTMLInputElement> ] {
  const [ value, setValue ] = useState<string>(initialValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const onBlur: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      return;
    }
    setValue('0');
  }

  return [
    value,
    onChange,
    onBlur,
  ];
}