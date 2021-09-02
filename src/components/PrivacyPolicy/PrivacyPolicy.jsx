import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

 class PrivacyPolicy extends Component {
     constructor(){
          super();
          this.state={ 
               privacyDesc:"..."
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.InfoData).then(result=>{
               this.setState({privacyDesc:result[0]['privacy']});
          }) 
     }
     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                    <Row>
                    <Col lg={12} md={12} sm={12}>
                    <h1 className="serviceName">Privacy And Policy</h1>
                    <hr />
                    <p className="serviceDescription">


                    { ReactHtmlParser(this.state.privacyDesc) }

                      </p>

                    </Col>
                    </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default PrivacyPolicy