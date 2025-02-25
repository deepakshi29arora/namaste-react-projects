import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
