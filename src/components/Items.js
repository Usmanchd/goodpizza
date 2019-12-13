import React, { useState, useEffect, useContext } from 'react';
import './Items.css';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { store } from '../store/store';
function Items() {
  const { state, dispatch } = useContext(store);
  const { Products, selectedCategory: category, cart } = state;
  const [products, setproducts] = useState(Products);
  const match = useRouteMatch();
  const { name } = useParams();

  useEffect(() => {
    name && dispatch({ type: 'Change Category', payload: name });
  }, [name, dispatch]);

  useEffect(() => {
    if (category === 'All' && match.path === '/')
      setproducts(Products.filter(p => p.isFeatured === 'true'));
    else if (category === 'All') setproducts(Products);
    else setproducts(Products.filter(p => p.category === category));
  }, [category, Products, match.path]);

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
    <div className="itemsPage">
      {products.map((product, index) => {
        return (
          <div key={index} className="grid">
            <Link to={`/sectionmenu/product/${product.name}`}>
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
                onClick={() => add(product)}
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
