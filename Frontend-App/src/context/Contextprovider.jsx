import { createContext, useState } from "react";

export const contextApi = createContext(null);
const Contextprovider = (props) => {
  const [menu, setMenu] = useState("");
  const [message, setMessage] = useState("");
  const [menu_title, setMenuTitle] = useState(" ");
  const [toggle, setToggle] = useState("");
  const [isOpen, setIsOpen] = useState("");
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

  const ToggleHandel = () => {
    if (toggle === "") {
      setToggle("clicked");
      setIsOpen("open");
    } else {
      setToggle("");
      setIsOpen("");
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
    ToggleHandel,
    toggle,
    isOpen,
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
