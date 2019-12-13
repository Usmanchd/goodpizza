import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { store } from '../store/store';
import { Link, useHistory } from 'react-router-dom';

const firebase = require('firebase');

export default function Cart() {
  const history = useHistory();
  const { state } = useContext(store);
  const { cart, userDetails } = state;
  const [totalprice, settotalprice] = useState(0);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        history.push('/signup');
      }
    });
  }, [history]);

  useEffect(
    () =>
      settotalprice(
        cart.reduce((amount, c) => (amount += c.count * c.Price), 0)
      ),
    [cart]
  );

  return (
    <div className="cart">
      <div className="row">
        <div className="col-lg-8 center" style={{ margin: 'auto' }}>
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Order summary
          </div>
          <div className="p-4">
            {/* <p className="font-italic mb-4">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p> */}
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Name: </strong>
                <strong>{userDetails.name}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Contact Number</strong>
                <strong>{userDetails.phonenum}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Address</strong>
                <strong>{userDetails.address}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold"> ₨{totalprice.toFixed(2)}</h5>
              </li>
            </ul>
            <Link
              onClick={() => {
                alert(
                  '*******************\nTest Order\nName: ' +
                    userDetails.name +
                    ' \nContact Num: ' +
                    userDetails.phonenum +
                    ' \nAddress: ' +
                    userDetails.address +
                    '\nTotal Cost: ' +
                    totalprice +
                    ' \nOrder Details\n' +
                    JSON.stringify(cart)
                );
              }}
            >
              <span className="btn btn-dark rounded-pill py-2 btn-block">
                Order
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
