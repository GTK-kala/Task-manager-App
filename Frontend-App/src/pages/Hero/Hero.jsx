import TaskType from '../../components/TaskType/TaskType'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  return (
    <>
       <TaskType />
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default Hero
