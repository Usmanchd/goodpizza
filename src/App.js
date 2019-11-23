import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Header from './Header';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';
import Sectionmenu from './Sectionmenu';

function App() {
  const initialVal = () => {
    const lc = localStorage.getItem('item');
    return lc ? JSON.parse(lc) : [];
  };
  const initialnum = () => {
    const ld = localStorage.getItem('total');
    return ld ? Number(ld) : 0;
  };
  const [Cartitems, setCart] = useState(initialVal);
  const [total, settotal] = useState(initialnum);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(Cartitems));
    localStorage.setItem('total', total);
  }, [Cartitems, total]);

  const setPrice = newcart => {
    let totalprice = newcart.reduce((total, item) => {
      return total + item.showprice;
    }, 0);
    settotal(totalprice);
  };

  const addtoCart = item => {
    let newcart = [];
    let isNew = true;
    let isIndex = '';
    Cartitems.forEach((items, index) => {
      if (item.name === items.name) {
        isNew = false;
        isIndex = index;
        return;
      }
    });
    if (isNew) {
      newcart = [...Cartitems];
      item.count = 1;
      item.showprice = item.Price;
      newcart.push(item);
      setCart(newcart);
      console.log(newcart);
    } else {
      newcart = [...Cartitems];
      ++newcart[isIndex].count;
      newcart[isIndex].showprice =
        newcart[isIndex].Price * newcart[isIndex].count;
      setCart(newcart);
      console.log(newcart[isIndex].showprice);
    }
    console.log(newcart);
    setPrice(newcart);
    settoggle('Cart show');
  };

  const removeItem = citem => {
    let newcart = Cartitems.filter(item => item.name !== citem.name);
    setCart(newcart);
    setPrice(newcart);
  };

  const resetCart = () => {
    let totalprice = Cartitems.reduce((total, item) => {
      return total + item.showprice;
    }, 0);
    if (totalprice === 0) return;
    alert('Your total price is: ' + totalprice);
    let newcart = [];
    setCart(newcart);
    setPrice(newcart);
    handleClick();
  };

  const remove = citem => {
    if (citem.count < 2) {
      removeItem(citem);
    } else {
      citem.count -= 2;
      addtoCart(citem);
    }
  };

  const add = citem => {
    addtoCart(citem);
  };

  const [toggle, settoggle] = useState('Cart hidden');
  const handleClick = () => {
    return toggle === 'Cart hidden'
      ? settoggle('Cart show')
      : settoggle('Cart hidden');
  };

  return (
    <div className="App">
      <div className="probootstrap-loader"></div>
      {/* <!-- END loader --> */}
      <Header
        item={Cartitems}
        removeCart={removeItem}
        checkOut={resetCart}
        totalPrice={total}
      />
      <Switch>
        <Route path="/cart">
          <Cart
            item={Cartitems}
            removeCart={removeItem}
            checkOut={resetCart}
            totalPrice={total}
            removeSingle={remove}
            addSingle={add}
            classname={toggle}
          />
        </Route>

        <Route path="/about">
          <ScrollToTop>
            <About />
          </ScrollToTop>
        </Route>
        <Route path="/sectionmenu">
          <ScrollToTop>
            <Sectionmenu addCart={addtoCart} />
          </ScrollToTop>
        </Route>

        <Route path="/">
          <ScrollToTop>
            <Home addCart={addtoCart} />
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
