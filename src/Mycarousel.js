import React from 'react';
import logo1 from './img/1.jpg';
import logo2 from './img/2.jpg';
import logo3 from './img/3.jpg';
import logo4 from './img/4.jpg';
import logo5 from './img/5.jpg';
// import logo6 from './img/6.jpg';

import CarouselSlider from 'react-carousel-slider';

let data = [
  {
    des: 'Deal 1',
    imgSrc: logo1
  },
  {
    des: 'Deal 2',
    imgSrc: logo2
  },
  {
    des: 'Deal 3',
    imgSrc: logo3
  },
  {
    des: 'Deal 4',
    imgSrc: logo4
  },
  {
    des: 'Deal 5',
    imgSrc: logo5
  }
];

/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: '450px'
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

const Mycarousel = () => {
  return (
    <CarouselSlider
      slideItems={data}
      manner={manner}
      buttonSetting={buttonSetting}
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
      textBoxStyle={textBoxStyle}
    />
  );
};

export default Mycarousel;
