import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Header from './Header';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';
import Sectionmenu from './Sectionmenu';
import Sidebarmenu from './Sidebarmenu';

function App() {
  return (
    <div className="App">
      <div className="probootstrap-loader"></div>

      <Header />

      <Switch>
        <Route path="/cart">
          <ScrollToTop>
            <Cart />
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
  );
}

export default App;
