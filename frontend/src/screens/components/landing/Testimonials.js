import React from "react";
import "./_landing.css";
import Rating from "../Rating";
import { Col, ListGroup, Row } from "react-bootstrap";
import { LandingSData } from "../../../data/LandingSData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="wrapper">
      <h2 className="title">Here's what our customers say</h2>
      <ListGroup variant="flush">
        {LandingSData.testimonials.map((testimonial, key) => {
          return (
            <ListGroup.Item key={key} style={{ padding: "1em 2em" }}>
              <Row>
                <Col md={4}>
                  {testimonial.name} <br /> <Rating rating={testimonial.rating} />
                </Col>
                <Col md={8}>{testimonial.description}</Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </section>
  );
};

export default Testimonials;
