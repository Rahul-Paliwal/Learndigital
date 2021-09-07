import React, { Component, Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'
import RestClient from '../RestAPI/RestClient'
import AppUrl from '../RestAPI/AppUrl'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

 class CourseDetailPage extends Component {
     constructor({match}){
          super();
          this.state={
               CourseID:match.params.courseID,
               CourseName:match.params.courseName,
               CourseData:[]
          }
}
    componentDidMount(){
        window.scroll(0,0)
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.CourseID).then(result=>{
          this.setState({
               CourseData:result
               });
     })
    }
     render() {
          return (
                <Fragment>
                     <TopNav title="Course Details " />  
                     <PageTop pagetitle={this.state.CourseName} /> 
                     <CourseDetails courseAllData={this.state.CourseData} />
                     <Footer />
                </Fragment>
          )
     }
}

export default CourseDetailPage
