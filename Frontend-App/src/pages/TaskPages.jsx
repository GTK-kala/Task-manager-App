import Task from "../components/Tasks/Task"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const TaskPages = () => {
  return (
    <>
       <Task />
       <ToastContainer  position="top-right" autoClose={1000} />
    </>
  )
}

export default TaskPages