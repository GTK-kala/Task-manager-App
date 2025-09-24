import {
  FaCheckSquare,
  FaTh,
  FaFacebookMessenger,
  FaDiscord,
  FaSlack,
  FaAngleDoubleLeft ,
} from "react-icons/fa";
import {
  FaGithub,
  FaToggleOn,
  FaToggleOff,
  FaCog,
  FaMoon,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useContext, useState } from "react";
import { contextApi } from "../../context/Contextprovider";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    const navigate = useNavigate();

    const { MenuFunction, menu, MessageFunction, message, menu_title , animation, isCollapsed , handleAnimationEnd } =
    useContext(contextApi);

    const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    /*------------------------Main-container ------------------------ */
    <>
      { isCollapsed ? (
        <div className={`${animation ? "side-container-first" : "side-container-second"} `}>
          <div className="sub-container">
            {/*-----------------------Menu-container-------------------------*/}
            <div className="menu-container">
              <p
                className={`menu-title ${menu_title}`}
                onClick={() => {
                  MenuFunction();
                }}
              >
                MENU
              </p>
              <ul className={menu}>
                <li onClick={() => {navigate("/DashBoard") , handleAnimationEnd()}}>
                  <FaTh className="icons" />
                  <span>Dashboard</span>
                </li>
                <li onClick={() =>{navigate("/Tasks"), handleAnimationEnd()}}>
                  <FaCheckSquare className="icons" />
                  <span>Tasks</span>
                </li>
              </ul>
            </div>
            {/*-----------------------Message-container-------------------------*/}
            <div className="message-container">
              <p onClick={() => MessageFunction()}>MESSAGE</p>
              <ul className={message}>
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
                <FaCog className="settings-icon" />
                <span>Settings</span>
              </p>
              <p className="dark-mode-container">
                <FaMoon className="dark-mode" />
                <span className="dark-mode-icon">Dark Mode</span>
                {isDarkMode ? (
                  <FaToggleOn
                    className="toggle-icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  />
                ) : (
                  <FaToggleOff
                    className="toggle-icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  />
                )}
              </p>
            </div>
          </div>
        </div>
      ) : <></>}
      <div className="collapse-container">
        <button onClick={() => {handleAnimationEnd()}}>
          {isCollapsed ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight  />}{" "}
        </button>
      </div>
    </>
  );
};

export default SideBar;
