
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col} from "react-bootstrap";
import Slide1 from "../../assets/images/slideImages/slide1.jpg";
import Slide4 from "../../assets/images/slideImages/slide4.jpg";
import Slide5 from "../../assets/images/slideImages/slide5.jpg";
import LogoTop from "../../assets/images/thelogo5.png";



function Slider() {

    return (
        <Carousel className="carousel slide carousel-fade">
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide5}
                    alt="text"
                />
                <Carousel.Caption>
                    <Row>
                        <Col>
                            <img className="c-caption-image"
                                src={LogoTop}
                                alt="text"
                            />
                            <h3>Experience PARIS with us!</h3>
                            
                        </Col>
                        <Col>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide4}
                    alt="text"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide1}
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