import React from 'react';
import { useParams } from 'react-router-dom';
const Item = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default Item;
