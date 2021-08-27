import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

 class Video extends Component {
      constructor(){
          super();
          this.state={
               show:false
          }
     }

     modalClose=()=>this.setState({show:false})
     modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                   <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                        <div className="bottom"></div>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="videoText">
                                <p className="serviceDescription">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br></br><br></br>
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                    <br></br>
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="videoCard">
                              <FontAwesomeIcon onClick={this.modalOpen}  className="iconProject" icon={faVideoSlash} /> 
                            </Col>
                        </Row>
                   </Container>
                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                        <Modal.Body> 
                            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center" />
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.modalClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>
              </Fragment>
        )
    }
}

export default Video
