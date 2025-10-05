import UsersAcc from "../components/Users/UsersAcc"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Accounts = () => {
  return (
    <>
        <UsersAcc />
        <ToastContainer position="top-right" autoClose={500} />
    </>
  )
}

export default Accounts