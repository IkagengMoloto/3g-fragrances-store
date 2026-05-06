import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please complete all fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
    navigate("/store");
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSignup}>
        <h1>Create Account</h1>
        <p>Join 3G Fragrances and start shopping.</p>

        <input
          name="name"
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