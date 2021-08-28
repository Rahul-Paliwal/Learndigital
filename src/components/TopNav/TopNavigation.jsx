import React, { Component,Fragment } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import '../../asset/css/style.css'; 
import '../../asset/css/bootstrap.min.css'; 
import whiteLogo from '../../asset/images/logo_white.png'
import blackLogo from '../../asset/images/logo_black.png'
class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo], //object 
            navBarBackground:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark"
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
                    <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg"  variant={this.state.navVariant}>
                       <Container>
                        <Navbar.Brand href="#home" className={this.state.navBarTitle}><img src={this.state.navBarLogo} alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">SERVICE</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link  className={this.state.navBarItem} href="#deets">CONTACT US</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Fragment>
        )
    }
}

export default TopNavigation
