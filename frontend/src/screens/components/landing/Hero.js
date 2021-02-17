import React from "react";
import "./_landing.css";
import "./hero.css";
import "../../styles/cta-button.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="row wrapper f">
        <div className="col-md-6 hero-text">
          <h1>
            Protect your back with <span>Comfi</span> before it's too late...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatem
            placeat natus distinctio quas iure tenetur, dolorum quibusda.
          </p>
          <Link to="/product/1">
            <button className="btn btn-cta">
              <span>Buy Now</span>
            </button>
          </Link>
        </div>
        <div className="col-md-6 hero-img">
          <img src="./images/Comfi-Hero1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
