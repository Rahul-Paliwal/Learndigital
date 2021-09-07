import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link   } from "react-router-dom"
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import AllCoursePage from '../pages/AllCoursePage'
import PortfolioPage from '../pages/PortfolioPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RefundPage from '../pages/RefundPage'
import TermsConditionPage from '../pages/TermsConditionPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import CourseDetailPage from '../pages/CourseDetailPage'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import PageNotFoundPage from '../pages/PageNotFoundPage'
class AppRoute extends Component {
    render() {
        return (
                <Fragment>
                    <Switch> 
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/services" component={ServicePage}/>
                        <Route exact path="/courses" component={AllCoursePage}/>
                        <Route exact path="/portfolio" component={PortfolioPage}/>
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                        <Route exact path="/refund-policy" component={RefundPage}/>
                        <Route exact path="/terms-condition" component={TermsConditionPage}/>
                        <Route exact path="/privacy-policy" component={PrivacyPage}/>
                        <Route exact path="/projectdetails/:projectID/:projectName" component={ProjectDetailPage} />
                        <Route exact path="/coursedetails/:courseID/:courseName" component={CourseDetailPage} />
                        <Route component={PageNotFoundPage} />
                    </Switch>


                </Fragment>
        )
    }
}

export default AppRoute
