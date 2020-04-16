import React from 'react';
import {Col, Row, Button, Container, Jumbotron} from "react-bootstrap";
import MainHeader from '../layout/MainHeader';
import SubHeader from '../layout/SubHeader';
import Slider from "../slider/Slider";





function Home() {
return (
<>
    <Slider></Slider>
    <div className="container-orange">
        <Container>
            <Row>
                <Col className="col-md-4">
                <div className="infoBox">
                    <MainHeader title="Experience" />
                    <p>Incididunt velit tempor non commodo eiusmod eiusmod excepteur ad magna esse cupidatat. Dolore
                        dolor dolore tempor laboris veniam esse deserunt et mollit.
                        Fugiat aliqua aliquip nulla.
                    </p>
                </div>
                </Col>
                <Col className="col-md-4">
                <div className="infoBox">
                    <MainHeader title="Values" />
                    <p>Cillum officia officia adipisicing exercitation ullamco aliqua ea mollit enim.Occaecat fugiat
                        deserunt reprehenderit officia. Non ut tempor proident anim nisi cupidatat aliquip ad pariatur
                        enim culpa deserunt id.. </p>


                </div>
                </Col>
                <Col className="col-lg-4">
                <div className="infoBox">
                    <MainHeader title="Satisfaction" />
                    <p>We strive to provide our customers with the best experiences and service, but don't just take it
                        from us - read the testimonials from our satisfied customers on sites such as Tripadvisor and
                        Yelp!</p>

                </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="container-sea">
        <Jumbotron className="ourBikes">
            <MainHeader title="Re-Cycle?" />
        </Jumbotron>
        <Container>
            <Row>
                <Col className="col-md-6">
                <div className="infoBox infoBox-sea">
                    <MainHeader title="Quality" />
                    <p>Est ad veniam culpa occaecat velit et et irure amet do cillum sit incididunt magna. Non enim
                        aliquip aliqua id laborum. Voluptate sit sunt ut ut enim deserunt mollit id officia est non
                        cillum.</p>

                </div>
                </Col>
                <Col className="col-md-6">
                <div className="infoBox infoBox-sea">
                    <MainHeader title="Environment" />
                    <p>Laboris et incididunt eu est cupidatat. Consectetur adipisicing sint tempor officia amet officia
                        pariatur esse sit do exercitation tempor nulla. Veniam excepteur voluptate culpa minim commodo
                        tempor exercitation velit pariatur amet. Officia sit cillum deserunt qui cupidatat proident et.
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
</>
);
}

export default Home;