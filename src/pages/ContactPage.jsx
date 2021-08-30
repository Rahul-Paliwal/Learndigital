import React, { Component, Fragment } from 'react'
import ContactSec from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'

  class ContactPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
              <Fragment>
                   <TopNav  title="Contact Us" />
                   <PageTop pagetitle="Contact Us" />
                   <ContactSec />
                   <Footer />
              </Fragment>
          )
     }
}

export default ContactPage