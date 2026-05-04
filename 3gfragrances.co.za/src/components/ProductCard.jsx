import maleImg from "../assets/products/male.jpg";
import femaleImg from "../assets/products/female.jpg";
import unisexImg from "../assets/products/unisex.jpg";

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

  const categoryBg =
    product.category === "Male"
      ? maleImg
      : product.category === "Female"
      ? femaleImg
      : unisexImg;

  return (
    <div className="product-card">
      <div
        className="product-image-wrap"
        style={{ backgroundImage: `url(${categoryBg})` }}
      >
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