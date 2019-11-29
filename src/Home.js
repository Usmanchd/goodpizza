import React from 'react';
import Section from './Section';
import Sectionmenu from './Sectionmenu';

const Home = props => {
  return (
    <div>
      <Section />

      <Sectionmenu
        addCart={props.addCart}
        removeCart={props.removeCart}
        removeSingle={props.removeSingle}
        addSingle={props.addSingle}
      />
    </div>
  );
};

export default Home;
