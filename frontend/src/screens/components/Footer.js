import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <i className="fas fa-envelope fa-lg"></i>
        <i className="fab fa-tiktok fa-lg"></i>
        <i className="fab fa-instagram fa-lg"></i>
        <i className="fab fa-facebook-f fa-lg"></i>
      </div>
      <p>&copy; Comfi 2021</p>
    </footer>
  );
};

export default Footer;
