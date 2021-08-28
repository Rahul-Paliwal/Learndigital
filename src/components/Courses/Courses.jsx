import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

 class Courses extends Component {
    render() {
        return (
           <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Our Courses</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                               <Col lg={6} md={6} sm={12} className="p-2" >
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg" />

                                  </Col>

                                <Col lg={6} md={6} sm={12}>
                                        <h5 className=" serviceName">Course 1  </h5>
                                        <p className=" serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className="courseViewMore" href="#" >View Details</a>
                                </Col>


                                <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg" src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg" />

                                   </Col>

                                <Col lg={6} md={6} sm={12}>
                                        <h5 className=" serviceName">Course 2  </h5>
                                        <p className=" serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className="courseViewMore" href="#" >View Details</a>
                                </Col> 

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                        <h5 className=" serviceName">Course 3  </h5>
                                        <p className=" serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className="courseViewMore" href="#" >View Details</a>
                                </Col>


                                <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg" src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                        <h5 className=" serviceName">Course 4  </h5>
                                        <p className=" serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className="courseViewMore text-left" href="#" >View Details</a>
                                </Col> 

                            </Row>
                        </Col>
                    </Row>
                </Container>
           </Fragment>
        )
    }
}

export default Courses
