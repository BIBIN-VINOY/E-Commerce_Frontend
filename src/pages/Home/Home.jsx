import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  getCategories,
  getFeaturedProducts,
} from '../../services/productService';

import './Home.css';

function Home() {

  // State variables
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryError, setCategoryError] = useState(null);

  // Fetch categories from Django
  useEffect(() => {
  async function fetchHomeData() {
    try {
      // Fetch categories
      const categoryData = await getCategories();
      setCategories(categoryData);

      // Fetch featured products
      const productData = await getFeaturedProducts();

      console.log(
        'Featured Products:',
        JSON.stringify(productData, null, 2)
      );

    } catch (error) {
      console.error('Failed to fetch home data:', error);
      setCategoryError('Unable to load home page data.');

    } finally {
      setLoadingCategories(false);
    }
  }

  fetchHomeData();
}, []);

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

        {loadingCategories && <p>Loading categories...</p>}

        {categoryError && <p>{categoryError}</p>}

        {!loadingCategories && !categoryError && (
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                to="/products/"
                className="category-card"
                key={category.id}
              >
                <h3>{category.name}</h3>
                <span>Explore →</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Discover some of our favourite furniture pieces.</p>
        </div>

        <div className="featured-placeholder">
          <p>
            Featured products will appear here.
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