import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Form,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./components/Rating";
import axios from "axios";
import StripeButton from "./components/StripeButton";
import productData from "../data/productData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles/ProductScreenStyles.css";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState(
    productData.find(({ _id }) => _id === match.params.id)
  );
  // const [quantityBlack, setQuantityBlack] = useState(1);
  // const [quantityBlue, setQuantityBlue] = useState(0);
  const [quantity, setQuantity] = useState({ total: 1, black: 1, blue: 0 });
  const [price, setPrice] = useState(product.price);

  const productIcons = {
    nextIcon: <FaArrowAltCircleRight className="productScreen__FaArrows" />,
    prevIcon: <FaArrowAltCircleLeft className="productScreen__FaArrows" />,
  };

  // console.log(productData.find(({ _id }) => _id === match.params.id));
  // console.log(product.image.map((image) => image));

  function changeQuantity(e) {
    e.preventDefault();
    console.log(e);
    if (e.className === "productScreen__blackInput") {
      setQuantity(
        ...{
          total: e.target.value + quantity.blue,
          black: e.target.value,
        }
      );
    } else {
      setQuantity(
        ...{
          total: e.target.value + quantity.black,
          blue: e.target.value,
        }
      );
    }
    setPrice(
      e.target.value > 1
        ? product.price * e.target.value ** 0.95
        : product.price
    );
  }

  // console.log(product.id === 2 && "sdfdsfdf");
  console.log(product._id === "2" && "sdfsdf");

  // useEffect(() => {
  //   // setProduct(productData.find(({ _id }) => _id === match.params.id)).then(
  //   //   setPrice(product.price)
  //   // );
  // }, []);

  return (
    <Container className="py-2">
      <Row>
        <Col md={7}>
          <Carousel
            nextIcon={productIcons.nextIcon}
            prevIcon={productIcons.prevIcon}
          >
            {console.log(product.image.map((image) => image))}
            {product.image.map((image, key) => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        {/* <Col md={7}>
          <Image src={product.image} alt={product.name} fluid />
        </Col> */}
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
          <div className="productScreen__colorContainer">
            {/* <div className="productScreen__black" /> */}
            <div
              className={`productScreen__black ${
                product._id === "2" && "deactive"
              }`}
            />
            <div
              className={`productScreen__blue ${
                product._id === "1" && "deactive"
              }`}
            />
          </div>
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
                  <Col>Quantity - Black</Col>
                  <Col>
                    <input
                      className="productScreen__blackInput"
                      min="0"
                      style={{ height: "25px", width: "60px", padding: "5px" }}
                      type="number"
                      value={quantity.black}
                      onChange={changeQuantity}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>Quantity - Blue</Col>
                  <Col>
                    <input
                      className="productScreen__blueInput"
                      min="0"
                      style={{ height: "25px", width: "60px", padding: "5px" }}
                      type="number"
                      value={quantity.blue}
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
                <StripeButton
                  quantity={quantity.total}
                  price={price / quantity.total}
                />
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
