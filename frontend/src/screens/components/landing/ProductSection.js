import React from "react";
import "./_landing.css";
import "./product.css";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section id="products">
      <h2>Browse our brilliant products</h2>
      <div className="f wrapper row">
        <div className="col-md-6">
          <Link to="/product/1">
            <div className="card">
              <img
                src="./images/products/black-no-bg.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Comfi Specialist -- Black</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                  cupiditate reprehenderit quisquam distinctio soluta maxime libero
                  nostrum iusto accusantium! Eius.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/product/2">
            <div className="card">
              <img
                src="./images/products/blue-no-bg.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Comfi Specialist -- Blue</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                  cupiditate reprehenderit quisquam distinctio soluta maxime libero
                  nostrum iusto accusantium! Eius.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
