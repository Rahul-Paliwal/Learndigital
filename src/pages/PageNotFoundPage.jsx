import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'

class PageNotFoundPage extends Component {
     render() {
          return (
              <Fragment>
                    <TopNav title="404 Page Not Found" />  
                    <PageTop pagetitle="Page Not Found" />  
                    <PageNotFound />
                    <Footer />

              </Fragment>
          )
     }
}

export default PageNotFoundPage