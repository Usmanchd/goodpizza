import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './item.css';
import { store } from './store/store';

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
              <p>{p.name}</p>
              <p>{p.Price}</p>
              <p>{p.description}</p>
              <p>{p.category}</p>
            </div>
            <p>
              <button
                type="button"
                className="btn smoothscroll "
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
                onClick={() => add(p)}
              >
                Add to Cart
              </button>
              <br />
              <button
                type="button"
                className="btn smoothscroll "
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
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
    </React.Fragment>
  );
};

export default Item;
