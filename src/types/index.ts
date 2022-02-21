export interface Item {
  id: string;
  quantity: number;
  imageSrc: string;
}

export type Products = Item[];
export type CartItem = Item;
export type CartType = CartItem[];
export interface AppState {
  cart: CartType;
  product: Products;
}
