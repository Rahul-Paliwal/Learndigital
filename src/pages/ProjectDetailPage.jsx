import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNav from '../components/TopNav/TopNavigation'

class ProjectDetailPage extends Component {
     constructor({match}){
               super();
               this.state={
                    ProjectID:match.params.projectID,
                    ProjectName:match.params.projectName
               }
     }
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                    <TopNav title="Project Details " />  
                    <PageTop pagetitle={this.state.ProjectName} />  
                    <ProjectDetails id={this.state.ProjectID} />
                    <Footer />
               </Fragment>
          )
     }
}

export default ProjectDetailPage