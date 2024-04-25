import React from 'react';
import { product } from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const ProductCard = ({ name }) => {
  return (
    <div className="card mb-3">
      <Image image={product.image} />
      <div className="card-body">
        <Name name={product.name} />
        <Price price={product.price} />
        <Description description={product.description} />
      </div>
    </div>
  );
};

export default ProductCard;