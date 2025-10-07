import { FaPlus, FaEllipsisH } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./TaskType.css";
const TaskType = () => {
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

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>    
      <div className="task-type-container">
        {/*---------------------Task Type -----------------------------*/}
        <div className="task-type">
          {/*---------------------Task Type in progress -----------------*/}
          <h4 className="task-type-header in-progress">
            <span className="task-type-label">In Progress (0)</span>
            <span className="icons-container">
              <FaPlus className="icon add" />
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>

          {/*---------------------Task Type Completed -----------------*/}
          <h4 className="task-type-header completed">
            <span className="task-type-label">Completed (0)</span>
            <span className="icons-container">
              <FaPlus className="icon add" />
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>

          {/*---------------------Task Type in Review -----------------*/}
          <h4 className="task-type-header review">
            <span className="task-type-label">In Review (0)</span>
            <span className="icons-container">
              <FaPlus className="icon add" />
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>
        </div>
      </div>
      {/* --------------------------Tasks-------------------------------- */}
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
                Created At:{" "}
                {task.created_at
                  ? new Date(task.created_at).toLocaleDateString()
                  : "No date available"}
              </small>
              <div className="task-actions">
                <button className="edit" onClick={() => navigate("/TaskPage")}>
                  ✏️
                </button>
                <button
                  className="delete"
                  onClick={() => FilterTasks(task.task_id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </>
  );
};

export default TaskType;
