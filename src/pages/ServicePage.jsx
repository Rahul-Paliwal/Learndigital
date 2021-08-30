import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
                    <Fragment>
                        <TopNav  title="Our Services"/>
                        <PageTop pagetitle="Our Services"/>
                        <Services />
                        <Contact/>
                        <Footer/>
                    </Fragment>
        )
    }
}

export default ServicePage
