import { FaPlus, FaEllipsisH } from "react-icons/fa";
import "./TaskType.css";
const TaskType = () => {
  return (
    // ---------------------Task Type Container---------------------
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
  );
};

export default TaskType;
