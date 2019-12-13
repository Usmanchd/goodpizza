import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store/store';

const Sidebarmenu = () => {
  const { state, dispatch } = useContext(store);
  const { cart } = state;
  const [totalprice, settotalprice] = useState(0);
  useEffect(
    () =>
      settotalprice(
        cart.reduce((amount, c) => (amount += c.count * c.Price), 0)
      ),
    [cart]
  );
  return (
    <div>
      <ul className="sidebar">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/sectionmenu">Menu</Link>
          {/* <span class="selector"></span>
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
          </ul> */}
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
            <p>Total: {totalprice.toFixed(2)}</p>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebarmenu;
