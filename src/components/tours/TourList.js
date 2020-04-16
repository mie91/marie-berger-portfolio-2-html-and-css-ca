import React from 'react';
import TourData from "../../assets/data/tours.json";
import { Button, Col, Container, Row } from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";

function TourList() {
    return (
        <div className="cardHolder">
            {TourData.map((tourDetail) => {
                return (
                    <div className="tourCard" key={tourDetail.id}>
                        <MainHeader title={tourDetail.title}/>
                        <Row>
                            <Col className="col-md-8">
                            <div className="smallDetails">
                                <p>{tourDetail.lenght}</p>
                                <p>{tourDetail.duration}</p>
                                <p>{tourDetail.price} euros</p>
                            </div>
                            <p>{tourDetail.description}</p>
                            </Col>
                            <Col className="col-md-4">
                                <SubHeader title="Sights"/>
                                <ul>
                                    {tourDetail.attractions.map(attraction =>
                                        <li>{attraction}</li>
                                    )}
                                </ul>

                            </Col>
                            <div className="mainButton"> <a href="/contact">Book Tour </a></div>
                            
                        </Row>
                        
                    </div>

                );
            })}
        </div>
    );
}

export default TourList;