import React from 'react';
import Section from './Section';
import Sectionmenu from './Sectionmenu';

const Home = props => {
  return (
    <div>
      <Section />s
      <Sectionmenu addtoCart={props.addtoCart} />
    </div>
  );
};

export default Home;
