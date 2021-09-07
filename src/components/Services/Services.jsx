import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed'
class Services extends Component {
    constructor(){
        super();
        this.state={
           serviceData:[],
           loading:true
        }
    }
    componentDidMount(){
            RestClient.GetRequest(AppUrl.Services).then(result=>{
                this.setState({serviceData:result,loading:false});
            })
    }
    render() {
        if(this.state.loading == true){
            return <Loading />
       }
       else{ 
        const serviceList = this.state.serviceData;
        const serviceView = serviceList.map(serviceList=>{
            return <Col lg={4} md={6} sm={12}><Zoom top> <div className="serviceCard text-center"> <img className="webIcon" src={serviceList.service_icon} alt="serviceicon" /> <h2 className="serviceName text-center">{serviceList.service_name}</h2> <p className="serviceDescription">{serviceList.service_description} </p>
                     </div>   </Zoom>  
                    </Col>
                    
        })
        return (
                <Fragment>
                    <Container className="text-center">
                        <LightSpeed top>
                            <h1 className="serviceMainTitle">SERVICES</h1>
                            <div className="bottom"></div>
                        </LightSpeed>
                        <Row>
                            {serviceView}  
                        </Row>
                    </Container>
                </Fragment>   
            
        )
       }
    }
}

export default Services

