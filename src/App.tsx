import React from 'react';
import ShoppingList from '@components/shopping-list/ShoppingList';
import { Provider } from 'react-redux';
import { insertProducts } from './actions/products';
import products from './mock/products';
import store from './store';

store.dispatch(insertProducts(products));

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
