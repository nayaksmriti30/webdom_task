import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, Button, Col, Row, ListGroup } from "react-bootstrap";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer text-white">
        <Container>
          <h4 className="text-center">Join Our Newsletter</h4>
          <Form className="d-flex align-items-center">
            <Form.Group className="w-100 " controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="rounded-5 p-3 px-4"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className=" green_btn  border-0"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>

      <div className="footer2 text-white">
        <Container>
          <Row className="gy-4">
            <Col lg={5} className="text-start ">
              <Link to="" className="footer_logo">
                <img alt="item1" src="/images/footer_logo.png" />
              </Link>
              <h3>Join the Family</h3>
              <p>
                Playing with ToyBox, your child will be able to develop
                imagination and excellent motor skills.
              </p>
              <h4>
                Email to info@toybox.com{" "}
                <span className="d-block mt-3">Call or text 578-356-3579</span>
              </h4>
            </Col>
            <Col lg={2} md={4} sm={6}>
              <h5>Shop </h5>
              <ListGroup>
                <Link to="">
                  <ListGroup.Item>Puzzle</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Toy Car Garages</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Dollhouses</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Stepping Stones</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Kitchen Helper Tower</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Step Stool</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Montesorri</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Gift Cards</ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>
            <Col lg={2} md={4} sm={6}>
              {" "}
              <h5>Help</h5>
              <ListGroup>
                <Link to="">
                  <ListGroup.Item>FAQ</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Shipping and Returns</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Careers</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Trade Program</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Press</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Privacy Policy</ListGroup.Item>
                </Link>
                <Link to="">
                  <ListGroup.Item>Privacy Policy</ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>

            <Col lg={3} md={4}>
              {" "}
              <div className="brand_icon">
                <Link to="">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="">
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="">
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <h6 className="text-center pt-xl-5 mt-xl-5 pt-4">
          ToyBox 2023. All rights reserved.
        </h6>
      </div>
    </>
  );
}

export default Footer;
