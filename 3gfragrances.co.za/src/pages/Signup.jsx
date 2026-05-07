import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully. Please login.");
      navigate("/login");
    } catch (error) {
      alert("Backend is not running. Please start node server.js");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSignup}>
        <h1>Create Account</h1>
        <p>Sign up to shop 3G Fragrances.</p>

        <input
          name="name"
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
        />

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

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default Signup;