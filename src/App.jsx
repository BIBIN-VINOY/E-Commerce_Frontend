import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home/Home';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products/"
          element={<PlaceholderPage title="Products" />}
        />

        <Route
          path="/products/:slug/"
          element={<PlaceholderPage title="Product Details" />}
        />

        <Route
          path="/login/"
          element={<PlaceholderPage title="Login" />}
        />

        <Route
          path="/register/"
          element={<PlaceholderPage title="Register" />}
        />

        <Route
          path="/cart/"
          element={<PlaceholderPage title="Shopping Cart" />}
        />

        <Route
          path="/wishlist/"
          element={<PlaceholderPage title="Wishlist" />}
        />

        <Route
          path="/profile/"
          element={<PlaceholderPage title="My Profile" />}
        />

        <Route
          path="/orders/"
          element={<PlaceholderPage title="My Orders" />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;