import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Store({ addToCart, user }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.inspiredBy.toLowerCase().includes(search.toLowerCase()) ||
      product.variant.toLowerCase().includes(search.toLowerCase());

    const matchesPrice =
      priceFilter === "All" ||
      (priceFilter === "200" && product.price <= 200) ||
      (priceFilter === "300" && product.price <= 300) ||
      (priceFilter === "400+" && product.price >= 400);

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <section className="store-page">
      <div className="page-header">
        <p className="eyebrow">Shop Collection</p>
        <h1>Fragrance Store</h1>
        <p>Browse our premium 50ml inspired fragrance collection.</p>
      </div>

      {!user && (
        <div className="purchase-notice">
          Please login or sign up to add products to cart or order via WhatsApp.
        </div>
      )}

      <div className="store-controls">
        <input
          type="text"
          placeholder="Search fragrance..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option>All</option>
          <option value="200">Up to R200</option>
          <option value="300">Up to R300</option>
          <option value="400+">R400+</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              user={user}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="empty">No fragrances found.</p>
        )}
      </div>
    </section>
  );
}

export default Store;