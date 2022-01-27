import Img from '@components/atoms/Img';
import Button from '@atoms/Button';
import Input from '@atoms/Input';
import useNumberInput from '@hooks/useNumberInput';

interface CartItemProps {
  itemId: string;
  imageSrc: string;
  initialQuantity: number;
}

function CartItem(props: CartItemProps): JSX.Element {
  const { itemId, imageSrc, initialQuantity } = props;
  const [value, plus, minus, onChange, onBlur] = useNumberInput(initialQuantity);

  return (
    <li>
      <p className="cart-item-label">{itemId}</p>
      <Img alt="cart item" width={50} height={50} src={imageSrc} />
      <div className="number-input-container">
        <Button type="circle" onClick={plus}>+</Button>
        <Input type="number" value={value} onChange={onChange} onBlur={onBlur} />
        <Button type="circle" onClick={minus}>-</Button>
      </div>
    </li>
  );
}

export default CartItem;
