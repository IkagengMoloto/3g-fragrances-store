import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2>3G Fragrances</h2>
        <p>Luxury inspired fragrances</p>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;