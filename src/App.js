import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Sectionmenu from './components/Sectionmenu';
import Sidebarmenu from './components/Sidebarmenu';
import Signin from './forms/Signin';
import Signup from './forms/Signup';
import CheckOut from './components/CheckOut';
import { store } from './store/store';
const firebase = require('firebase');

function App() {
  const [showMobVersion, setshowMobVersion] = useState({
    webVer: 'App',
    mobVer: 'AApp display-4'
  });
  const handleClick = () => {
    setshowMobVersion({ ...showMobVersion, webVer: 'App-1', mobVer: 'AApp-1' });
  };
  const history = useHistory();
  const { dispatch } = useContext(store);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection('users')
          .doc(user.email)
          .get()
          .then(doc => {
            let _user = doc.data();
            dispatch({ type: 'Set Email', payload: _user });
          }, console.log('err'));
      } else {
        dispatch({ type: 'Set Email', payload: '' });
      }
    });
  }, [dispatch, history]);
  return (
    <React.Fragment>
      <div className={showMobVersion.webVer}>
        <div className="probootstrap-loader"></div>
        <Header />
        <Switch>
          <Route path="/cart">
            <ScrollToTop>
              <Cart />
            </ScrollToTop>
          </Route>
          <Route path="/checkout">
            <ScrollToTop>
              <CheckOut />
            </ScrollToTop>
          </Route>

          <Route path="/about">
            <ScrollToTop>
              <About />
            </ScrollToTop>
          </Route>

          <Route path="/sectionmenu">
            <ScrollToTop>
              <Sectionmenu />
            </ScrollToTop>
          </Route>

          <Route path="/navbar-slide">
            <ScrollToTop>
              <Sidebarmenu />
            </ScrollToTop>
          </Route>
          <Route path="/signin">
            <ScrollToTop>
              <Signin />
            </ScrollToTop>
          </Route>

          <Route path="/signup">
            <ScrollToTop>
              <Signup />
            </ScrollToTop>
          </Route>

          <Route path="/">
            <ScrollToTop>
              <Home />
            </ScrollToTop>
          </Route>
        </Switch>

        <Footer />

        {/* <!-- loader --> */}
        <div id="pb_loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#FDA04F"
            />
          </svg>
        </div>
      </div>
      <div className={showMobVersion.mobVer}>
        Comming Soon on Android and iOS
        <br />
        <button
          type="button"
          className="btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
          data-toggle="popover"
          title="Popover title"
          onClick={handleClick}
        >
          Click Here if you like to See Website version
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
