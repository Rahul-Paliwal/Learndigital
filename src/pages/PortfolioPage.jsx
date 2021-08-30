import React, { Component, Fragment } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'

 class PortfolioPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNav title="Portfolio" />
                <PageTop pagetitle="Portfolio"/>
                <AllProjects />
                <Footer />
            </Fragment>
        )
    }
}

export default PortfolioPage
