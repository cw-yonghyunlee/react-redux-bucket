import Button from '@atoms/Button';
import NumberInput from '@atoms/NumberInput';

function AddBasketForm(): JSX.Element {
  return (
    <form className="add-basket">
      <Button type="circle">+</Button>
      <NumberInput />
      <Button type="circle">-</Button>
      <Button type="default">Add Cart</Button>
    </form>
  )
}

export default AddBasketForm;