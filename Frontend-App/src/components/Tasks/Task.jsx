import "./Task.css";

const Task = () => {
  return (
    <>
      <form className="task-form">
{/* Task Title */}
        <input type="text" placeholder="Task title" required />

{/* Description */}
        <textarea placeholder="Task description" />

{/* Status */}
        <select value={''}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
{/* User ID (hidden for single-user app, select for multi-user app) */}
        <input type="hidden" />

        <button type="submit">Create Task</button>
      </form>
    </>
  );
};

export default Task;
