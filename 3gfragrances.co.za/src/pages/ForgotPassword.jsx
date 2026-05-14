import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    alert(data.message);
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>

        <p>Enter your email address.</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Generate Reset Link
        </button>
      </form>
    </section>
  );
}

export default ForgotPassword;