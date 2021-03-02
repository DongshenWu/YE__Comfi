import React from "react";
import "./header.css";
import "../styles/cta-button.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const pathname = props.p;
  return (
    <header>
      <div className="f wrapper">
        <div className="brand">
          <Link to="/">
            <img src="/images/Comfi-logo1.png" alt="" />
          </Link>
        </div>
        {pathname === "/" ? (
          <div className="f options">
            <div className="header-wrap">
              <a href="#about" className="op">
                About
              </a>
            </div>
            <div className="header-wrap">
              <a href="#products" className="op">
                Products
              </a>
            </div>
            <div className="header-wrap">
              <a href="#testimonials" className="op">
                Testimonials
              </a>
            </div>

            <Link to="/product/1">
              <button className="btn btn-cta">
                <span>Buy Now</span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="f options">
            <Link to="/">
              <button className="btn btn-cta">
                <span>Home</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
