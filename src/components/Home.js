import React, { useState, useEffect } from "react";
import {
  Container,
  NavDropdown,
  Nav,
  Navbar,
  Row,
  Col,
  Tab,
  Tabs,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 3,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="top_bar text-center py-2">
        <Container fluid>
          <p className="mb-0 text-white">
            Free Shipping On All US Continental Orders
          </p>
        </Container>
      </div>
      <Header className="mb-2" />

      <Container fluid>
        <div className="main_banner">
          <h2>
            Play all day. <span className="d-block">Funny everywhere!</span>
          </h2>
          <p className="mb-4 mb-xl-5">
            ToyBox is not just a toy - it’s a excellent tool for educating your
            child.
          </p>
          <Link
            to=""
            className="rounded-5 text-white px-5 py-3 inline-block purple_btn "
          >
            See More
          </Link>
        </div>

        <div className="mt-lg-5 mt-4 position-relative play_set">
          <div className="slider_content text-center mb-4 mb-md-5">
            <h2>Ready to play sets</h2>
            <h4>
              ToyBox is not just a toy - it’s a excellent tool
              <br /> for educating your child.
            </h4>
          </div>

          <div className="slider_part">
            <Slider {...settings}>
              <div className="slider">
                <div className=" slider_caption ">
                  <img alt="slider1" src="/images/garrage.png" />

                  <h3 className="">Big Toy Garage</h3>

                  <p className="mb-4">
                    By placing the cars in the cells, the child will learn
                    dimensions and how to compare things
                  </p>
                  <Link
                    to=""
                    className="bg-orange text-white rounded-5 px-4 py-2 "
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="slider">
                <div className=" slider_caption ">
                  <img alt="slider1" src="/images/garrage.png" />

                  <h3 className="">Big Toy Garage</h3>

                  <p className="mb-4">
                    By placing the cars in the cells, the child will learn
                    dimensions and how to compare things
                  </p>
                  <Link
                    to=""
                    className="bg-orange text-white rounded-5 px-4 py-2 "
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="slider">
                <div className=" slider_caption ">
                  <img alt="slider1" src="/images/garrage.png" />

                  <h3 className="">Big Toy Garage</h3>

                  <p className="mb-4">
                    By placing the cars in the cells, the child will learn
                    dimensions and how to compare things
                  </p>
                  <Link
                    to=""
                    className="bg-orange text-white rounded-5 px-4 py-2 "
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="slider">
                <div className=" slider_caption ">
                  <img alt="slider1" src="/images/garrage.png" />

                  <h3 className="">Big Toy Garage</h3>

                  <p className="mb-4">
                    By placing the cars in the cells, the child will learn
                    dimensions and how to compare things
                  </p>
                  <Link
                    to=""
                    className="bg-orange text-white rounded-5 px-4 py-2 "
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="slider">
                <div className=" slider_caption ">
                  <img alt="slider1" src="/images/garrage.png" />

                  <h3 className="">Big Toy Garage</h3>

                  <p className="mb-4">
                    By placing the cars in the cells, the child will learn
                    dimensions and how to compare things
                  </p>
                  <Link
                    to=""
                    className="bg-orange text-white rounded-5 px-4 py-2 "
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
      <div className="skills_section">
        <Container fluid>
          <div className="text-center mb-4 mb-md-5">
            <h2>
              Development of{" "}
              <span className="text-bg position-relative">imagination</span>{" "}
              <br />
              and{" "}
              <span className="text-bg position-relative">motor skills</span>
            </h2>
            <h4>
              ToyBox is not just a toy - it’s a excellent tool for educating
              your child.{" "}
            </h4>
            <Link
              to=""
              className="green_btn rounded-5 text-white px-5  py-3 inline-block"
            >
              See More
            </Link>
          </div>
          <Row className="g-4 g-md-5">
            <Col md={7}>
              <div className="item_section position-relative">
                <img alt="item1" src="/images/items1.png" className="w-100" />
                <div className="position-absolute caption">
                  <h3>Big Toy Garage</h3>
                  <h4>Adding a name makes the toy special</h4>
                  <Link
                    to=""
                    className="orange_btn rounded-5 text-white px-5  py-3 inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="item_section position-relative">
                <img alt="item2" src="/images/items2.png" className="w-100" />
                <div className="position-absolute caption">
                  <h3>Big Toy Garage</h3>
                  <h4>Adding a name makes the toy special</h4>
                  <Link
                    to=""
                    className="orange_btn rounded-5 text-white px-5  py-3 inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="item_section position-relative">
                <img alt="item3" src="/images/items3.png" className="w-100" />
                <div className="position-absolute caption">
                  <h3>Big Toy Garage</h3>
                  <h4>Adding a name makes the toy special</h4>
                  <Link
                    to=""
                    className="orange_btn rounded-5 text-white px-5  py-3 inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="item_section position-relative">
                <img alt="item3" src="/images/items4.png" className="w-100" />
                <div className="position-absolute caption">
                  <h3>Big Toy Garage</h3>
                  <h4>Adding a name makes the toy special</h4>
                  <Link
                    to=""
                    className="orange_btn rounded-5 text-white px-5  py-3 inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="circle_nature">
        <Container fluid>
          <Row classname="gy-4 gy-sm-0">
            <Col sm={4}>
              <div className="box text-center">
                <img src="../images/circle1.png" alt="" />
                <h4>Natural</h4>
                <p>
                  ToyBox is not just a toy - it’s a excellent tool for educating
                  your child.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="box text-center">
                <img src="../images/circle2.png" alt="" />
                <h4>Sustainable Materials</h4>
                <p>
                  ToyBox is not just a toy - it’s a excellent tool for educating
                  your child.
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="box text-center">
                <img src="../images/circle3.png" alt="" />
                <h4>Eco-Friendly</h4>
                <p>
                  ToyBox is not just a toy - it’s a excellent tool for educating
                  your child.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <a
              class="green_btn rounded-5 text-white px-5  py-3 inline-block"
              href="/"
            >
              See More
            </a>
          </div>
        </Container>
      </div>

      <div className="toybox text-start py-lg-5 py-4">
        <Container fluid>
          <div className="text-center toybox_head">
            <img alt="" src="/images/blue_logo.png" />
            <h2>Why Toybox?</h2>
          </div>
          <Row>
            <Col lg={6} className="py-2">
              <h3>Exploration of space and numbers</h3>
              <h4>
                ToyBox is not just a toy - it’s a excellent tool for educating
                your child.
              </h4>
              <ul className="list-unstyled">
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  By placing the cars in the cells, the child will learn
                  dimensions and how to compare things
                </li>
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  The child will learn colors by using differently colored cars
                </li>
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  The garage will be an excellent assistant in the study of
                  counting
                </li>
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  The personalized garage will help your child to remember what
                  his/her name looks like and to start learning letters
                </li>
              </ul>
            </Col>
            <Col lg={6} className="mb-lg-5">
              <img alt="" src="/images/toybox1.png" />
            </Col>
            <Col lg={6} className="mt-4">
              {" "}
              <img alt="" src="/images/toybox2.png" />
            </Col>
            <Col lg={6} className="p-lg-5 pt-3">
              <h3 className="mb-3">Development of imagination</h3>
              <h4>
                Playing with ToyBox, your child will be able to develop
                imagination and excellent motor skills in hands, as the garage
                has different levels, cells of various sizes, and slopes of
                varying lengths.
              </h4>
              <ul className="list-unstyled m-0">
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  Learning role-playing games
                </li>
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  The garage can be painted with crayons or paints
                </li>
                <li className="my-2">
                  <img alt="" src="/images/star_red.png" className="me-2" />
                  ToyBox can become not only a home for cars but also for
                  animals, dolls and other toys
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="stripe py-2">
        <Container fluid>
          <ul className="list-unstyled d-lg-flex justify-content-center m-0">
            <li className="me-lg-5 me-2">
              <img alt="" src="/images/star_white.png" className="me-2" />
              Learning role-playing games
            </li>
            <li className="me-lg-5 me-2">
              <img alt="" src="/images/star_white.png" className="me-2" />
              The garage can be painted with crayons or paints
            </li>
            <li className="me-lg-5 me-2">
              <img alt="" src="/images/star_white.png" className="me-2" />
              ToyBox can become not only a home for cars but also for animals
            </li>
            <li className="me-lg-5 me-2">
              <img alt="" src="/images/star_white.png" className="me-2" />
              By placing the cars in the cells, the child will learn{" "}
            </li>
          </ul>
        </Container>
      </div>
      <div className="insta py-lg-5 py-4">
        <Container fluid>
          <h4 className=" text-center mb-lg-5 mb-3">@toybox on Instagram</h4>
          <div className="d-flex flex-wrap justify-content-lg-between justify-content-center  align-items-center">
            <img
              alt=""
              src="/images/insta1.png"
              className="m-lg-0 m-md-4 m-2"
            />
            <img
              alt=""
              src="/images/insta2.png"
              className="m-lg-0 m-md-4 m-2"
            />
            <img
              alt=""
              src="/images/insta3.png"
              className="m-lg-0 m-md-4 m-2"
            />
            <img
              alt=""
              src="/images/insta4.png"
              className="m-lg-0 m-md-4 m-2"
            />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
<script
  type="text/javascript"
  src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.9.0/slick/slick.min.js"
></script>;

export default Home;
