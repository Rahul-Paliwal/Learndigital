import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import TopNav from '../components/TopNav/TopNavigation'

 class PrivacyPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
               <Fragment>
                     <TopNav title="Privacy And Policy" />  
                     <PageTop pagetitle="Privacy And Policy" />  
                     <PrivacyPolicy />
                     <Footer />

               </Fragment>
          )
     }
}

export default PrivacyPage