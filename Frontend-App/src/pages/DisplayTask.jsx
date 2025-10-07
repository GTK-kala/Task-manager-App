import Tasks from '../components/DisplayTasks/Tasks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const DisplayTask = () => {
  return (
    <>
      <Tasks />
      <ToastContainer  position='top-right' autoClose={1000}/>
    </>
  )
}

export default DisplayTask