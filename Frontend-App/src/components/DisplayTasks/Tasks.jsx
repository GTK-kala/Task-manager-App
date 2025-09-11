import { Tasks as tasks } from "../../assets/data";
import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div className={`task-card ${task.status}`} key={task.task_id}>
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
              <button className="edit">✏️</button>
              <button className="delete">🗑️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
