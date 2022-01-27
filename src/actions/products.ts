import { Action } from 'redux';
import store from '@root/store';
import { Products } from '../types';

export const INSERT_PRODUCTS = 'INSERT_PRODUCTS' as const;
export const UPDATE_QUANTITY_PRODUCT = 'UPDATE_QUANTITY_PRODUCT' as const;

export function insertProducts(products: Products): InsertProductsAction {
  return {
    type: INSERT_PRODUCTS,
    payload: products,
  };
}

function unsafeUpdateQuantityProduct(products: Products): UpdateProductAction {
  return {
    type: UPDATE_QUANTITY_PRODUCT,
    payload: products,
  };
}

export const updateQuantityProduct = (itemId: string, quantity: number) => {
  const products = [...store.getState().products];
  const targetItem = products.find((product) => product.id === itemId)!;
  if (targetItem.quantity - quantity < 0) {
    return unsafeUpdateQuantityProduct(products);
  }
  targetItem.quantity -= quantity;
  return unsafeUpdateQuantityProduct(products);
};

type ActionTypes = typeof INSERT_PRODUCTS
  | typeof UPDATE_QUANTITY_PRODUCT;

export interface InsertProductsAction extends Action<ActionTypes> {
  payload: Products;
}

export interface UpdateProductAction extends Action<ActionTypes> {
  payload: Products;
}
