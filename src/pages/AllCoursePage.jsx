import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNav from '../components/TopNav/TopNavigation'

class AllCoursePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment> 
                <TopNav title="Courses"></TopNav>
                <PageTop pagetitle="Courses"></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>
            </Fragment>
        )
    }
}

export default AllCoursePage
