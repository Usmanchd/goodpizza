import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { store } from '../store/store';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { bin } from 'react-icons-kit/icomoon/bin';
import { plus } from 'react-icons-kit/fa/plus';
import { minus } from 'react-icons-kit/fa/minus';

export default function Cart() {
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
    <div className="cart">
      <div className="row">
        <div className="col-lg-8">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      {totalprice > 0 ? (
                        cart.map(c => {
                          return (
                            <tbody key={c}>
                              <tr>
                                <th scope="row" className="border-0">
                                  <div className="p-2">
                                    <img
                                      src={c.image}
                                      alt={c.name}
                                      width="70"
                                      className="img-fluid rounded shadow-sm"
                                    />
                                    <div className="ml-3 d-inline-block align-middle">
                                      <h5 className="mb-0">
                                        <p className="text-dark d-inline-block align-middle">
                                          {c.name}
                                        </p>
                                      </h5>
                                      <span className="text-muted font-weight-normal font-italic d-block">
                                        Category: {c.category}
                                      </span>
                                    </div>
                                  </div>
                                </th>
                                <td className="border-0 align-middle">
                                  <strong>₨{c.Price.toFixed(2)}</strong>
                                </td>
                                <td className="border-0 align-middle">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary m-2"
                                    onClick={() => {
                                      let newpayload = {
                                        ...c,
                                        count: c.count === 1 ? 1 : c.count - 1
                                      };
                                      dispatch({
                                        type: 'Increment Count',
                                        payload: newpayload
                                      });
                                    }}
                                    style={
                                      c.count < 2
                                        ? { opacity: '0.5' }
                                        : { opacity: '1' }
                                    }
                                  >
                                    <Icon icon={minus} size={20}></Icon>
                                  </button>
                                  <strong>{c.count}</strong>
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary m-2"
                                    onClick={() => {
                                      let newpayload = {
                                        ...c,
                                        count: c.count + 1
                                      };

                                      dispatch({
                                        type: 'Increment Count',
                                        payload: newpayload
                                      });
                                    }}
                                  >
                                    <Icon icon={plus} size={20}></Icon>
                                  </button>
                                </td>
                                <td className="border-0 align-middle">
                                  <p
                                    className="text-dark"
                                    onClick={() =>
                                      dispatch({
                                        type: 'Remove item from cart',
                                        payload: c
                                      })
                                    }
                                  >
                                    <Icon
                                      icon={bin}
                                      size={24}
                                      style={{ marginRight: '10px' }}
                                    ></Icon>
                                    {/* <i className="fa fa-trash"></i>Remove */}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })
                      ) : (
                        <h1 className="display-4">Your Cart is Empty</h1>
                      )}
                    </table>
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-outline-secondary m-2"
                        style={{
                          padding: '1.5rem 2rem',
                          border: 'none !important'
                        }}
                      >
                        <Icon
                          icon={arrowLeft2}
                          size={24}
                          style={{
                            marginRight: '10px'
                          }}
                        ></Icon>
                        Continue Shoping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
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
                <strong className="text-muted">Order Subtotal </strong>
                <strong>₨{totalprice.toFixed(2)}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Shipping and handling</strong>
                <strong>$0.00</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Tax</strong>
                <strong>$0.00</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold"> ₨{totalprice.toFixed(2)}</h5>
              </li>
            </ul>
            <Link to="/checkout">
              <span className="btn btn-dark rounded-pill py-2 btn-block">
                Procceed to checkout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import './Cart.css';

// function Buttons(props) {
//   if (props.item.count === 1) {
//     return (
//       <div className="Cartbuttons">
//         <button style={{ opacity: '0.4' }}>-</button>
//         <button onClick={() => props.removeCart(props.item)}>
//           Remove Item {props.item.count}
//         </button>
//         <button onClick={() => props.addSingle(props.item)}>+</button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Cartbuttons">
//         <button onClick={() => props.removeSingle(props.item)}>-</button>
//         <button onClick={() => props.removeCart(props.item)}>
//           Remove Item {props.item.count}
//         </button>
//         <button onClick={() => props.addSingle(props.item)}>+</button>
//       </div>
//     );
//   }
// }

// function Cart(props) {
//   return (
//     <div className="Cart">
//       {/* <h1>Cart</h1> */}
//       {props.item.map((c, index) => {
//         return (
//           <div key={index} className="cartitems">
//             <div className="cartrow">
//               <span>
//                 <p>
//                   <b>Name :</b>
//                   {c.name}
//                 </p>
//                 {/* <p>
//                     <b>Description :</b>
//                     {c.description}
//                   </p> */}
//                 <p>
//                   <b>Price :</b>
//                   {c.showprice}
//                 </p>
//                 {/* <p>
//                     <b>Count :</b>
//                     {c.count}
//                   </p> */}
//               </span>
//                 <img src={c.image} alt={c.name} width="20%" />
//             </div>
//             <Buttons
//               item={c}
//               removeSingle={props.removeSingle}
//               addSingle={props.addSingle}
//               removeCart={props.removeCart}
//             />
//             {/* <button
//                 className="cross"
//                 onClick={() => props.removeCart(c)}
//               >
//                 X
//               </button> */}
//           </div>
//         );
//       })}
//       <h3 className="totalp">Totalprice : {props.totalPrice}</h3>
//       <button className="btncheckout" onClick={() => props.checkOut()}>
//         Check Out
//       </button>
//     </div>
//   );
// }

// export default Cart;
