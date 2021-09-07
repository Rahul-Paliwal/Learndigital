import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
class RecentProject extends Component {
    constructor(){
        super();
        this.state={
           ProjectData:[],
           loading:true 
        }
    }
    componentDidMount(){
            RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
                this.setState({ProjectData:result,loading:false });
            })
    }
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else
        {
        const ProjectList = this.state.ProjectData;
        const ProjectView = ProjectList.map(ProjectList=>{ 
             return <Col lg={4} md={6} sm={12}>
                  <Zoom top>     
                        <Card className="projectCard">
                            <Card.Img variant="top" src={ProjectList.img_one} />
                            <Card.Body>
                                <Card.Title className="serviceName text-center">{ProjectList.project_name}</Card.Title>
                                <Card.Text className="serviceDescription">
                                {ProjectList.project_description}
                                </Card.Text>
                                <Button variant="primary"><Link className="link-style" to={"/projectdetails/"+ProjectList.id+"/"+ProjectList.project_name}> View More </Link>  </Button>
                            </Card.Body>
                        </Card>
                    </Zoom> 
                    </Col>
                    
        }) 
        return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                        <div className="bottom"></div>
                        <Row>
                            {ProjectView}

                        </Row>
                        
                    </Container>
                </Fragment>
                
            
        )
        }
    }
}

export default RecentProject
