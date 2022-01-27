import { Action } from 'redux';
import { CartItem } from '../types';

export const INSERT_ITEM_IN_CART = 'INSERT_ITEM_IN_CART' as const;
export const DELETE_ITEM_IN_CART = 'DELETE_ITEM_IN_CART' as const;
export const UPDATE_QUANTITY_ITEM_IN_CART = 'UPDATE_QUANTITY_ITEM_IN_CART' as const;

export function insertItem(item: CartItem): CartAction {
  return {
    type: INSERT_ITEM_IN_CART,
    payload: item,
  };
}

export function deleteItem(item: CartItem): CartAction {
  return {
    type: DELETE_ITEM_IN_CART,
    payload: item,
  };
}

export function updateQuantityItem(item: CartItem): CartAction {
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
