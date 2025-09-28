import { createContext, useState } from "react";

export const contextApi = createContext(null);
const Contextprovider = (props) => {
  const [menu, setMenu] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [menu_title, setMenuTitle] = useState(" ");
  const [display, setDisplay] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    } else {
      setDisplay(true);
    }
  };

  const handleAnimationEnd = () => {
    setAnimation((prv) => !prv);
    setTimeout(() => {
      setIsCollapsed((prv) => !prv);
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Express API (not directly to MySQL!)
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    console.log(data); // server response
  };

  const contextValue = {
    MenuFunction,
    menu,
    MessageFunction,
    message,
    menu_title,
    display,
    ToggleDisplay,
    animation,
    isCollapsed,
    handleAnimationEnd,
    setName,
    setEmail,
    setPassword,
    handleSubmit
  };

  return (
    <contextApi.Provider value={contextValue}>
      {props.children}
    </contextApi.Provider>
  );
};

export default Contextprovider;
