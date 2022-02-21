import { Products } from '@root/types';
import appleImage from '@images/apple.jpeg';
import bananaImage from '@images/banana.png';

const mockProducts: Products = [
  {
    id: '1',
    quantity: 15,
    imageSrc: appleImage,
  },
  {
    id: '2',
    quantity: 20,
    imageSrc: bananaImage,
  },
];

export default mockProducts;
