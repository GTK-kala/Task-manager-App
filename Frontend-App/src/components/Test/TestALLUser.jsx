import { useState , useEffect } from "react";
import "./TestAllUser.css";

const TestAllUser = () => {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/users`);
      const data = await res.json();
      if (data.result) {
        setUsers(data.result);
        localStorage.setItem("allUsers", JSON.stringify(data.result));
      } else {
        setUsers([]);
        console.log("No users found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-container">
      <h2 className="title">👥 All Registered Users</h2>

      <div className="data-container">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div className="user-card" key={index}>
              <h3>🧑 Name: {user.username}</h3>
              <p>
                📧 Email: <span>{user.email}</span>
              </p>
              <p>
                🔒 Password: <span>{user.password}</span>
              </p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>

      <div className="fetch-btn">
        <button onClick={() => fetchAllUsers()}>🔍 Fetch All Users</button>
      </div>
    </div>
  );
};

export default TestAllUser;
