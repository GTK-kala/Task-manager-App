import { FaPlus, FaEllipsisH } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./TaskType.css";
const TaskType = () => {
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const proFun = async () => {
    try {
      let newCount = 0;
      const res = await fetch("http://localhost:3001/api/tasks");
      const Data = await res.json();
      const data = Data.results;
      if (data.length > 0) {
        const updateTasks = data.filter((tasks) => {
          if (tasks.status === "in-progress") {
            return tasks;
          }
          newCount++;
        });
        setCount1(newCount);
        setTaskList(updateTasks);
      } else {
        toast.error("Tasks not found!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const CompletedFun = async () => {
    try {
      let newCount = 0;
      const res = await fetch("http://localhost:3001/api/tasks");
      const Data = await res.json();
      const data = Data.results;
      if (data.length > 0) {
        const updateTasks = data.filter((tasks) => {
          if (tasks.status === "completed") {
            return tasks;
          }
          newCount++;
        });
        setCount2(newCount);
        setTaskList(updateTasks);
      } else {
        toast.error("Tasks not found!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ReviewFun = async () => {
    try {
      let newCount = 0;
      const res = await fetch("http://localhost:3001/api/tasks");
      const Data = await res.json();
      const data = Data.results;
      if (data.length > 0) {
        const updateTasks = data.filter((tasks) => {
          if (tasks.status === "pending") {
            return tasks;
          }
          newCount++;
        });
        setCount3(newCount);
        setTaskList(updateTasks);
      } else {
        toast.error("Tasks not found!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FilterTasks = (id) => {
    if (taskList.length > 0) {
      const upDateTasks = taskList.filter((task) => {
        return task.task_id !== id;
      });
      setTaskList(upDateTasks);
      toast.success("Tasks deleted successfully!!!");
    } else {
      toast.error("Not Tasks found!!!");
    }
  };
  return (
    <>
      <div className="task-type-container">
        {/*---------------------Task Type -----------------------------*/}
        <div className="task-type">
          {/*---------------------Task Type in progress -----------------*/}
          <h4 className="task-type-header in-progress">
            <span className="task-type-label" onClick={() => proFun()}>
              In Progress ({count1})
            </span>
            <span className="icons-container">
              <FaPlus className="icon add" onClick={() => navigate("/TaskPage")}/>
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>

          {/*---------------------Task Type Completed -----------------*/}
          <h4 className="task-type-header completed">
            <span className="task-type-label" onClick={() => CompletedFun()}>
              Completed ({count2})
            </span>
            <span className="icons-container">
              <FaPlus className="icon add" onClick={() => navigate("/TaskPage")}/>
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>

          {/*---------------------Task Type in Review -----------------*/}
          <h4 className="task-type-header review">
            <span className="task-type-label" onClick={() => ReviewFun()}>
              In Review ({count3})
            </span>
            <span className="icons-container">
              <FaPlus className="icon add" onClick={() => navigate("/TaskPage")}/>
              <FaEllipsisH className="icon menu" />
            </span>
          </h4>
        </div>
      </div>
      {/* --------------------------Tasks-------------------------------- */}
      <div className="tasks-container2">
        {taskList.map((task, i) => (
          <div className={`task-card ${task.status}`} key={i}>
            <div className="task-header">
              <h3>{task.title}</h3>
              <span className="status1">{task.status}</span>
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
