import Img from '@atoms/Img';
import image from '@images/apple.jpeg';

function ItemCard(): JSX.Element {
  return (
    <article className="item-card">
      <Img src={image} />
    </article>
  )
}

export default ItemCard;