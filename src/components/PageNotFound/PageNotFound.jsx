import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class PageNotFound extends Component {
    render() {
        return (
                    <Fragment>
                        <Container className="text-center">
                            <Row>
                                <Col>
                                    <h1 className="serviceName text-center mt-5">Page Not Found</h1>
                                    <h1 className="notFound">404</h1>    
                                </Col>
                            </Row>
                        </Container>
                    </Fragment>
        )
    }
}

export default PageNotFound
