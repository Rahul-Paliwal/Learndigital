import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Refund from '../components/Refund/Refund'
import TopNav from '../components/TopNav/TopNavigation'

class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
             <TopNav title="Refund Policy" />  
             <PageTop pagetitle="Refund Policy" /> 
             <Refund />
             <Footer />
            </Fragment>
        )
    }
}

export default RefundPage
