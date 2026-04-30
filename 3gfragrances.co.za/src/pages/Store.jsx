import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Store() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.inspiredBy.toLowerCase().includes(search.toLowerCase()) ||
      product.variant.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="store-page">
      <div className="page-header">
        <h1>Fragrance Store</h1>
        <p>Browse our 50ml inspired fragrance collection.</p>
      </div>

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
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="empty">No fragrances found.</p>
        )}
      </div>
    </section>
  );
}

export default Store;