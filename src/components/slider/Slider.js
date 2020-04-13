
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col} from "react-bootstrap";
import Slide1 from "../../assets/images/slideImages/slide1.jpg";
import Slide4 from "../../assets/images/slideImages/slide4.jpg";
import Slide5 from "../../assets/images/slideImages/slide5.jpg";
import Slide7 from "../../assets/images/slideImages/slide7.jpg";
import Slide9 from "../../assets/images/slideImages/slide9.jpg";
import LogoTop from "../../assets/images/thelogo5.png";



function Slider() {

    return (
        <Carousel className="carousel slide">
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide4}
                    alt="text"
                />
                <Carousel.Caption>
                    <Row>
                        <Col className="c-caption-image">
                            <img  src={LogoTop}
                                alt="text"
                            />
                        </Col>
                        <Col>
                            <h3>Experience Paris in a ECO friendly way</h3>
                            <p>Find the perfect tour for you!</p>
                            <div className="eyeCatchButton"> <a href="../tours">Tours</a>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide9}
                    alt="text"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide5}
                    alt="text"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider