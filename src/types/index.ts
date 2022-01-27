export interface Item {
  id: string;
  quantity: number;
  imageSrc: string;
}

export type Products = Item[];
export type CartItem = Item;
export type Cart = CartItem[];
export interface AppState {
  cart: Cart;
  product: Products;
}
