import React, { Component,Fragment } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import '../../asset/css/style.css'; 
import '../../asset/css/bootstrap.min.css'; 
import whiteLogo from '../../asset/images/logo_white.png'
import blackLogo from '../../asset/images/logo_black.png'
import {NavLink} from "react-router-dom"
class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo], //object 
            navBarBackground:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBackground:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})
        }else if(window.scrollY<100){   
            this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBackground:'navBackground',navBarItem:'navItem',navVariant:'dark'})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }
    render() {
        return (

                <Fragment>
                      <title>{this.state.pageTitle }</title>         
                    <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg"  variant={this.state.navVariant}>
                       <Container>
                        <Navbar.Brand  className={this.state.navBarTitle}><NavLink to="/"><img src={this.state.navBarLogo} alt="logo"/></NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                            <Nav.Link><NavLink  className={this.state.navBarItem} exact activeStyle={{color:'#ffd900'}} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={this.state.navBarItem} exact activeStyle={{color:'#ffd900'}} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={this.state.navBarItem} exact activeStyle={{color:'#ffd900'}} to="/services">SERVICE</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#ffd900'}} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={this.state.navBarItem} exact activeStyle={{color:'#ffd900'}} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink  className={this.state.navBarItem} exact activeStyle={{color:'#ffd900'}} to="/contact">CONTACT US</NavLink></Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Fragment>
        )
    }
}

export default TopNavigation
