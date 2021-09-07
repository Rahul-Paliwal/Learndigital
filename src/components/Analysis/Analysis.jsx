import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

 class Analysis extends Component {
    constructor(){
        super();
        this.state={
             data:[],
             HomeDesc:"...",
             loading:true
        }
   }
    componentDidMount(){
          RestClient.GetRequest(AppUrl.ChartData).then(result=>{
               this.setState({data:result,loading:false});
          }) 
          RestClient.GetRequest(AppUrl.HomeDescription).then(result=>{
            this.setState({HomeDesc:result[0]['home_description']});
       }) 
     }

    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else
        {
        var blue = "#051b35"
        return (
            <Fragment>
                <Container className="text-center">
                    <LightSpeed top>
                        <h1 className="serviceMainTitle">Technology Used</h1>
                    </LightSpeed>
                    <div className="bottom"></div>
                    <Row>
                        <Col style={{height:'300px'}} lg={6} md={12} sm={12}>
                           <ResponsiveContainer>   
                                <BarChart width={100} height={300} data={this.state.data}>

                                <XAxis dataKey="x-data" /> 
                                <Tooltip />
                                <Bar dataKey="y-data" fill={blue}>

                                </Bar>


                                </BarChart>
                            </ResponsiveContainer>

                        </Col>

                            <Col lg={6} md={12} sm={12}>
                            <Zoom top>
                                <p className="text-justify serviceDescription">{ ReactHtmlParser(this.state.HomeDesc) }
                                </p>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
        }
    }
}

export default Analysis
