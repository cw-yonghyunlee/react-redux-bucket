import { combineReducers } from 'redux';
import {
  AppState, CartItem, CartType, Products,
} from '../types';
import {
  CartAction, INSERT_ITEM_IN_CART, RESET_CART, UPDATE_QUANTITY_ITEM_IN_CART,
} from '../actions/carts';
import { INSERT_PRODUCTS, InsertProductsAction, UPDATE_QUANTITY_PRODUCT } from '../actions/products';

const initialState: AppState = {
  cart: [],
  product: [],
};

function insertItemInCart(state: CartType, item: CartItem) {
  const cart: CartType = JSON.parse(JSON.stringify(state));
  const targetItem = cart.find((cartItem) => cartItem.id === item.id);
  if (targetItem) {
    targetItem.quantity += item.quantity;
    return cart;
  }

  return [...state, item];
}

function updateQuantityItemInCart(state: CartType, itemId: string, quantity: number) {
  const cart: CartType = JSON.parse(JSON.stringify(state));
  const targetItem = cart.find((cartItem) => cartItem.id === itemId);
  if (targetItem) {
    targetItem.quantity = quantity;
    return cart;
  }

  return state;
}

function cartReducer(state: CartType = initialState.cart, action: CartAction): CartType {
  switch (action.type) {
    case INSERT_ITEM_IN_CART:
      if (!action.payload) {
        return state;
      }
      return insertItemInCart(state, action.payload);
    case RESET_CART:
      return [];
    case UPDATE_QUANTITY_ITEM_IN_CART:
      if (!action.payload) {
        return state;
      }
      return updateQuantityItemInCart(state, action.payload.id, action.payload.quantity);
    default:
      return state;
  }
}

function productsReducer(state: Products = initialState.product, action: InsertProductsAction) {
  switch (action.type) {
    case INSERT_PRODUCTS:
      return [...state, ...action.payload];
    case UPDATE_QUANTITY_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
