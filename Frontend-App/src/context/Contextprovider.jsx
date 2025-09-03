import { createContext, useState } from "react";

export const contextApi = createContext(null);
const Contextprovider = (props) => {
  const [menu, setMenu] = useState("");
  const [message, setMessage] = useState("");
  // const [showMenu, setShowMenu] = useState("");
  const [menu_title, setMenuTitle] = useState("right-container");
  const [menuItems, setMenuItems] = useState("");

  const MenuFunction = () => {
    if (menu === "") {
      setMenu("active");
      setMenuTitle("actives");
    } else {
      setMenu("");
    }
  };
  const TitleFunction = () => {
    if (menu_title === "") {
      setMenuTitle("actives");
    } else {
      setMenuTitle("");
    }
  };
  const MessageFunction = () => {
    if (message === "") {
      setMessage("active");
    } else {
      setMessage("");
    }
  };

  const showMenuFunction = () => {
    if (menuItems === "right-container") {
      setMenuItems("active");
    } else {
      setMenuItems("right-container");
    }
  };

  const contextValue = {
    MenuFunction,
    menu,
    MessageFunction,
    message,
    menu_title,
    TitleFunction,
    showMenuFunction,
    menuItems,
    setMenuItems,
  };

  return (
    <contextApi.Provider value={contextValue}>
      {props.children}
    </contextApi.Provider>
  );
};

export default Contextprovider;
