import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <h1>Bar Chart</h1>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDescription">Heat maps are a great visualisation to start with when exploring sports event data that includes coordinates,
                               allowing viewers to immediately focus on areas of the field that matter most. <br></br>
                               we can use neat data visualization methods that leverage the brain’s ability to identify and process data in a visual way.
                               To help you get started and easily add beautiful data visualization to your favorite application,<br></br> 
                               here are some of the best Javascript data visualization libraries around in 2018 (unranked).
                               Feel free to comment and add your own suggestions and insights!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis
