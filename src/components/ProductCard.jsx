import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const isAdded = items.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-40 object-cover rounded"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{product.name}</h3>
      <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`mt-4 px-4 py-2 rounded ${
          isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'
        } text-white font-semibold`}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
