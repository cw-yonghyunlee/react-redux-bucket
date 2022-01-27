import { Action } from 'redux';
import { Products } from '../types';

export const INSERT_PRODUCTS = 'INSERT_PRODUCTS' as const;

export function insertProducts(products: Products): ProductAction {
  return {
    type: INSERT_PRODUCTS,
    payload: products,
  };
}

type ActionTypes = typeof INSERT_PRODUCTS;

export interface ProductAction extends Action<ActionTypes> {
  payload: Products;
}
