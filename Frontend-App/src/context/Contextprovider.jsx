import { createContext, useState } from "react";

export const contextApi = createContext(null);
const Contextprovider = (props) => {
  const [menu, setMenu] = useState("");
  const [message, setMessage] = useState("");
  const [menu_title, setMenuTitle] = useState(" ");
  const [display, setDisplay] = useState(false);

  const MenuFunction = () => {
    if (menu === "") {
        setMenu("menu");
        setMenuTitle("menu_title");
    } else {
      setMenu("");
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

  const ToggleDisplay = () => {
    if (display === true) {
      setDisplay(false);
    }else{
      setDisplay(true);
    }
  };

  const contextValue = {
    MenuFunction,
    menu,
    MessageFunction,
    message,
    menu_title,
    display,
    ToggleDisplay
  };

  return (
    <contextApi.Provider value={contextValue}>
      {props.children}
    </contextApi.Provider>
  );
};

export default Contextprovider;
