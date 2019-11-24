import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Footer from "./Footer";
import Sectionmenu from "./Sectionmenu";
import Sidebarmenu from "./Sidebarmenu";
import logo1 from "./img/1.jpg";
import logo2 from "./img/2.jpg";
import logo3 from "./img/3.jpg";
import logo4 from "./img/4.jpg";
import logo5 from "./img/5.jpg";
import logo6 from "./img/6.jpg";

function App() {
  const [Products, setProducts] = useState([
    {
      name: "Anday wala burger",
      image: logo1,
      Price: 240,
      description:
        "Anday wala burger is best in Pakistan mje andaya wala burger.",
      aleert: "none"
    },
    {
      name: "Shwarma",
      image: logo2,
      Price: 150,
      description:
        "Shwarma with extra chiken and socies is best in Pakistan you can taste the best shwarma here.",
      aleert: "none"
    },
    {
      name: "Lazania Pizza",
      image: logo3,
      Price: 540,
      description:
        "Lizania has spicy and juicy tast and it is best in Pakistan Chiken Lazania",
      aleert: "none"
    },
    {
      name: "Zinger burger",
      image: logo4,
      Price: 160,
      description:
        "Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger",
      aleert: "none"
    },
    {
      name: "Zinger burger 1",
      image: logo5,
      Price: 190,
      description:
        "Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger",
      aleert: "none"
    },
    {
      name: "Zinger burger 3",
      image: logo6,
      Price: 260,
      description:
        "Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger",
      aleert: "none"
    }
  ]);
  const initialVal = () => {
    const lc = localStorage.getItem("item");
    return lc ? JSON.parse(lc) : [];
  };
  const initialnum = () => {
    const ld = localStorage.getItem("total");
    return ld ? Number(ld) : 0;
  };
  const [Cartitems, setCart] = useState(initialVal);
  const [total, settotal] = useState(initialnum);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(Cartitems));
    localStorage.setItem("total", total);
  }, [Cartitems, total]);

  const setPrice = newcart => {
    let totalprice = newcart.reduce((total, item) => {
      return total + item.showprice;
    }, 0);
    settotal(totalprice);
  };

  const addtoCart = item => {
    let newcart = [];
    let newproducts = Products.map(n =>
      n.name === item.name ? { ...n, aleert: "block" } : n
    );
    setProducts(newproducts);
    console.log(newproducts, "np");
    let isIndex = Cartitems.findIndex(items => items.name === item.name);
    if (isIndex === -1) {
      console.log(isIndex);
      newcart = [...Cartitems];
      item.count = 1;
      item.showprice = item.Price;
      newcart.push(item);
      setCart(newcart);
      console.log(newcart, "new");
    } else {
      newcart = [...Cartitems];
      ++newcart[isIndex].count;
      newcart[isIndex].showprice =
        newcart[isIndex].Price * newcart[isIndex].count;
      setCart(newcart, "old");
      console.log(newcart[isIndex].showprice);
    }
    console.log(newcart);
    setPrice(newcart);
    settoggle("Cart show");
    setTimeout(() => {
      let newproducts = Products.map(n =>
        n.name === item.name ? { ...n, aleert: "none" } : n
      );
      setProducts(newproducts);
      console.log(newproducts, "np");
    }, 1000);
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
    alert("Your total price is: " + totalprice);
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

  const [toggle, settoggle] = useState("Cart hidden");
  const handleClick = () => {
    return toggle === "Cart hidden"
      ? settoggle("Cart show")
      : settoggle("Cart hidden");
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
            <Sectionmenu addCart={addtoCart} products={Products} />
          </ScrollToTop>
        </Route>
        <Route path="/navbar-slide">
          <ScrollToTop>
            <Sidebarmenu item={Cartitems} totalPrice={total} />
          </ScrollToTop>
        </Route>
        <Route path="/">
          <ScrollToTop>
            <Home addCart={addtoCart} products={Products} />
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
