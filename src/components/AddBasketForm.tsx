import Button from '@atoms/Button';
import NumberInput from '@atoms/NumberInput';
import useNumberInput from '@hooks/useNumberInput';

function AddBasketForm(): JSX.Element {
  const [ value, plus, minus, onChange, onBlur ] = useNumberInput(0);

  return (
    <form className="add-basket">
      <Button type="circle" onClick={plus}>+</Button>
      <NumberInput value={value} onChange={onChange} onBlur={onBlur} />
      <Button type="circle" onClick={minus}>-</Button>
      <Button type="default">Add Cart</Button>
    </form>
  )
}

export default AddBasketForm;