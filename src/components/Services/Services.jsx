import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'

class Services extends Component {
    constructor(){
        super();
        this.state={
           serviceData:[]
        }
    }
    componentDidMount(){
            RestClient.GetRequest(AppUrl.Services).then(result=>{
                this.setState({serviceData:result});
            })
    }
    render() {
        const serviceList = this.state.serviceData;
        const serviceView = serviceList.map(serviceList=>{
            return <Col lg={4} md={6} sm={12}> <div className="serviceCard text-center"> <img className="webIcon" src={serviceList.service_icon} alt="serviceicon" /> <h2 className="serviceName text-center">{serviceList.service_name}</h2> <p className="serviceDescription">{serviceList.service_description} </p>
                     </div>   
                    </Col>
                    
        })
        return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">SERVICES</h1>
                        <div className="bottom"></div>
                        <Row>
                            {serviceView}  
                        </Row>
                    </Container>
                </Fragment>   
            
        )
    }
}

export default Services

