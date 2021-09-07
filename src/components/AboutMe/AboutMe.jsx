import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/images/face.png'
import { init } from 'ityped'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';

 class AboutMe extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: [' simply dummy text' ] })
      }
    render() {
        return (
                <Fragment>
                    <Container className="text-center">
                        <RubberBand>
                            <h1 className="serviceMainTitle">About Us</h1>
                        </RubberBand>
                        <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <Flip top>
                                    <div className="aboutMeImage">
                                        <Zoom top>
                                        <img src={face} className="aboutImg" alt="about_image"></img>
                                        </Zoom>
                                    </div>
                                </Flip>    
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="aboutMeBody">
                                    <h2 className="aboutMeDetails">Hi </h2>
                                    <h2 className="aboutMeTitle">Lorem Ipsum</h2>
                                    <h3 className="aboutMeDetails">Lorem Ipsum<span id="myElement"></span></h3>
    
                                </div>
                            </Col>

                        </Row>

                        
                    </Container>
                </Fragment>
        )
    }
}

export default AboutMe
