import { contextApi } from "../../context/Contextprovider";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import "./Task.css";

const Task = () => {
  
   const {display, ToggleDisplay} = useContext(contextApi);

  return display ? (
    <>
      <form className="task-form">
        <div className="task-header">
          <h2>Create Tasks</h2>
          <span className="close-btn" onClick={() => ToggleDisplay()}>
            <FaTimes />
          </span>
        </div>
        {/* Task Title */}
        <input type="text" placeholder="Task title" required />

        {/* Description */}
        <textarea placeholder="Task description" />

        {/* Status */}
        <select className="task-select" defaultValue="">
          <option value="" disabled>
            Select status
          </option>
          <option value="pending">🟡 Pending</option>
          <option value="in-progress">🔵 In Progress</option>
          <option value="completed">✅ Completed</option>
        </select>

        {/* User ID (hidden for single-user app, select for multi-user app) */}
        <input type="hidden" />

        <button type="submit">Create Task</button>
      </form>
    </>
  ) : null;
};

export default Task;
