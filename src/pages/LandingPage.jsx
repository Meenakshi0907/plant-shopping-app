import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        margin: '0px',
        border: '0px',
      }}
    >
      <div className="container mx-auto p-24 text-white">
        <h1 className="text-3xl font-bold mb-4">GreenLeaf</h1>
        <p className="text-lg">
          Welcome to GreenLeaf, your trusted source for household plants that bring life and freshness to your home. We specialize in offering a wide variety of indoor and outdoor plants, carefully selected to suit any living space. Our mission is to help you create a green oasis in your home, with plants that are not only beautiful but also easy to care for. Whether you're a seasoned plant enthusiast or just starting your green journey, GreenLeaf has something for everyone.
        </p>
        <div className="mt-4">
          <Link to="/products">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
