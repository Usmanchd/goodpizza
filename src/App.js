import React, { useState, useEffect } from 'react';
import './App.css';
import Items from './Items';
import Cart from './Cart';

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

      <nav
        className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light"
        id="pb-navbar"
      >
        <div className="container">
          <a
            className="navbar-brand d-xl-none d-lg-none d-md-block d-sm-block"
            href="/"
          >
            <img
              src="assets/images/restaurant/2.png"
              alt="Instant Logo"
              className="light"
            />
            <img
              src="assets/images/restaurant/1.png"
              alt="Instant Logo"
              className="dark"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#probootstrap-navbar"
            aria-controls="probootstrap-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="ion-navicon"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="probootstrap-navbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-menu"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-about"
                >
                  About
                </a>
              </li>
              <li className="nav-item logo-center d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="index.html"
                >
                  <img
                    src="assets/images/restaurant/2.png"
                    alt="Instant Logo"
                    className="light"
                  />
                  {/* <img src="assets/images/restaurant/logo-dark.png" alt="Instant Logo" className="dark" /> */}
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-gallery"
                >
                  Gallery
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-events"
                >
                  Events
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  href="#section-contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase pb_letter-spacing-2"
                  onClick={handleClick}
                >
                  <div
                    class="dropdown"
                    style={{ position: 'relative', top: '-8px' }}
                  >
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cart
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#menu">
                        {Cartitems.map((c, i) => (
                          <div key={i}>
                            <p>
                              {c.name}{' '}
                              <span onClick={() => removeItem(c)}>X</span>
                            </p>
                          </div>
                        ))}
                        <hr />
                        <p>Total: {total}</p>
                      </a>
                    </div>
                    <span
                      style={{
                        position: 'relative',
                        right: '14px',
                        top: '-15px',
                        color: 'white',
                        backgroundColor: 'grey',
                        borderRadius: '100%',
                        padding: '7px'
                      }}
                    >
                      <b>{total}</b>Rs
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- END nav --> */}

      <section
        className="pb_cover_v1 cover-bg-black cover-bg-opacity-4 text-center"
        style={{
          backgroundImage: 'url(assets/images/restaurant/1900x1200/1.jpg)'
        }}
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9  order-md-1">
              {/* <a
                href="https://vimeo.com/channels/staffpicks/93951774"
                className="play popup-vimeo"
              >
                <i className="ion-ios-play"></i>
              </a> */}
              <h1 className="heading mb-3" style={{ color: 'black' }}>
                <b>
                  <span style={{ color: '#c4302b' }}>Good</span> Pizza
                </b>
              </h1>
              <div className="sub-heading">
                <p className="mb-5">
                  <b>The Taste you wish for!</b>
                </p>
              </div>
              <p>
                <a
                  href="#section-menu"
                  role="button"
                  className="btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
                >
                  Order
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section -->  */}

      <section id="section-menu">
        <div>
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <h2
                className="mb-4 text-uppercase pb_letter-spacing-2"
                style={{ marginTop: '40px', paddingBottom: '0px' }}
              >
                Menu
              </h2>
            </div>
          </div>
          <Items addCart={addtoCart} />
        </div>
      </section>
      <h3 style={{ textAlign: 'center' }}>
        This Section of CheckOUT is In WORKING!//React Router Setup,
      </h3>
      <Cart
        item={Cartitems}
        removeCart={removeItem}
        checkOut={resetCart}
        totalPrice={total}
        removeSingle={remove}
        addSingle={add}
        classname={toggle}
      />
      {/* <!-- END section --> */}

      <section className="pb_section" id="section-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="row">
                <div className="col">
                  <p>
                    <img
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="Instant"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col">
                  <p>
                    <img
                      src="assets/images/restaurant/800x975/img_2.jpg"
                      alt="Instant"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pl-lg-5 pl-lg-0">
              <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                The Restaurant
              </h2>
              <p>"HERE GOES ABOUT!!"</p>

              <p></p>
              <p>
                <a
                  href="#section-menu"
                  className="smoothscroll text-danger text-uppercase"
                >
                  See our menu <i className="ion-arrow-down-c"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section --> */}

      <section
        className="pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4"
        style={{
          backgroundImage: 'url(assets/images/restaurant/1900x1200/img_1.jpg)'
        }}
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9  order-md-1">
              <h2 className="heading mb-3">Delicious &amp; Nutritious</h2>
              <p className="sub-heading">"subheading"</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section --> */}

      {/* <section className="pb_section" id="section-gallery">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                Gallery
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card-columns">
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/1900x1200/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/1900x1200/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_2.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_2.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/1900x1200/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/1900x1200/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>

                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/800x975/img_2.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/800x975/img_2.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
                <div className="card border-0 mb-4">
                  <a
                    href="assets/images/restaurant/1900x1200/img_1.jpg"
                    className="pb_hover-zoom image-popup"
                  >
                    <img
                      className="img-fluid"
                      src="assets/images/restaurant/1900x1200/img_1.jpg"
                      alt="caption here"
                    />
                    <i className="ion-ios-search-strong icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- END section --> */}
      <section className="pb_section cover-bg-cyan cover-bg-opacity-3">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                What People Says...
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_1.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">Garry Alexander</h3>
                  <p className="subheading">@garry</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_5.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">Deborah Smith</h3>
                  <p className="subheading">@deborah</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_2.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">James Robertson</h3>
                  <p className="subheading">@james</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section --> */}
      <section
        className="pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4"
        style={{
          backgroundImage: 'url(assets/images/restaurant/1900x1200/img_1.jpg)'
        }}
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9  order-md-1">
              <h2 className="heading mb-3">Good Food, Good Taste</h2>
              <p className="sub-heading">"subheading"</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section --> */}

      {/* <section className="pb_section pt-0 pb-0" id="section-contact">
        <div className="d-flex">
          <div className="pb_half py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                  Write us
                </h2>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-7">
                <form action="#">
                  <div className="row">
                    <div className="col-md">
                      <div className="form-group">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          className="form-control p-3 rounded-0"
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          className="form-control p-3 rounded-0"
                          id="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      cols="30"
                      rows="10"
                      className="form-control  p-3 rounded-0"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn pb_outline-dark pb_font-13 pb_letter-spacing-2  p-3 rounded-0"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="pb_half" id="map"></div>
        </div>
      </section> */}
      {/* <!-- END section --> */}

      <footer className="pb_footer bg-light" role="contentinfo">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/usman.aslam.3950"
                    className="p-2"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/usman.aslam.3950"
                    className="p-2"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/usman.aslam.3950"
                    className="p-2"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/usman.aslam.3950"
                    className="p-2"
                  >
                    <i className="fa fa-tripadvisor"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

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
