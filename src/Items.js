import React from 'react';
import './Items.css';
import { Link, useRouteMatch } from 'react-router-dom';

function Items(props) {
  const match = useRouteMatch();
  return (
    <div className="itemsPage">
      {props.products.map((product, index) => {
        return (
          <div key={index} className="grid">
            <Link to={`${match.url}/${product.name}`}>
              <img src={product.image} alt="itemImage" />
            </Link>
            <div className="d">
              <p>
                {/* <b>Name :</b> */}
                {product.name}
              </p>
              {/* <p>
                <b>Description :</b>
                {product.description}
              </p> */}
              <p>
                {/* <b>Price :</b> */}
                {product.Price} Rs
              </p>
              <button
                type="button"
                className="btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?"
                onClick={() => props.addCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div
              class="alert alert-primary"
              style={{ display: product.aleert }}
              role="alert"
            >
              Item Added to Cart
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
