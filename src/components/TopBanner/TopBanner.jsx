import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                   <Container fluid={true} className="topFixedBanner p-0">
                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTitle">LEARN DIGITAL</h1>
                                        <h4 className="topSubTitle">Time For Digital Learning </h4>
                                        <Button variant="primary">Learn More</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                   </Container>
                       
            </Fragment>
        )
    }
}

export default TopBanner
