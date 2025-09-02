import { FaCheckSquare , FaTh , FaFacebookMessenger , FaDiscord , FaSlack} from "react-icons/fa";
import { FaGithub, FaToggleOn , FaToggleOff , FaCog , FaMoon} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './SideBar.css'

const SideBar = () => {
  return (
/*------------------------Main-container ------------------------ */
    <div className='side-container'>
        <div className="sub-container">
{/*-----------------------Menu-container-------------------------*/}
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
{/*-----------------------Message-container-------------------------*/}
            <div className="message-container">
               <p>MESSAGE</p>
               <ul>
                   <li>
                    <FaGithub />
                    <span> GitHub</span>
                   </li>
                   <li>
                    <FaFacebookMessenger />
                    <span>Messenger</span>
                   </li>
                   <li>
                    <SiGmail />
                    <span>Gmail</span>
                   </li>
                   <li>
                    <FaSlack />
                    <span>Slack</span>
                   </li>
                   <li>
                    <FaDiscord />
                    <span>Discord</span>    
                   </li>
               </ul>
            </div>
{/*-----------------------Settings-container-------------------------*/}
            <div className="settings-container">
                <p>
                    <FaCog className="settings-icon"/>
                    <span>Settings</span>
                </p>
                <p className="dark-mode-container">
                    <FaMoon />
                     <span className="dark-mode-icon">Dark Mode</span>
                    <FaToggleOn className="toggle-icon"/>  
                </p>
            </div>
        </div>
    </div>
  )
}

export default SideBar