import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import TourList from "./TourList";

function Tours (){
    return (
        <div className="tours-bg">
            <Container>
            <h1>Tours</h1>
                    <TourList/>     
            </Container>
        </div>
    );
}

export default Tours;