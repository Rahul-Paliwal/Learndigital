import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

 class Analysis extends Component {
    constructor(){
        super();
        this.state={
             data:[
                  {Techonology:'PHP',Projects:100},
                  {Techonology:'MySqli',Projects:90},
                  {Techonology:'Laravel',Projects:95},
                  {Techonology:'React',Projects:85},
                  {Techonology:'Opencart',Projects:80},
                  {Techonology:'Vue Js',Projects:70},
                  {Techonology:'Django',Projects:60},
                  {Techonology:'JavaScript',Projects:100}                   
             ]
        }
   }
    render() {
        var blue = "#051b35"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col style={{height:'300px'}} lg={6} md={12} sm={12}>
                           <ResponsiveContainer>   
                                <BarChart width={100} height={300} data={this.state.data}>

                                <XAxis dataKey="Techonology" /> 
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue}>

                                </Bar>


                                </BarChart>
                            </ResponsiveContainer>

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
