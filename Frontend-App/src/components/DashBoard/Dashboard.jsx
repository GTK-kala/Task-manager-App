import { useState , useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [icon, setIcon] = useState("");
  const [tasks, setTasks] = useState([]);
  const [Task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      const Data = data.results;
      if (Data.length > 0) {
        setTask(Data);
      } else {
        alert("No Tasks Found !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompletedTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      const Data = data.results;
      if (Data.length > 0) {
        setTasks(Data.filter((task) => task.status === "completed"));
        setIcon("✅");
      } else {
        alert("No Tasks Found !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProgressTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      const Data = data.results;
      if (Data.length > 0) {
        setTasks(Data.filter((task) => task.status === "in-progress"));
        setIcon("🕓");
      } else {
        alert("No Tasks Found !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

    const fetchPendingTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      const Data = data.results;
      if (Data.length > 0) {
        setTasks(Data.filter((task) => task.status === "pending"));
        setIcon("🟡");
      } else {
        alert("No Tasks Found !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>📊 Task Manager Dashboard</h1>
        <p>Welcome back, Khalid 👋</p>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card" onClick={() => fetchCompletedTasks()}>
          <h3>✅ Completed Tasks</h3>
          <p>{Task.filter((task) => task.status === "completed").length}</p>
        </div>
        <div className="stat-card" onClick={() => fetchProgressTasks()}>
          <h3>🕓 In Progress</h3>
          <p>{Task.filter((task) => task.status === "in-progress").length}</p>
        </div>
        <div className="stat-card" onClick={() => fetchPendingTasks()}>
          <h3>🟡 Pending</h3>
          <p>{Task.filter((task) => task.status === "pending").length}</p>
        </div>
      </div>

      <div className="task-preview">
        <h2>📋 Recent Tasks</h2>
        <div className="task-list">
          {tasks.slice(0, 3).map((task, i) => (
            <div className="task-item" key={i}>
              <h4>{task.title}</h4>
              <p>
                Status:{icon} {task.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
