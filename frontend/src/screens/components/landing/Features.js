import React from "react";
import "./_landing.css";
import "./features.css";

const Features = () => {
  return (
    <section id="features">
      <div className="f wrapper row">
        <div className="f feature col-md-3">
          <i className="fas fa-couch fa-3x"></i>
          <h3>Comfortable</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, iusto.
          </p>
        </div>
        <div className="f feature col-md-3">
          <i className="fas fa-wallet fa-3x"></i>
          <h3>Accesible</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, architecto.
          </p>
        </div>
        <div className="f feature col-md-3">
          <i className="fas fa-bolt fa-3x"></i>
          <h3>Effective</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, fugiat.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
