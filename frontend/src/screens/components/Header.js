import React from "react";
import "./header.css";
import "../styles/cta-button.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="f wrapper">
        <div className="brand">
          <Link to="/">
            <img src="/images/Comfi-logo1.png" alt="" />
          </Link>
        </div>
        <div className="f options">
          <Link to="/product/1">
            <button className="btn btn-cta">
              <span>Buy Now</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
