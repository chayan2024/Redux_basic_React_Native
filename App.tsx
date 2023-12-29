// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CartScreen from './src/screens/CartScreen';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <Provider store={store}>
      {/* Your main app components */}
      <ProductScreen />
      <CartScreen />
    </Provider>
  );
};

export default App;
