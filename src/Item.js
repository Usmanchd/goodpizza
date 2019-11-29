import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from './data';
import './item.css';
const Item = props => {
  const { name } = useParams();
  const [product] = useState(Products.filter(p => p.name === name));
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
              <button
                type="button"
                className="btn smoothscroll "
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
                onClick={() => props.removeSingle(p)}
              >
                -
              </button>
              {console.log(p)}
              <button
                type="button"
                className="btn smoothscroll "
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
                onClick={() => props.addSingle(p)}
              >
                +
              </button>
            </div>
            <p>
              <button
                type="button"
                className="btn smoothscroll "
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
                onClick={() => props.addCart(p)}
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
                onClick={() => props.removeCart(p)}
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
