import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/">
            <h3 className="nav-logo">MyBlog</h3>
          </Link>

          <div>
            <Link to="/sign-in">
              <p className="nav-login">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
