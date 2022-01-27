import Img from '@components/atoms/Img';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import useNumberInput from '@hooks/useNumberInput';
import { useAppDispatch, useAppSelector } from '@root/store';
import { useEffect } from 'react';
import { updateQuantityCartItem } from '@root/actions/carts';

interface CartItemProps {
  itemId: string;
}

function CartItem(props: CartItemProps): JSX.Element {
  const { itemId } = props;
  const item = useAppSelector((state) => state.cart.find((cartItem) => cartItem.id === itemId)!);
  const productItem = useAppSelector(
    (state) => state.products.find((cartItem) => cartItem.id === itemId)!,
  );
  const dispatch = useAppDispatch();
  const {
    value, plus, minus, setValue, setMaxValue, onChange, onBlur,
  } = useNumberInput(item.quantity, 1);

  useEffect(() => {
    setValue(item.quantity);
  }, [item]);

  useEffect(() => {
    setMaxValue(productItem.quantity);
  }, [productItem]);

  useEffect(() => {
    dispatch(updateQuantityCartItem({
      id: item.id,
      quantity: value,
    }));
  }, [value]);

  return (
    <li>
      <p className="cart-item-label">{itemId}</p>
      <Img alt="cart item" width={50} height={50} src={item.imageSrc} />
      <div className="number-input-container">
        <Button type="circle" onClick={plus}>+</Button>
        <Input type="number" value={value} onChange={onChange} onBlur={onBlur} />
        <Button type="circle" onClick={minus}>-</Button>
      </div>
    </li>
  );
}

export default CartItem;
