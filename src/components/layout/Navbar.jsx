import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        MyStore
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products/">Products</NavLink>
        <NavLink to="/wishlist/">Wishlist</NavLink>
        <NavLink to="/cart/">Cart</NavLink>
        <NavLink to="/profile/">Profile</NavLink>
      </nav>

      <div className="auth-links">
        <NavLink to="/login/">Login</NavLink>
        <NavLink to="/register/">Register</NavLink>
      </div>
    </header>
  );
}

export default Navbar;