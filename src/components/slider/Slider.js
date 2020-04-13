
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col} from "react-bootstrap";
import Slide1 from "../../assets/images/slideImages/slide1.jpg";
import Slide4 from "../../assets/images/slideImages/slide4.jpg";
import Slide5 from "../../assets/images/slideImages/slide5.jpg";
import Slide7 from "../../assets/images/slideImages/slide7.jpg";
import Slide9 from "../../assets/images/slideImages/slide9.jpg";
import LogoTop from "../../assets/images/thelogo5.png";
import MainHeader from "../layout/MainHeader";



function Slider() {

    return (
        <Carousel className="carousel slide">
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide4}
                    alt="text"
                />
                <Carousel.Caption>
                    <Row className="sliderTextBox">
                        <Col className="c-caption-image">
                            <img  src={LogoTop}
                                alt="text"
                            />
                        </Col>
                        <Col>
                            <MainHeader title="Experience Paris in a ECO friendly way"/>
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
                    <MainHeader title="Enjoy our vast selection of tours "/>
                    <p>- Or contact us for a customized tour experience in the <i>City of Lights</i></p>
                    <div className="eyeCatchButton"> <a href="../tours">More info</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={Slide5}
                    alt="text"
                />
                <Carousel.Caption>
                    <MainHeader title='"Paris is always a good idea

"'/>
                    <p>- Audrey Hepburn</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider