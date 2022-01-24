import Img from '@atoms/Img';
import image from '@images/apple.jpeg';
import Card from '@atoms/Card';
import AddBasketForm from '@components/AddBasketForm';

function ShoppingList(): JSX.Element {
  return (
    <div className="shopping-list">
      <Card>
        <Img src={image} />
        <AddBasketForm />
      </Card>
    </div>
  )
}

export default ShoppingList;