import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <section
      className="luxury-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="luxury-content">
        <p className="eyebrow">Premium Inspired Fragrances</p>

        <h1>
          Smell Good <br />
          Look Good <br />
          Do Good
        </h1>

        <div className="gold-line"></div>

        <h2>
          Be <br />
          Unforgettable
        </h2>

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
  );
}

export default Home;