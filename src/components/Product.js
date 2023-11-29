import React from 'react';

const Product = ({ product }) => {
  const { name, price, category } = product;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      {/* Other product details */}
    </div>
  );
};

export default Product;