import Button from '@atoms/Button';
import Input from '@atoms/Input';
import useNumberInput from '@hooks/useNumberInput';

function AddBasketForm(): JSX.Element {
  const [ value, plus, minus, onChange, onBlur ] = useNumberInput(0);

  return (
    <form className="add-basket">
      <Button type="circle" onClick={plus}>+</Button>
      <Input type="number" value={value} onChange={onChange} onBlur={onBlur} />
      <Button type="circle" onClick={minus}>-</Button>
      <Button type="default">Add Cart</Button>
    </form>
  )
}

export default AddBasketForm;