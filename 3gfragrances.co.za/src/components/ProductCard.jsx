import maleBottle from "../assets/products/male-bottle.jpg";
import femaleBottle from "../assets/products/female-bottle.jpg";
import unisexBottle from "../assets/products/unisex-bottle.jpg";

function ProductCard({ product, addToCart }) {
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

  return (
    <div className="product-card">
      <div className="product-image-area">
        <img src={bottleImage} alt={product.name} />
        <span className="category-badge">{product.category}</span>
        {product.price >= 400 && <span className="premium-badge">Premium</span>}
      </div>

      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="inspired">Inspired by: {product.inspiredBy}</p>
        <p className="variant">Variant: {product.variant}</p>

        <div className="rating">★★★★★ <span>4.8</span></div>

        <div className="product-footer">
          <div>
            <strong>R{product.price}</strong>
            <small>{product.size}</small>
          </div>

          <div className="product-actions">
            <button onClick={() => addToCart(product)}>Add to Cart</button>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;