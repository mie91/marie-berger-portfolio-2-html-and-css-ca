import React from 'react';
import {Col, Row, Button} from "react-bootstrap";
import MainHeader from '../layout/MainHeader';
import SubHeader from '../layout/SubHeader';
import Slider from "../slider/Slider";



function Home() {
    return (
        <>
        <Slider></Slider>
        <div className="container-bright">
            <Row>
                <Col className="sm-col-12">
                    <div className="infoBox">
                        <MainHeader title="Header"/>
                        <p>Incididunt velit tempor non commodo eiusmod eiusmod excepteur ad magna esse cupidatat. Dolore dolor dolore tempor laboris veniam esse deserunt et mollit.</p>
                    </div> 
                </Col>
                <Col className="sm-col-12">
                    <div className="infoBox">
                        <MainHeader title="Our Values"/>
                        <p>Cillum officia officia adipisicing exercitation ullamco aliqua ea mollit enim. Dolor irure eiusmod mollit minim aute magna aute nostrud magna fugiat proident.</p>
                            <a className="mainButton" href="../about">Read More</a>
                    </div> 
                </Col>
                <Col className="sm-col-12">
                    <div className="infoBox">
                        <MainHeader title="Header"/>
                        <p>Anim officia magna pariatur eu nostrud. Duis eiusmod sint laboris officia officia officia ut duis eiusmod aliqua sit ad sint. Lorem proident qui enim mollit cillum veniam voluptate id pariatur..</p>
                    </div> 
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Home;