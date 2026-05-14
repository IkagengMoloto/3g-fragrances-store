import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:5000/api/reset-password/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    );

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      navigate("/login");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </section>
  );
}

export default ResetPassword;