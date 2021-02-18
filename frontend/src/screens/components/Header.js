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
            <a href="#about" className="op">
              <p>About</p>
            </a>
            <a href="#products" className="op">
              <p>Products</p>
            </a>
            <a href="#testimonials" className="op">
              <p>Testimonials</p>
            </a>
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
