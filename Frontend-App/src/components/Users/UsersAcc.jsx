import { contextApi } from "../../context/Contextprovider";
import { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "./UsersAcc.css";

const UsersAcc = () => {
  const {
    display,
    ToggleDisplay,
    setUsername,
    setEmail,
    setPassword,
    handleSubmit,
    username,
    email,
    password,
  } = useContext(contextApi);

  const [hasAccount, setHasAccount] = useState();

  const handletoast = () =>{
    toast.success('User Add Successfully !!!');
  };

  return display ? (
    <div className="users-container">
      <div className="user-acc-container">
        <div className="title-container">
          <h2>{hasAccount ? "Login" : "signup"}</h2>
          <button
            className="close-btn"
            onClick={() => {
              ToggleDisplay();
            }}
          >
            <FaTimes />
          </button>
        </div>
      
        <div className="inside-container">
          <form onSubmit={handleSubmit}>
            {/* Show name field only if creating account */}
            {!hasAccount && (
              <div className="input-box">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  required
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="name">Name</label>
              </div>
            )}

            <div className="input-box">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-box">
              <input
                type="password"
                id="password"
                placeholder=" "
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Forgot password for login only */}
            {hasAccount && (
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="submit-btn" onClick={() => handletoast()}>
              {hasAccount ? "Login" : "Create Account"}
            </button>
          </form>
        </div>

        {/* Toggle between login and signup */}
        <div className="switch-container">
          {hasAccount ? (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setHasAccount(false)}>Create one</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setHasAccount(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default UsersAcc;
