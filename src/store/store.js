import React, { useReducer, createContext, useEffect } from 'react';
import { Products } from '../data/data';
import { reducer } from './reducer';

// getdata from local storage
const getdata = () => {
  const locdata = localStorage.getItem('cart');
  return locdata ? JSON.parse(locdata) : [];
};

//initialize the State
const initialState = {
  category: ['All', 'Deals', 'Burger', 'Pizza'],
  Products,
  cart: getdata(),
  selectedCategory: 'All',
  userDetails: {
    email: '',
    name: '',
    address: '',
    phonenum: ''
  }
};

//using Context api to create provider
const store = createContext();
const { Provider } = store;

//funtion to wrap around app.js in index.js to pass state to all children
function Dataprovider({ children }) {
  //reducer..
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  // saving data in local storage whenever there is change in cart only
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  //returing a provider created from createContext with value returned by useReducer and wraping around all the children in index.js
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, Dataprovider };
