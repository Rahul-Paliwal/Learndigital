import React, { Component,Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
 class Courses extends Component {
    constructor(){
        super();
        this.state={
           CourseData:[],
           loading:true
        }
    }
    componentDidMount(){
            RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
                this.setState({CourseData:result,loading:false});
            })
    }

      
    render() {
        if(this.state.loading==true){
            return <Loading/>
        }
        else{
        const CourseList = this.state.CourseData;
        const CourseView = CourseList.map(CourseList=>{return  <Col lg={6} md={12} sm={12}>
            <Row>
                <Col lg={6} md={6} sm={12} className="p-2" >
                <Zoom top>
                    <img className="courseImg" src= {CourseList.small_img} />
                </Zoom>
                </Col>

                <Col lg={6} md={6} sm={12}>
                <Zoom top>
                    <h5 className="text-justify serviceName">{CourseList.short_title}  </h5>
                    <p className="text-justify serviceDescription">{CourseList.short_description}</p>
                </Zoom>
                    <Link className="courseViewMore float-left" to={"/coursedetails/"+CourseList.id+"/"+CourseList.short_title} >View Details</Link>
                </Col> 
            </Row> 
            </Col>

        })
        return (
           <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Our Courses</h1>
                    <div className="bottom"></div>
                    <Row>
  
                            {CourseView}
                       
                    </Row>
                </Container>
           </Fragment>
        )
        }
    }
}

export default Courses
