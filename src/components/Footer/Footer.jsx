import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} md={12} className="p-5 text-center">
                            <h2 className="footerName text-center">Follow Us </h2>
                            <div className="social-container">
                                <a className="facebook social" href="#">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />  
                                </a>
                                <a href="#"  className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />  
                                </a>

                                <a href="#"  className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />  
                                </a> 

                            </div>
                        </Col>
                        <Col lg={3} md={6} md={12} className="p-5 text-justify">
                            <h2 className="footerName ">Address </h2>
                            <p className="footerDescription">
                                6522 lorm lorem loem ispum, Dehradun India <br></br>
                                <FontAwesomeIcon icon={faEnvelope}  /> Email : Support@ele.com<br></br>
                                <FontAwesomeIcon icon={faPhone}  /> Phone : 434343434<br></br>
                            </p>                    
                        </Col>
                        <Col lg={3} md={6} md={12} className="p-5 text-justify">
                            <h2 className="footerName ">Information </h2>
                            <Link className="footerLink" to="/about">Profile </Link> <br></br>
                            <Link className="footerLink" to="/services">Services </Link> <br></br>
                            <Link className="footerLink" to="/contact">Contact Us  </Link> <br></br>
                        </Col>
                        <Col lg={3} md={6} md={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy </h2>
                                <Link className="footerLink" to="/refund-policy">Refund Policy  </Link> <br></br>
                                <Link className="footerLink" to="/terms-condition">Terms And Condition  </Link> <br></br>
                                <Link className="footerLink" to="/privacy-policy">Privacy Policy   </Link> <br></br>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightlink" href="#">© Copyright 2021 by Learn Digital, All Rights Reserved</a>
               </Container>
            </Fragment>
        )
    }
}

export default Footer
