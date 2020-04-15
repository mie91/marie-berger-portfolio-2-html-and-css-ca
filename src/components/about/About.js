import React, { useRef } from "react";
import {Container, Col, Row, Jumbotron, Image} from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import IconUp from "../../assets/images/icons/icon_up.png";
import Bike1 from "../../assets/images/resized/bike_1.jpg";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <div className="to-top-container">
    <button className="return-top-btn" onClick={ScrollToTop}><img className="btnIcon" src={IconUp} alt="Up arrow" />
    </button>
    </div>;
};

function About() {
    const refA = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <>
            <div className="container-orange">
                <Jumbotron className="aboutUsJumbo">
                    <MainHeader title="About Us" />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="scroll-link-container">
                                <button className="scroll-link-btn" onClick={() => scrollToSection(refA)}>History</button>
                                <button className="scroll-link-btn" onClick={() => scrollToSection(refB)}>Values</button>
                                <button className="scroll-link-btn" onClick={() => scrollToSection(refC)}>Goals</button>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col className="col-md-6">
                            <div className="infoBox">
                                <MainHeader title="History" />
                                <p>Incididunt velit tempor non commodo eiusmod eiusmod excepteur ad magna esse cupidatat. Dolore
                                dolor dolore tempor laboris veniam esse deserunt et mollit.
                                Fugiat aliqua aliquip nulla.Deserunt laborum pariatur deserunt commodo ea laborum ipsum culpa do non culpa. Eu aute et incididunt cupidatat labore excepteur exercitation velit reprehenderit.
                                </p>
                                <p>Sint eiusmod et exercitation excepteur incididunt officia cupidatat veniam. Ea officia ullamco sit non laborum culpa elit nostrud officia consectetur excepteur. Ut non commodo aute cupidatat duis ullamco.</p>
                                <p>Et ad deserunt ullamco excepteur tempor consequat ad enim aliqua. Quis officia ex do exercitation non. Excepteur laborum do Lorem elit eiusmod sunt. Do fugiat ullamco amet elit deserunt consectetur minim mollit officia. Magna culpa eiusmod in in enim in. Eiusmod esse aliquip occaecat exercitation.</p>  
                            </div>  
                        </Col>    
                        <section ref={refA} />
                        <Col className="col-md-6">
                            <div className="infoBox">
                                <MainHeader title="Information"/>
                                <SubHeader title= "Other locations"/>
                                <ul className="locations">
                                    <li><div className="mainButton"> <a href="/">New York</a></div></li>
                                    <li><div className="mainButton"> <a href="/">London</a></div></li>
                                    <li><div className="mainButton"> <a href="/">Copenhagen</a></div></li>
                            </ul>
                            </div>  
                        </Col>         
                    </Row>
                    
                </Container>
            </div>

        </>
    );
}

export default About;