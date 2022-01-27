import { combineReducers } from 'redux';
import { AppState, Cart, Products } from '../types';
import {
  CartAction, DELETE_ITEM_IN_CART, INSERT_ITEM_IN_CART, UPDATE_QUANTITY_ITEM_IN_CART,
} from '../actions/carts';
import { INSERT_PRODUCTS, ProductAction } from '../actions/products';

const initialState: AppState = {
  cart: [],
  product: [],
};

function cartReducer(state: Cart = initialState.cart, action: CartAction) {
  switch (action.type) {
    case INSERT_ITEM_IN_CART:
      return [...state, action.payload];
    case DELETE_ITEM_IN_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case UPDATE_QUANTITY_ITEM_IN_CART:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}

function productsReducer(state: Products = initialState.product, action: ProductAction) {
  switch (action.type) {
    case INSERT_PRODUCTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
