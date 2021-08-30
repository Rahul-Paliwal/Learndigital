import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

 class Contact extends Component {
    render() {
        return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Quick Connect</h1>
                               <Form>
                                    <Form.Group  >
                                        <Form.Label>Your Name </Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name" /> 
                                    </Form.Group>

                                    <Form.Group  >
                                        <Form.Label>Your Email </Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email" /> 
                                    </Form.Group>

                                    <Form.Group  >
                                        <Form.Label>Message  </Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br></br>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Discuss Now</h1>
                                <p className="serviceDescription">
                                    6522 Baltimore National Pike CatonsVille, Dehradun India <br></br>
                                    <FontAwesomeIcon icon={faEnvelope}  />  Email : Support@learndigital.com<br></br>
                                    <FontAwesomeIcon icon={faPhone}  />  Phone : 434343434<br></br>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
        )
    }
}

export default Contact
