import { useEffect, useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setUsers(data);
  }

  async function deleteUser(id) {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchUsers();
  }

  async function resetPassword(id) {
    const newPassword = prompt("Enter new password:");

    if (!newPassword) return;

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/admin/users/${id}/reset-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password: newPassword }),
    });

    alert("Password reset successfully");
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="admin-page">
      <h1>Admin Users</h1>

      {users.map((user) => (
        <div className="admin-user-card" key={user.id}>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>Role: {user.role || "user"}</p>
          </div>

          <div>
            <button onClick={() => resetPassword(user.id)}>
              Reset Password
            </button>

            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AdminUsers;