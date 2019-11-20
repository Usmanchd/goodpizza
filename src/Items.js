import React from 'react';
import './Items.css';
import logo1 from './img/1.jpg';
import logo2 from './img/2.jpg';
import logo3 from './img/3.jpg';
import logo4 from './img/4.jpg';
import logo5 from './img/5.jpg';
import logo6 from './img/6.jpg';
function Items(props) {
  const products = [
    {
      name: 'Anday wala burger',
      image: logo1,
      Price: 240,
      description:
        'Anday wala burger is best in Pakistan mje andaya wala burger.'
    },
    {
      name: 'Shwarma',
      image: logo2,
      Price: 150,
      description:
        'Shwarma with extra chiken and socies is best in Pakistan you can taste the best shwarma here.'
    },
    {
      name: 'Lazania Pizza',
      image: logo3,
      Price: 540,
      description:
        'Lizania has spicy and juicy tast and it is best in Pakistan Chiken Lazania'
    },
    {
      name: 'Zinger burger',
      image: logo4,
      Price: 160,
      description:
        'Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger'
    },
    {
      name: 'Zinger burger/1',
      image: logo5,
      Price: 190,
      description:
        'Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger'
    },
    {
      name: 'Zinger burger/3',
      image: logo6,
      Price: 260,
      description:
        'Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger'
    }
  ];

  return (
    <div className="itemsPage">
      {products.map((product, index) => {
        return (
          <div key={index} className="grid">
            <img src={product.image} alt="itemImage" />
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
                className="btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
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
