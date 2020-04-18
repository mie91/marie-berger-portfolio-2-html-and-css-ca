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
                        <Row>
                            <Col className="col-md-8">
                                <MainHeader title={tourDetail.title} />
                            <div className="smallDetails">
                                <p>{tourDetail.lenght}</p>
                                <p>{tourDetail.duration}</p>
                                <p class="eyeCatchGreen">{tourDetail.price} euros /per</p>
                            </div>
                            <p>{tourDetail.description}</p>
                                <div className="eyeCatchButton"> <a href="/contact">Book Tour </a></div>
                            </Col>
                            <Col className="col-md-4">
                                <SubHeader title="Sights"/>
                                <div className="sightList">
                                    <ul>
                                        {tourDetail.attractions.map(attraction =>
                                            <li>{attraction}</li>
                                        )}
                                    </ul>
                                </div>
                            </Col>                            
                        </Row>                        
                    </div>
                );
            })}
        </div>
    );
}

export default TourList;