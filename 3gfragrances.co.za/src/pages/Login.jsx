import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      onLogin(data.user, data.token);
      navigate("/store");
    } catch (error) {
      alert("Backend is not running. Please start node server.js");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Login to add products to cart and order.</p>

        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>

        <p>
          No account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;