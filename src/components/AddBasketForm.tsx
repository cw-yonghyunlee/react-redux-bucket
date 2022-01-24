import Button from '@atoms/CircleButton';

function AddBasketForm(): JSX.Element {
  return (
    <form className="add-basket">
      <Button type="circle">+</Button>
      <Button type="circle">-</Button>
      <Button type="default">Add Cart</Button>
    </form>
  )
}

export default AddBasketForm;