import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import designIcon from '../../asset/images/design.png';
import ecomIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';

class Services extends Component {
    render() {
        return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">SERVICES</h1>
                        <div className="bottom"></div>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="ecomIcon" src={ecomIcon} alt="ecommerce"/>   
                                    <h2 className="serviceName">Ecommerce</h2> 
                                    <p className="serviceDescription">eCommerce refers to any form of business transaction conducted online. 
                                       The most popular example of eCommerce is online shopping,
                                       which is defined as buying and selling of goods via the internet on any device.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="designIcon" src={designIcon} alt="webdesign" /> 
                                    <h2 className="serviceName">Web Design</h2> 
                                    <p className="serviceDescription">Web design is the process of planning, conceptualizing, and arranging content online.
                                       Today, designing a website goes beyond aesthetics to include the website’s overall functionality.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img className="webIcon" src={webIcon} alt="webdevelop" /> 
                                    <h2 className="serviceName">Web Development</h2> 
                                    <p className="serviceDescription">Website development refers to the work that goes into building a website.
                                       This could apply to anything from creating a single plain-text webpage to developing a complex web application or social network.
                                    </p>
                                </div>   
                            </Col>
                        </Row>
                    </Container>
                </Fragment>   
            
        )
    }
}

export default Services

