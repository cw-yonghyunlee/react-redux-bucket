import Button from '@atoms/Button';
import CartItem from '@components/cart/CartItem';
import image from '@images/apple.jpeg';

function Cart(): JSX.Element {
  return (
    <article className="basket">
      <h1>Cart</h1>
      <ul>
        <CartItem itemId="1" imageSrc={image} initialQuantity={1} />
        <CartItem itemId="2" imageSrc={image} initialQuantity={1} />
      </ul>
      <Button type="default">buy</Button>
    </article>
  );
}

export default Cart;
