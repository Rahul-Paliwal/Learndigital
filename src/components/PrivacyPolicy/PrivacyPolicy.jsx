import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

 class PrivacyPolicy extends Component {
     constructor(){
          super();
          this.state={ 
               privacyDesc:"",
               loading:true,
               error:false
          }
     }

      componentDidMount(){          
           RestClient.GetRequest(AppUrl.InfoData).then(result=>{
               if(result == null){
                    this.setState({error:true,loading:false})
               }else{

        this.setState({privacyDesc:result[0]['privacy'],loading:false});
               }
          }).catch(error=>{
               this.setState({error:true})
          })  
          }
     
     render() {
          if(this.state.loading == true){
               return <Loading />
          }
          else if(this.state.loading==false) 
          {
          return (
               <Fragment>
                    <Container className="mt-5">
                    <Row>
                    <Col lg={12} md={12} sm={12}>
                    <RubberBand>
                    <h1 className="serviceName">Privacy And Policy</h1>
                    </RubberBand>
                    <hr />
                    <Zoom top>
                    <p className="serviceDescription">


                    { ReactHtmlParser(this.state.privacyDesc) }

                      </p>
                    </Zoom>

                    </Col>
                    </Row>
                    </Container>
               </Fragment>
          )
          }
          else if(this.state.error == true){
               return <Failure />
             }
     }
}

export default PrivacyPolicy