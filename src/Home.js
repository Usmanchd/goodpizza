import React from "react";
import Section from "./Section";
import Sectionmenu from "./Sectionmenu";

const Home = props => {
  return (
    <div>
      <Section />
      <Sectionmenu addCart={props.addCart} products={props.products} />
    </div>
  );
};

export default Home;
