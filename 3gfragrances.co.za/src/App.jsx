import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, []);

  function addToCart(product) {
    if (!user) {
      alert("Please login or sign up before adding products to cart.");
      return;
    }

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

  async function logout() {
    await signOut(auth);
    setUser(null);
    setCart([]);
  }

  return (
    <div className="app">
      <Navbar user={user} logout={logout} cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store addToCart={addToCart} user={user} />}
        />

        <Route
          path="/cart"
          element={
            user ? (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            ) : (
              <Login />
            )
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;