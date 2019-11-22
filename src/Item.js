import React from 'react';
import { useParams } from 'react-router-dom';
const Item = () => {
  const { name } = useParams();
  return <div> Details About {name}</div>;
};

export default Item;
