import { FaCheckSquare, FaRegSquare, FaTh } from "react-icons/fa";
import { FaToggleOn, FaToggleOff, FaCog } from "react-icons/fa";
import { Images } from "../../assets/data"
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='side-container'>
        {/* <h2>Task Manager</h2> */}
        <div className="sub-container">
            <div className="menu-container">
               <p className="menu-title">MENU</p>
               <ul>
                   <li>
                    <FaTh className="icons"/>
                    <span>Dashboard</span>
                   </li>
                   <li>
                    <FaCheckSquare className="icons"/>
                    <span>Tasks</span>
                   </li>
               </ul>
            </div>
            <div className="message-container">
               <p>MESSAGE</p>
               <ul>
                   <li>Message 1</li>
                   <li>Message 2</li>
                   <li>Message 3</li>
               </ul>
            </div>
            <div className="settings-container">
                <p>
                    <FaCog className="settings-icon"/>
                    <span>Settings</span>
                </p>
                <p>
                    <FaToggleOn className="toggle-icon"/>
                    <span>Dark Mode</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SideBar