import { useContext, useState } from "react";
import { FaBars, FaPlus, FaUserCircle } from "react-icons/fa";
import { MdNotifications, MdMessage } from "react-icons/md";
import { contextApi } from "../../context/Contextprovider";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/data";
import "./NavBar.css";

const Navbar = () => {

  const navigate = useNavigate();
  const  { ToggleDisplay } = useContext(contextApi)
  const [isOpen , setIsOpen] = useState(false)

   const toggleMenu = () => setIsOpen(!isOpen)


  return (
    <div className="navbar-container">
      {/* ---------------- Left ---------------- */}
      <div className="left-container" onClick={() => navigate("/")}>
        <img src={Images.option_icon} alt="" />
        <h2>ProTasks</h2>
      </div>

      {/* ---------------- Center ---------------- */}
      <div className="center-container">
        <h1 onClick={() => navigate("/Hero")}>Tasks</h1>
      </div>

      {/* ---------------- Right (menu) ---------------- */}
      <div className={`right-container ${isOpen ? "open" : "close"}`}>
        <div className="inner-container">
          <button className="Create-btn" onClick={() => { navigate("/TaskPage") , ToggleDisplay() , toggleMenu()}}>
            <FaPlus className="icon" />
            <p>Create Tasks</p>
          </button>
          <div className="icon-container">
            <div className="icon-wrapper">
              <MdNotifications className="icon bell"/>
              <span className="badge">3</span>
            </div>
            <div className="icon-wrapper">
              <MdMessage className="icon message"/>
              <span className="badge">5</span>
            </div>
            <div className="icon-wrapper">
              <FaUserCircle
                className="icon-user"
                onClick={() => {
                  navigate("/accounts") , toggleMenu()}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Hamburger ---------------- */}
      <div className="menuBar-icon" onClick={() => toggleMenu()}>
        <FaBars className="icons" />
      </div>
    </div>
  );
};

export default Navbar;
