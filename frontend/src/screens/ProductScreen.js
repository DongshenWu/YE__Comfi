import React, { useState } from "react";
import { Container, Col, ListGroup, Row, Card, Carousel } from "react-bootstrap";
import Rating from "./components/Rating";
import StripeButton from "./components/StripeButton";
import productData from "../data/productData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles/ProductScreenStyles.css";
import Header from "./components/Header";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState(
    productData.find(({ _id }) => _id === match.params.id)
  );
  const [quantity, setQuantity] = useState({ total: 1, black: 1, blue: 0 });
  const [price, setPrice] = useState(product.price);

  const productIcons = {
    nextIcon: <FaArrowAltCircleRight className="productScreen__FaArrows" />,
    prevIcon: <FaArrowAltCircleLeft className="productScreen__FaArrows" />,
  };

  function changeQuantity(e) {
    e.preventDefault();

    const eValue = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value);

    if (e.target.className === "productScreen__blackInput") {
      setQuantity((prev) => ({
        ...prev,
        total: eValue + prev.blue,
        black: eValue,
      }));

      setPrice(
        eValue + quantity.blue > 1
          ? product.price * (eValue + quantity.blue) ** 0.95
          : eValue + quantity.blue === 0
          ? 0
          : product.price
      );

      console.log(eValue, quantity, product.price * (eValue + quantity.blue) ** 0.95);
    } else {
      setQuantity((prev) => ({
        ...prev,
        total: eValue + prev.black,
        blue: eValue,
      }));
      setPrice(
        eValue + quantity.black > 1
          ? product.price * (eValue + quantity.black) ** 0.95
          : eValue + quantity.black === 0
          ? 0
          : product.price
      );
    }
  }

  function colorChange(newId) {
    console.log(newId);
    const newProduct = productData.find(({ _id }) => _id === newId);
    console.log(newProduct);
    setProduct(newProduct);
  }

  return (
    <>
      <Header p={window.location.pathname} />
      <Container className="py-2">
        <Row style={{ paddingTop: "10rem" }}>
          <Col md={7}>
            <Carousel nextIcon={productIcons.nextIcon} prevIcon={productIcons.prevIcon}>
              {product.image.map((image, key) => (
                <Carousel.Item>
                  <img className="d-block w-100" src={image} alt="" />
                </Carousel.Item>
              ))}
            </Carousel>
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
            <div className="productScreen__colorContainer">
              <div
                className={`productScreen__black ${product._id === "2" && "deactive"}`}
                // onClick={product._id === "2" && colorChange("1")}
                onClick={() => {
                  product._id === "2" && colorChange("1");
                }}
              />
              <div
                className={`productScreen__blue ${product._id === "1" && "deactive"}`}
                // onClick={() => colorChange("2")}
                onClick={() => {
                  product._id === "1" && colorChange("2");
                }}
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
                        max="30"
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
                        max="30"
                        style={{ height: "25px", width: "60px", padding: "5px" }}
                        type="number"
                        value={quantity.blue}
                        onChange={changeQuantity}
                        // onInvalid
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Unit Price:</Col>
                    <Col>
                      {quantity.total > 0 && (
                        <strong style={{}}>
                          {Math.round((100 * price) / quantity.total) / 100}
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
                <ListGroup.Item>
                  <StripeButton quantity={quantity} price={price / quantity.total} />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
