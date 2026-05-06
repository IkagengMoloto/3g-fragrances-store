import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>3G Fragrances</h2>
        <p>Luxury inspired fragrances</p>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;