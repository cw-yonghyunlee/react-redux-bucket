import Button from '@atoms/Button';
import CartItem from '@components/cart/CartItem';
import { useAppDispatch, useAppSelector } from '@root/store';
import { CartType } from '@root/types';
import { resetCart } from '@root/actions/carts';
import { updateQuantityProduct } from '@root/actions/products';

function Cart(): JSX.Element {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const makeCartItems = (items: CartType) => items.map((item) => (
    <CartItem
      key={item.id}
      itemId={item.id}
    />
  ));

  const buy = () => {
    cart.forEach((cartItem) => {
      dispatch(updateQuantityProduct(cartItem.id, cartItem.quantity));
    });
    dispatch(resetCart());
  };

  return (
    <article className="basket">
      <h1>Cart</h1>
      <ul>
        {makeCartItems(cart)}
      </ul>
      <Button type="default" onClick={buy}>buy</Button>
    </article>
  );
}

export default Cart;
