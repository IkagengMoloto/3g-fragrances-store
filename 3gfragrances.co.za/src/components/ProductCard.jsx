import { Link } from "react-router-dom";

import maleBottle from "../assets/products/male-bottle.jpg";
import femaleBottle from "../assets/products/female-bottle.jpg";
import unisexBottle from "../assets/products/unisex-bottle.jpg";

function ProductCard({ product, user, addToCart }) {
  const whatsappNumber = "27727174892";

  const message = `Hi 3G Fragrances, I would like to order:

Product: ${product.name}
Inspired by: ${product.inspiredBy}
Variant: ${product.variant}
Size: ${product.size}
Price: R${product.price}`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const bottleImage =
    product.category === "Male"
      ? maleBottle
      : product.category === "Female"
      ? femaleBottle
      : unisexBottle;

  const cardContent = (
    <>
      <div className="product-image-area">
        <img src={bottleImage} alt={product.name} />

        <span className="category-badge">{product.category}</span>

        {product.price >= 400 && (
          <span className="premium-badge">Premium</span>
        )}
      </div>

      <div className="product-body">
        <h3>{product.name}</h3>

        <p className="inspired">
          Inspired by: {product.inspiredBy}
        </p>

        <p className="variant">
          Variant: {product.variant}
        </p>

        <div className="rating">
          ★★★★★ <span>4.8</span>
        </div>

        <div className="product-footer">
          <div>
            <strong>R{product.price}</strong>
            <small>{product.size}</small>
          </div>

          {user ? (
            <div className="product-actions">
              <button onClick={() => addToCart(product)}>
                Add To Cart
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                WhatsApp
              </a>
            </div>
          ) : (
            <div className="signin-overlay">
              Click product to login & purchase
            </div>
          )}
        </div>
      </div>
    </>
  );

  return user ? (
    <div className="product-card">
      {cardContent}
    </div>
  ) : (
    <Link to="/login" className="product-card login-card-link">
      {cardContent}
    </Link>
  );
}

export default ProductCard;