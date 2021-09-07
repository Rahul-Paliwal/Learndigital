import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ErrorIcon from '../../asset/images/error.svg'

export class Failure extends Component {
    render() {
        return (
                <Fragment>
                    <Container className="text-center">
                        <Row> 
                            <Col>
                                <img className="errorAnimation" src={ErrorIcon}></img>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
        )
    }
}

export default Failure
