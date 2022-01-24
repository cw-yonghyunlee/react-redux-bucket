import React from 'react';
import useInput from '@hooks/useInput';

interface NumberInputProps {
  initialValue?: number;
}

function NumberInput(props: NumberInputProps): JSX.Element {
  const { initialValue = 0 } = props;
  const [ value, onChange, onBlur ] = useInput(initialValue.toString());

  return (
    <input className="number" type="number" onChange={onChange} onBlur={onBlur} value={value} />
  )
}

export default NumberInput;
