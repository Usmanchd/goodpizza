import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { store } from '../store/store';
const firebase = require('firebase');

const Header = () => {
  const { state, dispatch } = useContext(store);
  const { cart, category, userDetails } = state;
  const [totalprice, settotalprice] = useState(0);
  useEffect(
    () =>
      settotalprice(
        cart.reduce((amount, c) => (amount += c.count * c.Price), 0)
      ),
    [cart]
  );
  const handleLogOut = () => {
    firebase.auth().signOut();
    // dispatch({ type: 'Set Email', payload: '' });
    // console.log(userDetails);
  };

  // useEffect(() => {
  //   firebase
  //     .auth()
  //     .onAuthStateChanged(user =>
  //       user
  //         ? dispatch({ type: 'Set Email', payload: user.email })
  //         : dispatch({ type: 'Set Email', payload: '' })
  //     );
  //   // console.log(user);
  // }, []);
  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="push better-nav fixed-top"
        style={{ height: '10vh' }}
      >
        <div className="container">
          <div className="head">
            <Link to="/" className="brand ">
              <div
                className="logo"
                style={{
                  height: '42.7px'
                }}
              >
                <img
                  className="image"
                  src="assets/images/restaurant/goodpizza.jpg"
                  alt="Branding"
                  style={{
                    paddingBottom: '5px'
                  }}
                />
              </div>
              <div
                className="title"
                onClick={() =>
                  dispatch({ type: 'Change Category', payload: 'All' })
                }
              >
                <h3
                // style={{
                //   position: 'absolute',
                //   left: '50%',
                //   transform: 'translatex(-50%)'
                // }}
                >
                  <span style={{ color: '#c4302b' }}>Good</span> Pizza
                </h3>
              </div>
            </Link>
          </div>
          <div className="body">
            <ul>
              <li
                className="home"
                onClick={() =>
                  dispatch({ type: 'Change Category', payload: 'All' })
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <Link to="/sectionmenu/All">
                  <span
                    onClick={() =>
                      dispatch({ type: 'Change Category', payload: 'All' })
                    }
                  >
                    Menu
                  </span>
                </Link>
                <span className="selector"></span>
                <ul>
                  {category.map(c => (
                    <li
                      key={c}
                      onClick={() =>
                        dispatch({ type: 'Change Category', payload: c })
                      }
                    >
                      <Link to={`/sectionmenu/${c}`}>{c}</Link>
                    </li>
                  ))}

                  {/* <li>
                    <Link to="/sectionmenu/pizza">Pizza</Link>
                  </li>
                  <li>
                    <Link to="/sectionmenu/burger">Burgers</Link>
                  </li> */}
                </ul>
              </li>

              <li className="page">
                <Link to="/about">About</Link>
              </li>
              <li className="more dropdown">
                <Link to="/cart">
                  <Icon icon={shoppingCart} />

                  <span>({cart.length})</span>
                </Link>
                <span className="selector"></span>
                <ul style={{ padding: '5px' }}>
                  {cart.map((c, i) => (
                    <li key={i}>
                      <p>
                        {c.name}
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            dispatch({
                              type: 'Remove item from cart',
                              payload: c
                            })
                          }
                        >
                          X
                        </span>
                      </p>
                    </li>
                  ))}
                  <hr />
                  <p>Total: {totalprice}</p>
                </ul>
              </li>
              {userDetails.email ? (
                <React.Fragment>
                  <li className="page">
                    <Link>Hello {userDetails.name}</Link>
                  </li>
                  <li className="page" onClick={handleLogOut}>
                    <Link>Logout</Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="page">
                    <Link to="/signin">Login</Link>
                  </li>
                  <li className="page">
                    <Link to="/signup">Sign in</Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
          <div className="toggle">
            <Link to="/navbar-slide">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </nav>
      <div id="underlay" className="better-nav-mobile-underlay"></div>
      <nav id="navbar-slide" className="better-nav-pills"></nav>
    </React.Fragment>
  );
};

export default Header;
