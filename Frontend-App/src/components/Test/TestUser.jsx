import { useState } from "react";
import { toast } from "react-toastify";
import "./TestUser.css";

const TestUser = () => {
  const [user_id, setUserId] = useState("");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/api/users/${user_id}`);
      const data = await res.json();
      if (data.result) {
        setUsers(data.result);
        console.log(data.result);
      } else {
        setUsers([]);
        toast.error("No user found!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-container">
      <h2 className="title">🔍 Fetch User by ID</h2>

      <div className="input-group">
        <input
          type="number"
          placeholder="Enter User ID..."
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <button
        onClick={() => fetchUsers()}
        disabled={loading}
        className="fetch-btn"
      >
        {loading ? "Loading..." : "Fetch User"}
      </button>

      <div className="data-container">
        {users ? (
          <div key={users.user_id} className="user-card">
            <h3>Name : {users.username}</h3>
            <p>
              📧 Email: <span>{users.email}</span>
            </p>
            <p>
              🔒 Password: <span>{users.password}</span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TestUser;
