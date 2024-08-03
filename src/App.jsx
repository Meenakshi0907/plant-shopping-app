import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { useSelector } from 'react-redux';
import LandingPage from './pages/LandingPage';

const App = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <Router>
      <header className="bg-green-600 p-4">
        <nav className="container mx-auto flex justify-around items-center">
          <Link to="/" className="text-white text-lg font-semibold">
            Home
          </Link>
          <Link to="/products" className="text-white text-lg font-semibold">
            Products
          </Link>
          <Link to="/cart" className="text-white text-lg font-semibold">
            Cart ({totalItems})
          </Link>
        </nav>
      </header>
      <main className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
