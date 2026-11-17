import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const categories = [
    'Chairs',
    'Tables',
    'Sofas',
    'Beds',
  ];

  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">MAKE YOUR SPACE BEAUTIFUL</p>

          <h1>
            Furniture that makes
            <br />
            your house a home.
          </h1>

          <p>
            Discover thoughtfully designed furniture
            that brings comfort and style to your space.
          </p>

          <Link to="/products/" className="shop-button">
            Explore Products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-heading">
          <h2>Explore Categories</h2>
          <p>Find the perfect furniture for every space.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to="/products/"
              className="category-card"
              key={category}
            >
              <h3>{category}</h3>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Discover some of our favourite furniture pieces.</p>
        </div>

        <div className="featured-placeholder">
          <p>
            Featured products will appear here once we connect
            the Django Products API.
          </p>
        </div>

        <Link to="/products/" className="view-all-link">
          View All Products →
        </Link>
      </section>

    </main>
  );
}

export default Home;