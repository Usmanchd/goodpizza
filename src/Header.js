import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="push better-nav fixed-top"
        style={{ height: '10vh' }}
      >
        <div className="container">
          <div className="head">
            <Link to="/" className="brand">
              <div className="logo">
                <img
                  className="image"
                  src="assets/images/restaurant/goodpizza.jpg"
                  alt="Branding"
                />
              </div>
              <div className="title">
                <h3>Good Pizza</h3>
              </div>
            </Link>
          </div>
          <div className="body">
            <ul>
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <Link to="/sectionmenu">Menu</Link>
                <span class="selector"></span>
                <ul>
                  <li>
                    <Link to="/">Deals</Link>
                  </li>
                  <li>
                    <Link to="">Pizza</Link>
                  </li>
                  <li>
                    <Link to="">Burgers</Link>
                  </li>
                </ul>
              </li>

              <li className="page">
                <Link to="/about">About</Link>
              </li>
              <li className="more dropdown">
                <Link to="/cart">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </Link>
                <span className="selector"></span>
                <ul style={{ padding: '5px' }}>
                  {props.item.map((c, i) => (
                    <li key={i}>
                      <p>
                        {c.name}
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => props.removeCart(c)}
                        >
                          X
                        </span>
                      </p>
                    </li>
                  ))}
                  <hr />
                  <p>Total: {props.totalPrice}</p>
                </ul>
              </li>
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
