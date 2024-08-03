import React from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
