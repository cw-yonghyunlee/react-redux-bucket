import Img from '@atoms/Img';
import image from '@images/apple.jpeg';
import Card from '@atoms/Card';
import AddCartForm from '@components/shopping-list/AddCartForm';
import Cart from '@components/cart/Cart';

function ShoppingList(): JSX.Element {
  return (
    <div className="shopping-list">
      <Card>
        <Img alt="products" width={300} height={300} src={image} />
        <AddCartForm />
      </Card>
      <Cart />
    </div>
  );
}

export default ShoppingList;
