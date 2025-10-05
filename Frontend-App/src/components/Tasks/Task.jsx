import { contextApi } from "../../context/Contextprovider";
import { useContext , useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Task.css";

const Task = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const { display, ToggleDisplay } = useContext(contextApi);

  const handleTask = async (e) => {
    e.preventDefault();

    const newTask = { title, description, status, user_id: parseInt(userId) };

    try {
      const res = await fetch("http://localhost:3001/api/tasks/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      toast.success("Task created successfully!");
      setTitle("");
      setDescription("");
      setStatus("pending");
      setUserId("");
      ToggleDisplay();
      console.log(data);
    } catch (err) {
      toast.error("Failed to create task.");
    }
  };

  return display ? (
    <>
      <form className="task-form" onSubmit={(e) => handleTask(e)}>
        <div className="task-header">
          <h2>Create Tasks</h2>
          <span className="close-btn" onClick={() => ToggleDisplay()}>
            <FaTimes />
          </span>
        </div>
        {/* Task Title */}
        <input
          type="text"
          placeholder="Task title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* User ID */}
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        {/* Description */}
        <textarea
          placeholder="Task description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Status */}
        <select  
          className="task-select"
          required
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
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
