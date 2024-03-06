// App.js
import React, { useState } from 'react';
import WishListButton from '../wishListButton';

const WishMain = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products
  ]);

  const handleAddToWishlist = (product) => {
    // Add logic to handle adding product to wishlist
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    // Add logic to handle Wishlist click
  };

  return (
    <div>
      
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <WishListButton key={product.id} product={product} onAddToWishlist={handleAddToWishlist} />
        ))}
      </div>
    </div>
  );
};

export default WishMain;
