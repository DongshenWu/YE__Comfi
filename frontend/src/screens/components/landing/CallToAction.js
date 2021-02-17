import React from "react";
import "./_landing.css";
import "./call-to-action.css";
import "../../styles/cta-button.css";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="call-to-action">
      <div className="wrapper">
        <h1>Try it now and you would not regret it!</h1>
        <Link to="/product/1">
          <button className="btn btn-cta">
            <span>Buy Now</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
