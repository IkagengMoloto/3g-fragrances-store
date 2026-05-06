import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      setUser(savedUser);
      navigate("/store");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Welcome back to 3G Fragrances.</p>

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