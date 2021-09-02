import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


class ClientReview extends Component {
        constructor(){
          super();
          this.state={
            clientData:[]
          }
      }
      componentDidMount(){
              RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
                  this.setState({clientData:result});
              })
      }
     render() {
      var settings = {
        autoplaySpeed:3000,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 1000,
        arrows:false,
        horizontal:true,
        horizontalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const clientList = this.state.clientData;
      const clientView = clientList.map(clientList=>{
        return    <div>
          <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
                <img className="circleImg" src={clientList.client_image} />
                <h2 className="reviewName">{clientList.client_title}</h2>
                <p className="reviewDescription">{clientList.client_comment}</p>

               </Col>
          </Row>
          </div>  

      })
         
          return (
            <Fragment>
            <Container fluid={true} className="siderBack text-center">

                <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
                <div className="reviewbottom"></div> 

                <Slider {...settings}>
                   
                        {clientView}
            
                </Slider>
            </Container>
            </Fragment>
          )
     }
}

export default ClientReview