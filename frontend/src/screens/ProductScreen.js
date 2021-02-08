import React, { useState, useEffect } from "react";
import { Container, Col, ListGroup, Row, Image, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./components/Rating";
import axios from "axios";
import StripeButton from "./components/StripeButton";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();

  function changeQuantity(e) {
    e.preventDefault();
    setQuantity(e.target.value);
    setPrice(e.target.value > 1 ? product.price * e.target.value ** 0.95 : product.price);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
      setPrice(data.price);
    };
    fetchProduct();
  }, [match]);

  return (
    <Container className="py-2">
      <Row>
        <Col md={7}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={5} className="my-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{Math.round(100 * price) / 100}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <input
                      min="0"
                      style={{ width: "60px", padding: "5px" }}
                      type="number"
                      value={quantity}
                      onChange={changeQuantity}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Unit Price:</Col>
                  <Col>
                    {quantity > 0 && (
                      <strong style={{}}>
                        {Math.round((100 * price) / quantity) / 100}
                      </strong>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Row>
                  <Col>Quantity:</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <StripeButton quantity={quantity} price={price / quantity} />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
