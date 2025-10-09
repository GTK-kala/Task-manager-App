import { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

   
  const fetchTasks = async () =>{
     try{
      setLoading(true);
       const res = fetch("http://localhost:3001/api/tasks")
       const data = await res.json();
       const Data = data.results;
       if(Data.length > 0){
         setTasks(Data);
       } else{
        alert("No Tasks Found !!!");
       }
     } catch(error){
       console.log(error);
     }
  }


    useEffect(() => {
    fetchTasks();
    f
  }, []);
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🧩 TaskBoard</h2>
        <ul className="menu">
          <li
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            📊 Overview
          </li>
          <li
            className={activeTab === "tasks" ? "active" : ""}
            onClick={() => setActiveTab("tasks")}
          >
            ✅ Tasks
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            👥 Users
          </li>
          <li
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            ⚙️ Settings
          </li>
        </ul>
      </aside>

      {/* Main Section */}
      <main className="main-content">
        {activeTab === "overview" && (
          <section className="overview-section">
            <h1>📈 Dashboard Overview</h1>
            <div className="stats">
              <div className="stat-card fade-in">
                <h3>👥 Users</h3>
                <p>50 Active</p>
              </div>
              <div className="stat-card fade-in">
                <h3>✅ Tasks</h3>
                <p>120 Total</p>
              </div>
              <div className="stat-card fade-in">
                <h3>🚀 Projects</h3>
                <p>8 Running</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "tasks" && (
          <section className="tasks-section fade-in">
            <h1>🗂️ Task List</h1>
            {loading ? (
              <p className="loading">⏳ Loading tasks...</p>
            ) : (
              <div className="task-grid">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`task-card ${task.status.toLowerCase()}`}
                  >
                    <h3>{task.title}</h3>
                    <p>Status: {task.status}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "users" && (
          <section className="fade-in">
            <h1>👥 Users</h1>
            <p>Display user info here...</p>
          </section>
        )}

        {activeTab === "settings" && (
          <section className="fade-in">
            <h1>⚙️ Settings</h1>
            <p>Profile, theme, and preferences.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
