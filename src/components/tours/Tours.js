import React, { useRef } from "react";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import TourList from "./TourList";
import MainHeader from '../layout/MainHeader';
import SubHeader from '../layout/SubHeader';
import IconUp from "../../assets/images/icons/icon_up.png";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <div className="to-top-container">
        <button className="return-top-btn" onClick={ScrollToTop}><img className="btnIcon" src={IconUp} alt="Up arrow" />
        </button>
    </div>;
};



function Tours (){

    return (
        <>
         <div className="container-orange">
            <Jumbotron className="theToursJumbo">
            <MainHeader title="Tours" />
            </Jumbotron>
            <Container>
                <Row>
                    <Col className="col-md-12">
                        <div className="infoBox">
                            <MainHeader title="Experience our tours!" />
                             <p>Est ad veniam culpa occaecat velit et et irure amet do cillum sit incididunt magna. Non enim
                             aliquip aliqua id laborum. Voluptate sit sunt ut ut enim deserunt mollit id officia est non cillum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
         </div>
         <div className="container-sea">
             <Container>
                <Row>
                    <Col className="col-md-12">
                        <TourList/>
                    </Col>
                </Row>
                    <BackToTop />
            </Container>
         </div>
            <div className="container-teal">
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="infoBox infoBox-teal">
                                <MainHeader title="Customized Tours" />
                                <p>Veniam ipsum ex sit culpa cillum fugiat laborum culpa duis incididunt adipisicing. Ex labore dolor deserunt sint quis sit ipsum in fugiat. Deserunt velit qui do eu velit. Minim tempor ullamco ullamco mollit tempor nulla anim officia. Incididunt pariatur laboris ipsum duis in est.</p>
                                <div className="eyeCatchButton"> <a href="/contact">Contact us</a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        
        </>
    );
}

export default Tours;