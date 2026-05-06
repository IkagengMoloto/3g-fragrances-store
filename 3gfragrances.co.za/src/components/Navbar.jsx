import { NavLink } from "react-router-dom";

function Navbar({ user, logout, cartCount }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>3G Fragrances</h2>
        <p>Luxury inspired fragrances</p>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/store">Store</NavLink>

        {user && (
          <NavLink to="/cart">
            Cart ({cartCount})
          </NavLink>
        )}

        {user ? (
          <>
            <span className="user-name">
              Hi, {user.displayName || user.email}
            </span>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;