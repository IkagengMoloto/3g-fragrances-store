import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  });

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    alert(`${product.name} added to cart`);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function logout() {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  }

  function handleSetUser(userData) {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    setUser(userData);
  }

  return (
    <div className="app">
      <Navbar user={user} logout={logout} cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/login" element={<Login setUser={handleSetUser} />} />
        <Route path="/signup" element={<Signup setUser={handleSetUser} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;