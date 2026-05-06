import maleBottle from "../assets/products/male-bottle.jpg";
import femaleBottle from "../assets/products/female-bottle.jpg";
import unisexBottle from "../assets/products/unisex-bottle.jpg";

function ProductCard({ product }) {
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
      <div className="product-image-wrap bottle-wrap">
        <img src={bottleImage} alt={`${product.category} bottle`} />
        <span className="category-badge">{product.category}</span>
      </div>

      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="inspired">Inspired by: {product.inspiredBy}</p>
        <p className="variant">Variant: {product.variant}</p>

        <div className="product-footer">
          <div>
            <strong>R{product.price}</strong>
            <small>{product.size}</small>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;