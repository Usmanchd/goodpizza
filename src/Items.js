import React, { useState, useEffect } from 'react';
import './Items.css';
import { Link } from 'react-router-dom';
import { Products } from './data';
function Items(props) {
  const [products, setproducts] = useState(Products);

  useEffect(() => {
    if (props.category === 'ALL') return;
    else {
      props.category
        ? setproducts(Products.filter(p => p.category === props.category))
        : setproducts(Products.filter(p => p.isFeatured === 'true'));
    }
  }, [props.category]);

  return (
    <div className="itemsPage">
      {products.map((product, index) => {
        return (
          <div key={index} className="grid">
            <Link to={`/sectionmenu/${product.name}`}>
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
          </div>
        );
      })}
    </div>
  );
}

export default Items;
