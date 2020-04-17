import React, { useState } from "react";
import { Button, Col, Form, Container, Row, Jumbotron } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import ErrorMessage from "../contact/ErrorMessage";


const telephoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("Required"),

    lastName: yup
        .string()
        .required("Required"),

    telephoneNumber: yup
        .string().matches(telephoneRegExp, "The telephone number is not valid"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),

    message: yup
        .string()
        .required("Please enter a message")
        .min(10, "Too short message")
        .max(200, "Too many characters")
});


function Contact() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <>
            <div className="container-orange">
                <Jumbotron className="contactJumbo">
                    <MainHeader title="Contact" />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="infoBox">
                                <MainHeader title="Any questions? Want a customized tour?" />
                                <p>Est ad veniam culpa occaecat velit et et irure amet do cillum sit incididunt magna. Non enim
                             aliquip aliqua id laborum. Voluptate sit sunt ut ut enim deserunt mollit id officia est non cillum.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container-sea container-border">
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col className="col-md-6">
                                <Form.Group>
                                    <Form.Label>First name:</Form.Label>
                                    <Form.Control name="firstName" placeholder="Your first Name" ref={register} />
                                    {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Last name:</Form.Label>
                                    <Form.Control name="lastName" placeholder="Your first Name" ref={register} />
                                    {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Telephone Number:</Form.Label>
                                    <Form.Control name="telephoneNumber" placeholder="Example: 98765432" ref={register} />
                                    {errors.telephoneNumber && <ErrorMessage>{errors.telephoneNumber.message}</ErrorMessage>}
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control as="select">
                                        <option>General</option>
                                        <option>Custom Tour</option>
                                        <option>Feedback</option>
                                        <option>Refunds</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email Address:</Form.Label>
                                    <Form.Control name="email" placeholder="Your e-mail" ref={register} />
                                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                                </Form.Group>
                            </Col>
                            <Col className="col-md-6">
                                <Form.Group>
                                    <Form.Label>Message:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        name="message"
                                        placeholder="Enter your message here"
                                        ref={register}
                                    />
                                    {errors.message && (
                                        <ErrorMessage>{errors.message.message}</ErrorMessage>
                                    )}
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                <Button className="mainButton" type="submit">Submit</Button>
                                {validated && <div className="formValidated">Your request was validated!</div>}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default Contact;
























import React, { useState } from "react";
import { Button, Col, Form, Container, Row, Jumbotron } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import ErrorMessage from "../contact/ErrorMessage";


const telephoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("Required"),

    lastName: yup
        .string()
        .required("Required"),

    telephoneNumber: yup
        .string().matches(telephoneRegExp, "The telephone number is not valid"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),

    message: yup
        .string()
        .required("Please enter a message")
        .min(10, "Too short message")
        .max(200, "Too many characters")
});


function Contact() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <>
            <div className="container-orange">
                <Jumbotron className="contactJumbo">
                    <MainHeader title="Contact" />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="infoBox">
                                <MainHeader title="Any questions? Want a customized tour?" />
                                <p>Est ad veniam culpa occaecat velit et et irure amet do cillum sit incididunt magna. Non enim
                             aliquip aliqua id laborum. Voluptate sit sunt ut ut enim deserunt mollit id officia est non cillum.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container-sea container-border">
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col className="col-md-3">
                                <Form.Group>
                                    <Form.Label>First name:</Form.Label>
                                    <Form.Control name="firstName" placeholder="Your first Name" ref={register} />
                                    {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                                </Form.Group>
                            </Col>

                            <Col className="col-md-3">
                                <Form.Group>
                                    <Form.Label>Last name:</Form.Label>
                                    <Form.Control name="lastName" placeholder="Your first Name" ref={register} />
                                    {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-4">
                                <Form.Group>
                                    <Form.Label>Telephone Number:</Form.Label>
                                    <Form.Control name="telephoneNumber" placeholder="Example: 98765432" ref={register} />
                                    {errors.telephoneNumber && <ErrorMessage>{errors.telephoneNumber.message}</ErrorMessage>}
                                </Form.Group>
                            </Col>
                            <Col classname="col-md-4">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control as="select" >
                                        <option>General Inquiry</option>
                                        <option>Customized Tour</option>
                                        <option>Feedback</option>
                                        <option>Refunds</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                <Form.Group>
                                    <Form.Label>Email Address:</Form.Label>
                                    <Form.Control name="email" placeholder="Your e-mail" ref={register} />
                                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Message:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        name="message"
                                        placeholder="Enter your message here"
                                        ref={register}
                                    />
                                    {errors.message && (
                                        <ErrorMessage>{errors.message.message}</ErrorMessage>
                                    )}
                                </Form.Group>
                                <Button className="mainButton" type="submit">Submit</Button>
                                {validated && <div className="formValidated">Your request was validated!</div>}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default Contact;