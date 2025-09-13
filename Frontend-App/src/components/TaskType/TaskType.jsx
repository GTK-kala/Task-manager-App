import { FaPlus , FaEllipsisH } from "react-icons/fa";
import "./TaskType.css";
const TaskType = () => {
  return (
// ---------------------Task Type Container----------------------
    <div className="task-type-container">
{/*---------------------Task Type -----------------------------*/}
      <div className="task-type">
{/*---------------------Task Type in progress -----------------*/}
        <h3 className="task-type-first">
          <span className="task-type-label">in Progress ({0})</span>
          <span className="icons-container">
            <FaPlus className="icon" />
          <FaEllipsisH className="icon" />
          </span>
        </h3>
{/*---------------------Task Type Completed -----------------*/}
        <h3 className="task-type-second">
          <span className="task-type-label">Completed ({0})</span>
          <span className="icons-container">
            <FaPlus className="icon" />
            <FaEllipsisH className="icon" />
          </span>
        </h3>
{/*---------------------Task Type in Review -----------------*/}
        <h3 className="task-type-third">
          <span className="task-type-label">in Review ({0})</span>
          <span className="icons-container">
            <FaPlus className="icon" />
            <FaEllipsisH className="icon" />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default TaskType;
