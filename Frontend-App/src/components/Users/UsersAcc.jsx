import { useState, useContext } from "react";
import { contextApi } from "../../context/Contextprovider";
import { FaTimes } from "react-icons/fa";
import "./UsersAcc.css";

const UsersAcc = () => {
  const { display, ToggleDisplay, setName, setEmail, setPassword, handleSubmit } = useContext(contextApi);

  const [hasAccount, setHasAccount] = useState();

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
          <form onSubmit={() => handleSubmit() }>
            {/* Show name field only if creating account */}
            {!hasAccount && (
              <div className="input-box">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  required
                  name="name"
                  onChange={(e) => setName(e.target.value)}
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

            <button type="submit" className="submit-btn">
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
