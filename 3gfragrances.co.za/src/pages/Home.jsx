import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <>
      <section
        className="luxury-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-dark-overlay"></div>

        <div className="luxury-content">
          <p className="eyebrow">Premium Inspired Fragrances</p>

          <h1>
            Smell Good. <br />
            Look Good. <br />
            Be Unforgettable.
          </h1>

          <p className="hero-text">
            Discover elegant 50ml fragrances for men, women, and unisex
            collections.
          </p>

          <div className="hero-actions">
            <Link to="/store" className="primary-btn">
              Shop Collection
            </Link>

            <a
              href="https://wa.me/27727174892"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Why Choose 3G Fragrances?</h2>

        <div className="trust-grid">
          <div>
            <h3>Premium Inspired Scents</h3>
            <p>Luxury fragrance experience at affordable prices.</p>
          </div>

          <div>
            <h3>50ml Bottles</h3>
            <p>Perfect size for daily use, gifting, and travel.</p>
          </div>

          <div>
            <h3>WhatsApp Ordering</h3>
            <p>Fast and convenient ordering directly through WhatsApp.</p>
          </div>

          <div>
            <h3>Men, Women & Unisex</h3>
            <p>Collections for every style, mood, and occasion.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;