import React from "react";
import "./_landing.css";
import "./about.css";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <Row>
          <Col md={4}>
            <img src="./images/man.jpg" alt="" className="w-100" />
          </Col>
          <Col md={8} className="m-auto">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde natus
              voluptates esse maiores, et quibusdam inventore nam non nisi at ipsam
              praesentium eum fuga iure in commodi quasi nihil sit quis quidem porro
              soluta illum. Sunt ipsum excepturi ex reiciendis deleniti odit adipisci
              recusandae exercitationem, earum ipsam tempora ad?Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
