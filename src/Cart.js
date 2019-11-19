import React from 'react';
import './Cart.css';

function Buttons(props) {
  if (props.item.count === 1) {
    return (
      <div className="Cartbuttons">
        
        <button onClick={() => props.removeCart(props.item)}>
          Remove Item {props.item.count}
        </button>
        <button onClick={() => props.addSingle(props.item)}>+</button>
      </div>
    );
  } else {
    return (
      <div className="Cartbuttons">
        <button onClick={() => props.removeSingle(props.item)}>-</button>
        <button onClick={() => props.removeCart(props.item)}>
          Remove Item {props.item.count}
        </button>
        <button onClick={() => props.addSingle(props.item)}>+</button>
      </div>
    );
  }
}

function Cart(props) {
  return (
    <div className="Cart">
      {/* <h1>Cart</h1> */}
      {props.item.map((c, index) => {
        return (
          <div key={index} className="cartitems">
            <p>
              <b>Name :</b>
              {c.name}
            </p>
            {/* <p>
                    <b>Description :</b>
                    {c.description}
                  </p> */}
            <p>
              <b>Price :</b>
              {c.showprice}
            </p>
            {/* <p>
                    <b>Count :</b>
                    {c.count}
                  </p> */}
            <Buttons
              item={c}
              removeSingle={props.removeSingle}
              addSingle={props.addSingle}
              removeCart={props.removeCart}
            />
            {/* <button
                className="cross"
                onClick={() => props.removeCart(c)}
              >
                X
              </button> */}
          </div>
        );
      })}
      <h3 className="totalp">Totalprice : {props.totalPrice}</h3>
      <button className="btncheckout" onClick={() => props.checkOut()}>
        Check Out
      </button>
    </div>
  );
}

export default Cart;
