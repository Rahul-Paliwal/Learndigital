import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

 class CourseDetails extends Component {
     constructor(props){
        super();
     }
    render() {
          let LongTitle ="";
          let LongDescription ="";
          let TotalDuration ="";
          let TotalLectures ="";
          let TotalStudents ="";
          let SkillAll ="";
          let VideoUrl ="";
          let SmallImg ="";
          let CourseDetails = this.props.courseAllData;
          if(CourseDetails.length == 1){
            LongTitle = CourseDetails[0]['long_title'];
            LongDescription = CourseDetails[0]['long_description'];
            TotalDuration = CourseDetails[0]['total_duration'];
            TotalLectures = CourseDetails[0]['total_lecture'];
            TotalStudents = CourseDetails[0]['total_students'];
            SkillAll = CourseDetails[0]['skill_all'];
            VideoUrl = CourseDetails[0]['video_url'];
            SmallImg = CourseDetails[0]['small_img'];
       }
        return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <h1 className="courseDetailsText"> {LongTitle} </h1>
                                <img className="courseDetailsImg" src={SmallImg} />
                                <br></br> <br></br>
                                <p className="CourseallDescription">
                                        {LongDescription}
                                </p>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div class="widget_feature">
                                    <h4 class="widget-title text-center">Course Features</h4>
                                    <hr />
                                    <ul>
                                        <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {TotalStudents}</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span>  {TotalDuration}</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {TotalLectures}</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> Android, JavaScript</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Kazi Ariyan</li>

                                    </ul>
                                    <div class="price-wrap text-center">
                                        <h5>Price:<span>$54.00</span></h5>
                                        <Button variant="warning">ENROLL COURSE</Button>

                                    </div>
                                </div>        

                            </Col>
                        </Row>
                    </Container>
                    <br></br><br></br>
               <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                          <div className="widget_feature">
                                <h1 className="coruseDetailsText"> Skill You Need  </h1>   
                                <hr />
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>

                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenass</li>

                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                </ul>           
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>
                    </Row>
               </Container>
            </Fragment>
        )
    }
}

export default CourseDetails
