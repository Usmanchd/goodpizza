import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store/store';

const firebase = require('firebase');

const Sidebarmenu = () => {
  const { state } = useContext(store);
  const { userDetails } = state;
  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <ul className="sidebar">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/sectionmenu">Menu</Link>
        </li>

        <li className="page">
          <Link to="/about">About</Link>
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
              <Link to="/signup">Sign up</Link>
            </li>
          </React.Fragment>
        )}

        <li className="more dropdown">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebarmenu;
