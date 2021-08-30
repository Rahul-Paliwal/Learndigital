import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'
import TermsCondition from '../components/TermsCondition/TermsCondition'

 class TermsConditionPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>
                  <TopNav title="Terms And Condition " />  
                  <PageTop pagetitle="Terms And Condition" /> 
                  <TermsCondition />
                  <Footer />
             </Fragment>
          )
     }
}

export default TermsConditionPage