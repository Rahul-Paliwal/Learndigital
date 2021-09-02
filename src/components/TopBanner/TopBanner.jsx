import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'

class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            sub_title:""
        }
    }
    componentDidMount(){
            RestClient.GetRequest(AppUrl.HomeTopBanner).then(result=>{
                this.setState({title:result[0]['home_title'],sub_title:result[0]['home_subtitle']})
            }).catch(error=>{
                this.setState({title:"????",sub_title:"??"}) 
                // for avoiding whole site stop due to particular component error.
                // Now whole site will work if their is a error in this component than 
                // qus mark will come and whole page will work
            });
    }
    render() {
      
        return (
            <Fragment>
                   <Container fluid={true} className="topFixedBanner p-0">
                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTitle">{this.state.title}</h1>
                                        <h4 className="topSubTitle">{this.state.sub_title} </h4>
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
