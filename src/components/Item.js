import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { Icon } from 'react-icons-kit';
import './item.css';
import { store } from '../store/store';

const Item = () => {
  const { state, dispatch } = useContext(store);
  const { Products, cart } = state;

  const { name } = useParams();
  const [product] = useState(Products.filter(p => p.name === name));
  const add = product => {
    const index = cart.findIndex(c => c.name === product.name);
    if (index === -1) {
      let newproduct = { ...product, count: 1 };
      dispatch({ type: 'Add to Cart', payload: newproduct });
    } else {
      let newproduct = { ...product, count: cart[index].count + 1 };
      dispatch({ type: 'Increment Count', payload: newproduct });
    }
    console.log(cart);
  };

  return (
    <React.Fragment>
      <div className="row justify-content-center mb-5">
        <div className="col-md-10 text-center">
          <h2
            className="mb-4 text-uppercase pb_letter-spacing-2"
            style={{ marginTop: '40px', paddingBottom: '0px' }}
          >
            {name}
          </h2>
        </div>
      </div>
      <div className="item-details">
        {product.map(p => (
          <React.Fragment>
            <div>
              <img src={p.image} alt="sure" />
            </div>
            <div>
              <p>
                <strong>Description</strong>:{p.description}
              </p>
              <p>
                <strong>Price</strong> : {p.Price}
              </p>

              <p style={{ textAlign: 'center' }}>
                <strong>{p.category.toUpperCase()}</strong>
              </p>
            </div>
            <p>
              <button
                type="button"
                className="btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
                data-toggle="popover"
                title="Popover title"
                onClick={() => add(p)}
              >
                Add to Cart
              </button>
              <br />
              <button
                type="button"
                className="btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
                data-toggle="popover"
                title="Popover title"
                onClick={() =>
                  dispatch({
                    type: 'Remove item from cart',
                    payload: p
                  })
                }
              >
                Remove
              </button>
            </p>
          </React.Fragment>
        ))}
      </div>
      <Link to="/sectionmenu/All">
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
          Back to Menu
        </button>
      </Link>
    </React.Fragment>
  );
};

export default Item;
