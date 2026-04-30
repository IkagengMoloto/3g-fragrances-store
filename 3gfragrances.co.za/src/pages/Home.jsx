import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <p className="eyebrow">Luxury Inspired Fragrances</p>
        <h1>Smell Good. Look Good. Do Good.</h1>
        <p>
          Discover premium 50ml inspired fragrances for men, women, and unisex
          collections.
        </p>

        <div className="hero-actions">
          <Link to="/store" className="primary-btn">
            Shop Now
          </Link>
          <a
            href="https://wa.me/27848891554"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;