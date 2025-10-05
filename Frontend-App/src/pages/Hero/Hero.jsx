import TaskType from '../../components/TaskType/TaskType'
import TestUser from '../../components/Test/TestUser'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  return (
    <>
       <TaskType />
       <TestUser /> 
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default Hero
