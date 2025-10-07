import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Tasks.css";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/tasks");
      const data = await response.json();
      setTaskList(data.results);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const FilterTasks = (id) => {
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== id));
    toast.success("Task deleted successfully");
    console.log(id);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return taskList.length > 0 ? (
    <div className="tasks-container">
      {taskList.map((task, i) => (
        <div className={`task-card ${task.status}`} key={i}>
          <div className="task-header">
            <h3>{task.title}</h3>
            <span className="status">{task.status}</span>
          </div>

          <p className="task-desc">{task.description}</p>

          <div className="task-footer">
            <small>
              Due:{" "}
              {task.due_date
                ? new Date(task.due_date).toLocaleDateString()
                : "No deadline"}
            </small>
            <div className="task-actions">
              <button className="edit" onClick={() => navigate("/TaskPage")}>
                ✏️
              </button>
              <button className="delete" onClick={() => FilterTasks(task.task_id)}>
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>Page not found</p>
  );
};

export default Tasks;
