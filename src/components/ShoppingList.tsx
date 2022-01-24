import Img from '@atoms/Img';
import image from '@images/apple.jpeg';
import Card from '@atoms/Card';

function ShoppingList(): JSX.Element {
  return (
    <div className="shopping-list">
      <Card>
        <Img src={image} />
      </Card>
    </div>
  )
}

export default ShoppingList;