import Img from '@atoms/Img';
import Card from '@atoms/Card';
import AddCartForm from '@components/shopping-list/AddCartForm';
import Cart from '@components/cart/Cart';
import { useAppSelector } from '@root/store';
import { Products } from '@root/types';

function ShoppingList(): JSX.Element {
  const products = useAppSelector((state) => state.products);

  const makeProducts = (items: Products) => items.map((product) => (
    <Card key={product.id}>
      <Img alt="products" width={300} height={300} src={product.imageSrc} />
      <p>quantity : {product.quantity}</p>
      <AddCartForm product={product} />
    </Card>
  ));

  return (
    <div className="shopping-list">
      {makeProducts(products)}
      <Cart />
    </div>
  );
}

export default ShoppingList;
