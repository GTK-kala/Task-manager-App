import { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/tasks");
      const data = await res.json();
      const Data = data.results;
      if (Data.length > 0) {
        setTasks(Data);
      } else {
        alert("No Tasks Found !!!");
      };
    } catch (error) {
      console.log(error);
    };
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/users");
      const data = await res.json();
      const Data = data.result;
      if(Data.length > 0 ){
        setUsers(Data);
      } else{
        alert("No Users Found !!!");
      }
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    fetchTasks();
    fetchUsers();
  }, []);

  return (
     <div className="dashboard">
      <h1 className="dashboard-title">📊 Dashboard Overview</h1>

      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>

        <div className="stat-card tasks">
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-card completed">
          <h3>Completed</h3>
          <p>{tasks.filter((t) => t.status === "completed").length}</p>
        </div>

        <div className="stat-card pending">
          <h3>Pending</h3>
          <p>{tasks.filter((t) => t.status === "pending").length}</p>
        </div>
      </div>

      <div className="recent-tasks">
        <h2>📝 Recent Tasks</h2>
        <div className="task-list">
          {tasks.slice(0, 8).map((task) => (
            <div key={task.task_id} className="task-card">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <span
                className={`status ${task.status.replace(" ", "-").toLowerCase()}`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
