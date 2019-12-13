import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Dataprovider } from './store/store';
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyDAigw0m3jOAn_r63jFRT0aCGRvu_8vU98',
  authDomain: 'goodpizza-49bdb.firebaseapp.com',
  databaseURL: 'https://goodpizza-49bdb.firebaseio.com',
  projectId: 'goodpizza-49bdb',
  storageBucket: 'goodpizza-49bdb.appspot.com',
  messagingSenderId: '82157270881',
  appId: '1:82157270881:web:56eda1254e1ab040a83720',
  measurementId: 'G-7B2ST7PJLS'
});

ReactDOM.render(
  <Dataprovider>
    <Router history>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </Router>
  </Dataprovider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
