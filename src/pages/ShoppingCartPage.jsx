import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const items = useSelector(state => state.cart.items);
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="mb-4">
        <p className="text-lg font-medium">Total Items: <span className="font-semibold">{totalItems}</span></p>
        <p className="text-lg font-medium">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
      </div>
      <div className="mb-4">
        {items.length > 0 ? (
          items.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => alert('Coming Soon!')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
        <Link to="/products">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
