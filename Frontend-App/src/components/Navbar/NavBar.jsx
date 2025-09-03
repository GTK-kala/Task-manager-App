import { MdNotifications, MdMessage, MdMail } from "react-icons/md";
import { FaPlus , FaBars  } from "react-icons/fa";
import { Images } from "../../assets/data";
import { useContext } from "react";
import { contextApi } from "../../context/Contextprovider";
import "./NavBar.css";
const NavBar = () => {

   const { showMenuFunction , menuItems , setMenuItems } = useContext(contextApi);

  return (
/*----------------------------container ---------------------------*/
    <div className="container">
{/* ------------------------ left-container ----------- -----------*/}
      <div className="left-container">
        <img src={Images.option_icon} alt="" />
        <h2>ProTasks</h2>
      </div>
{/* ------------------------ center-container ----------- -----------*/}
      <div className="center-container">
        <h1>Tasks</h1>
      </div>
{/* ------------------------ right-container ----------- -----------*/}
      <div className={`${menuItems ? 'right-container' : 'active'}`}>
        <div className="inner-container">
          <button>
            <FaPlus className="icon" />
            <p>Create Tasks</p>
          </button>
          <div className="icon-container">
            <div className="icon-wrapper">
              <MdNotifications className="icon bell" />
              <span className="badge">3</span>
            </div>
            <div className="icon-wrapper">
              <MdMessage className="icon message" />
              <span className="badge">5</span>
            </div>
            <div className="icon-wrapper">
              <MdMail className="icon mail" />
              <span className="badge">2</span>
            </div>
          </div>
        </div>
      </div>
{/* ------------------------ menu-icon ----------- -----------*/}
      <div className="menuBar-icon">
        <FaBars className="icon" onClick={() => showMenuFunction()} />
      </div>
    </div>
  );
};

export default NavBar;
