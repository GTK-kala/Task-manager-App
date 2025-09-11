import "./Tasks.css";

const Tasks = () => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div className="task-card" key={task.task_id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            Status: <span>{task.status}</span>
          </p>
          <small>
            Created: {new Date(task.created_at).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
