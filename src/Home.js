import React from 'react';
import Section from './Section';
import Sectionmenu from './Sectionmenu';

const Home = props => {
  return (
    <div>
      <Section />
      <Sectionmenu addCart={props.addCart} />
    </div>
  );
};

export default Home;
