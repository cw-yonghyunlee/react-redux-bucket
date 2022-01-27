import { Action } from 'redux';
import store from '@root/store';
import { CartItem } from '../types';

export const INSERT_ITEM_IN_CART = 'INSERT_ITEM_IN_CART' as const;
export const DELETE_ITEM_IN_CART = 'DELETE_ITEM_IN_CART' as const;
export const UPDATE_QUANTITY_ITEM_IN_CART = 'UPDATE_QUANTITY_ITEM_IN_CART' as const;

export function unSafeInsertCartItem(item: CartItem): CartAction {
  return {
    type: INSERT_ITEM_IN_CART,
    payload: item,
  };
}

export function insertCartItem(item: CartItem): CartAction {
  const targetProduct = store.getState().products.find((product) => product.id === item.id)!;
  const targetCartItem = store.getState().cart.find((cartItem) => cartItem.id === item.id);
  if (targetProduct.quantity < item.quantity + (targetCartItem?.quantity ?? 0)) {
    return unSafeInsertCartItem({
      ...item,
      quantity: 0,
    });
  }
  return unSafeInsertCartItem(item);
}

export function updateQuantityCartItem(item: CartItem): CartAction {
  return {
    type: UPDATE_QUANTITY_ITEM_IN_CART,
    payload: item,
  };
}

type ActionTypes = typeof INSERT_ITEM_IN_CART
  | typeof DELETE_ITEM_IN_CART
  | typeof UPDATE_QUANTITY_ITEM_IN_CART;

export interface CartAction extends Action<ActionTypes> {
  payload: CartItem;
}
