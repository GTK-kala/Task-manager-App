import { useState } from "react";
import { toast } from "react-toastify";

const TestUser = () => {
  const [user_id, setId] = useState("");
  const [user, setUser] = useState(null);
  const handleSearch = async () => {
    let id = parseInt(user_id);
    try {
      const res = await fetch(`http://localhost:3001/api/users/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      } else {
        const data = await res.json();
        if (!data.result) {
          toast.error("User not found");
          setUser(null);
        } else {
          setUser(data.result);
          toast.success("User found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h2>🔍 Find User by ID</h2>
        <input
          type="number"
          placeholder="Enter user ID"
          value={user_id}
          onChange={(e) => setId(e.target.value)}
        />

        {user && (
          <div style={{ marginTop: "10px" }}>
            <h4>User Found:</h4>
            <p>
              <b>ID:</b> {user.id}
            </p>
            <p>
              <b>Username:</b> {user.username}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Password:</b> {user.password}
            </p>
          </div>
        )}
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TestUser;
