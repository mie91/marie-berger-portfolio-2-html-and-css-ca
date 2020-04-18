import React, { useRef } from "react";
import {Container, Col, Row, Jumbotron, Image} from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import Employees1 from "../../assets/images/resized/employees.jpg";
import Safety2 from "../../assets/images/resized/safety2.jpg";
import Goals1 from "../../assets/images/resized/goals1.jpg";
import BackToTop from "../layout/BackToTop";

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
                                    <p>Enim nostrud cillum amet fugiat reprehenderit esse do anim reprehenderit culpa. Nisi ut consectetur incididunt eu et duis pariatur ipsum esse tempor nisi cillum elit dolor. Enim magna mollit nisi non est sunt incididunt minim et sit tempor cupidatat duis est. Amet mollit qui ullamco proident qui proident sit eiusmod. Dolor amet laborum eiusmod occaecat dolore sit esse irure do elit occaecat dolore irure cupidatat. Laboris officia voluptate sint commodo ut ea.</p>
                                </div>
                            </Col>
                            <section ref={refC} />
                            <Col className="col-md-6">
                                <div className="infoBox infoBox-teal">
                                    <MainHeader title="Collaborators" />
                                    <p>Et elit enim non minim mollit duis nulla cupidatat. Non nulla ex consequat quis consectetur laborum nulla consequat consectetur nostrud. Ad incididunt consectetur quis laborum excepteur deserunt qui proident. Esse mollit laboris exercitation incididunt nulla aliquip aliqua tempor. Ut reprehenderit excepteur et et labore ad non quis exercitation officia qui. Quis labore nostrud exercitation minim Lorem tempor culpa veniam. Magna est commodo duis ea voluptate fugiat voluptate consectetur quis labore ipsum sunt qui nulla.</p>
                                    <ul className="basicList">
                                        <li>
                                            <div className="mainButton"> <a href="/">Partner 1 </a></div>
                                        </li>
                                        <li>
                                            <div className="mainButton"> <a href="/">Partner 2</a></div>
                                        </li>
                                        <li>
                                            <div className="mainButton"> <a href="/">Partner 3</a></div>
                                        </li>
                                    </ul>
                                    <SubHeader title="Want to collaborate with us?"/>
                                    <div className="eyeCatchButton"> <a href="/contact">Contact us here!</a></div>
                                </div>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Image fluid className="aboutImage" src={Goals1} alt="Photo manipulation of a tree" />
                        </div>
                        <BackToTop/>
                    </Container>
                </div>
            </>
        );
    }

export default About;