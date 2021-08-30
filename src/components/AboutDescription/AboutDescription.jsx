import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class AboutDescription extends Component {
    render() {
        return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <h1 className="serviceName">What We Do</h1>
                                <hr />
                                <p className="serviceDescription">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                                <br></br><br></br>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                <br></br><br></br>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <br></br><br></br>
                                </p>

                                <br></br><br></br>

                                <h1 className="serviceName">Our Mission</h1>
                                <hr />
                                <p className="serviceDescription">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                                <br></br><br></br>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                <br></br><br></br>
                                </p>

                                <h1 className="serviceName">Our Vision</h1>
                                <hr />
                                <p className="serviceDescription">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                                <br></br><br></br>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                <br></br><br></br>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
        )
    }
}

export default AboutDescription
