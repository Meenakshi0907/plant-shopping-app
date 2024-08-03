import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  const handleQuantityChange = (quantity) => {
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-lg font-medium text-gray-700 mb-2">${item.price}</p>
        <div className="flex items-center space-x-4 mb-2">
          <p className="text-lg">Quantity:</p>
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
          >
            -
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
