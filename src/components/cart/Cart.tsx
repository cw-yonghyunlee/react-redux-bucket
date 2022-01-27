import Button from '@atoms/Button';
import CartItem from '@components/cart/CartItem';
import { useAppSelector } from '@root/store';
import { CartType } from '@root/types';

function Cart(): JSX.Element {
  const cart = useAppSelector((state) => state.cart);

  const makeCartItems = (items: CartType) => items.map((item) => (
    <CartItem
      key={item.id}
      itemId={item.id}
    />
  ));

  return (
    <article className="basket">
      <h1>Cart</h1>
      <ul>
        {makeCartItems(cart)}
      </ul>
      <Button type="default">buy</Button>
    </article>
  );
}

export default Cart;
