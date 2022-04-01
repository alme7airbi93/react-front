import {Container, Navbar, Nav} from "react-bootstrap";
import logo from "../assets/header/logo.png";
import "./Header.css"

export const Header = () => {
    return (
            <Container fluid={true} className="header-container">
            <Navbar collapseOnSelect expand="lg" className="header-nav navbar-dark" fixed="top">
                <Container className="header-nav-container" fluid>
                    <Navbar.Brand><img className="header-icon" alt="This is company logo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Container>
                        <Navbar.Collapse id="responsive-navbar-nav"  className="header-container justify-content-end">
                            <Nav>
                                <Nav.Link><span className="nav-text">HOME</span></Nav.Link>
                                <Nav.Link><span className="nav-text">ABOUT US</span></Nav.Link>
                                <Nav.Link><span className="nav-text">OUR SERVICES</span></Nav.Link>
                                <Nav.Link><span className="nav-text">CONTACT US</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Container>
            </Navbar>
            </Container>
);
}
