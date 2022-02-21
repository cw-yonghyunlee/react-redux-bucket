import Button from '@atoms/Button';
import Input from '@atoms/Input';
import useNumberInput from '@hooks/useNumberInput';
import { useAppDispatch } from '@root/store';
import { insertCartItem } from '@root/actions/carts';
import { Item } from '@root/types';

interface AddCartFormProps {
  product: Item;
}

function AddCartForm(props: AddCartFormProps): JSX.Element {
  const { product } = props;
  const {
    value, plus, minus, setValue, onChange, onBlur,
  } = useNumberInput(0);
  const dispatch = useAppDispatch();

  const addCart = () => {
    dispatch(insertCartItem({
      ...product,
      quantity: value,
    }));
    setValue(0);
  };

  return (
    <form className="add-basket">
      <Button type="circle" onClick={plus}>+</Button>
      <Input type="number" value={value} onChange={onChange} onBlur={onBlur} />
      <Button type="circle" onClick={minus}>-</Button>
      <Button type="default" onClick={addCart}>Add Cart</Button>
    </form>
  );
}

export default AddCartForm;
