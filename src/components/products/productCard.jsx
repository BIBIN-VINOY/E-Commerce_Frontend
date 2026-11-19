import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {

  // Get the first variant's image
  const image = product.variants?.[0]?.primary_image;

  return (
    <article className="product-card">

      <Link
        to={`/products/${product.slug}/`}
        className="product-image-link"
      >
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="product-image"
          />
        ) : (
          <div className="no-product-image">
            No Image Available
          </div>
        )}
      </Link>

      <div className="product-info">

        <p className="product-category">
          {product.category?.name}
        </p>

        <h3>
          <Link to={`/products/${product.slug}/`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-brand">
          {product.brand?.name}
        </p>

        <p className="product-price">
          ₹{Number(product.price).toLocaleString('en-IN')}
        </p>

      </div>

    </article>
  );
}

export default ProductCard;