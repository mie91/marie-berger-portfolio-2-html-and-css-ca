import React, { useRef } from "react";
import {Container, Col, Row, Jumbotron, Image} from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import IconUp from "../../assets/images/icons/icon_up.png";
import Bike1 from "../../assets/images/resized/bike_1.jpg";
import Employees1 from "../../assets/images/resized/employees.jpg";
import Safety2 from "../../assets/images/resized/safety2.jpg";

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
                    <button className="scroll-link-btn" onClick={()=> scrollToSection(refA)}>History</button>
                    <button className="scroll-link-btn" onClick={()=> scrollToSection(refB)}>Values</button>
                    <button className="scroll-link-btn" onClick={()=> scrollToSection(refC)}>Goals</button>
                </div>
                </Col>
            </Row>
            <Row>
                
                <Col className="col-md-6">
                <div className="infoBox">
                    <MainHeader title="History" />
                    <p>Incididunt velit tempor non commodo eiusmod eiusmod excepteur ad magna esse cupidatat. Dolore
                        dolor dolore tempor laboris veniam esse deserunt et mollit.
                        Fugiat aliqua aliquip nulla.Deserunt laborum pariatur deserunt commodo ea laborum ipsum culpa do
                        non culpa. Eu aute et incididunt cupidatat labore excepteur exercitation velit reprehenderit.
                    </p>
                    <p>Sint eiusmod et exercitation excepteur incididunt officia cupidatat veniam. Ea officia ullamco
                        sit non laborum culpa elit nostrud officia consectetur excepteur. Ut non commodo aute cupidatat
                        duis ullamco.</p>
                    <p>Et ad deserunt ullamco excepteur tempor consequat ad enim aliqua. Quis officia ex do exercitation
                        non. Excepteur laborum do Lorem elit eiusmod sunt. Do fugiat ullamco amet elit deserunt
                        consectetur minim mollit officia. Magna culpa eiusmod in in enim in. Eiusmod esse aliquip
                        occaecat exercitation.</p>
                </div>
                </Col>
                <section ref={refA} />
                <Col className="col-md-6">
                <div className="infoBox">
                    <MainHeader title="Location" />

                    <SubHeader title="Our Offices" />
                    <ul>
                        <li>Address : 15 Rue de Monttessuy, 75007 Paris, France</li>
                        <li>Phone : (+33) 98765432</li>
                    </ul>

                    <SubHeader title="Other locations" />
                    <ul className="basicList">
                        <li>
                            <div className="mainButton"> <a href="/">Prague</a></div>
                        </li>
                        <li>
                            <div className="mainButton"> <a href="/">London</a></div>
                        </li>
                        <li>
                            <div className="mainButton"> <a href="/">Copenhagen</a></div>
                        </li>
                    </ul>
                </div>
                </Col>
            </Row>
                <div className="d-flex justify-content-center">
                    <Image fluid className="aboutImage" src={Employees1} alt="Employees at Re-Cycle office" />
                </div>
        </Container>
    </div>
        <div className="container-sea container-border">
            <Container>

                <Row>
                   
                    <Col className="col-md-6">
                        <div className="infoBox infoBox-sea">
                            <MainHeader title="Values" />
                            <p>Esse veniam laborum commodo velit. Ut nisi eu ipsum fugiat tempor dolor. Dolor tempor pariatur amet exercitation quis tempor. Velit adipisicing nisi irure deserunt velit id labore Lorem eu non culpa.</p>
                            <p>Culpa incididunt sint et Lorem eiusmod eu est anim aliqua sit anim. Eiusmod in reprehenderit do consequat nostrud nostrud excepteur in culpa aliqua.</p>
                            <p>Eu enim dolore in nostrud dolore ex aute ea. Ullamco ipsum voluptate exercitation id proident anim. Ad pariatur minim officia ex quis nostrud est pariatur aliqua et exercitation consectetur consectetur tempor.</p>
                        </div>
                    </Col>
                    <section ref={refB} />
                    <Col className="col-md-6">
                        <div className="infoBox infoBox-sea">
                            <MainHeader title="Safety" />
                        
                            <ul>
                                <li>Reprehenderit irure sit deserunt adipisicing veniam.</li>
                                <li>Cillum laborum aute nulla ad ad. In adipisicing proident sit esse nostrud.</li>
                                <li>Ullamco Lorem tempor sunt nostrud amet labore sit ut consequat. Consequat aute commodo officia ipsum ea. Mollit pariatur proident exercitation aliquip nisi officia dolor aute aute.</li>
                                <li>Aliquip Lorem eu laboris cupidatat irure cupidatat sint duis laborum elit est. Non ad culpa minim nisi quis reprehenderit labore. Aute cupidatat duis cillum minim qui nulla consectetur tempor consequat minim mollit. </li>
                                <li>Aute ex quis cupidatat ut tempor officia.</li>
                                <li>Laboris eu et consectetur nostrud.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Image fluid className="aboutImage" src={Safety2} alt="Lady with a bike helmet on" />
                </div>
            </Container>
        </div>
        <div className="container-teal container-border">
            <Container>
                <Row>
                    <Col className="col-md-6">
                        <div className="infoBox infoBox-teal">
                            <MainHeader title="Goals" />
                            <p>Esse veniam laborum commodo velit. Ut nisi eu ipsum fugiat tempor dolor. Dolor tempor pariatur amet exercitation quis tempor. Velit adipisicing nisi irure deserunt velit id labore Lorem eu non culpa.</p>
                            <p>Culpa incididunt sint et Lorem eiusmod eu est anim aliqua sit anim. Eiusmod in reprehenderit do consequat nostrud nostrud excepteur in culpa aliqua.</p>
                        </div>
                    </Col>
                    <section ref={refC} />
                    <Col className="col-md-6">
                        <div className="infoBox infoBox-teal">
                            <MainHeader title="Collaborators" />

                            <ul>
                                <li>Reprehenderit irure sit deserunt adipisicing veniam.</li>
                                <li>Cillum laborum aute nulla ad ad. In adipisicing proident sit esse nostrud.</li>
                                <li>Ullamco Lorem tempor sunt nostrud amet labore sit ut consequat. Consequat aute commodo officia ipsum ea. Mollit pariatur proident exercitation aliquip nisi officia dolor aute aute.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <BackToTop/>
            </Container>
            
        </div>

</>
);
}

export default About;