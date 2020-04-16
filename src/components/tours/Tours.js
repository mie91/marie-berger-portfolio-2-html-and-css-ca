import React from 'react';
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import TourList from "./TourList";
import MainHeader from '../layout/MainHeader';
import SubHeader from '../layout/SubHeader';

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
            </Container>
         </div>
        
        </>
    );
}

export default Tours;