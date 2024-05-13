//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import './NavBar.css'
//import collagefront from './collagefront.jpg';
//import { Link } from 'react-router-dom';// Make sure to use the correct path to your image file


//function NavScrollExample() {
//    return (
//        <>
//            <div className="navbar">
//                <a className="navbar-brand" href="#">HOME</a>
//                <a className="navbar-brand" href="#">PAGES</a>
//                <a className="navbar-brand" href="#">COURSE</a>
//                <a className="navbar-brand" href="#">EVENTS</a>
//                <a className="navbar-brand" href="#">BLOG</a>
//                <a className="navbar-brand" href="#">CONTACT US</a>
//                <a className="dropdown">
//                    <a href="#" className="dropdown-toggle">COURSES</a>
//                    <div className="dropdown-content">
//                        <a href="#">B.S.C</a>
//                        <a href="#">M.S.C</a>
//                        <a href="#">B.A</a>
//                        <a href="#">M.A</a>
//                    </div>
//                </a>
//                <div className="col-4">
//                    <a className="navbar-brand" href="#">Login</a>
//                    <a className="navbar-brand" href="#">Registration</a>
//                </div>
//                <div>
//                    <input type="text" name="searchedvalue" placeholder="Search.." />
//                </div>

//            </div>

//            <div>
//                <img src={collagefront} alt="collagefront image" className="clcollagephoto" />
//            </div>
//        </>
//    );
//}
//export default NavScrollExample;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import collagefront from './collagefront.jpg';
import { Link } from 'react-router-dom';




function NavScrollExample() {
   // const [showRegistration, setShowRegistration] = useState(false);

   

    return (
        <div className="navbar-wrapper">
            <Navbar expand="lg">
                <Navbar.Brand href="#">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">PAGES</Nav.Link>
                        <Nav.Link href="#">COURSE</Nav.Link>
                        <Nav.Link href="#">EVENTS</Nav.Link>
                        <Nav.Link href="#">BLOG</Nav.Link>
                        <Nav.Link href="#">CONTACT US</Nav.Link>
                        <NavDropdown title="COURSES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">B.S.C</NavDropdown.Item>
                            <NavDropdown.Item href="#">M.S.C</NavDropdown.Item>
                            <NavDropdown.Item href="#">B.A</NavDropdown.Item>
                            <NavDropdown.Item href="#">M.A</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="auth-links">
                        <Link to="/LoginPage">
                            <Button variant="dark" className="button-85">Login</Button>
                        </Link>
                        <span className="button-space"></span> {/* Add space here */}
                        <Link to="/register">
                            <Button variant="dark" className="button-85">Registration</Button>
                        </Link>
                    </div>

                    <Form inline className="mr-lg-2">
                        <div className="input-group">
                            <input type="text" name="searchedvalue" id="idforsearchvalue" className="form-control" placeholder="Search.." />
                            <div className="input-group-append">
                                <Button variant="outline-success">Search</Button>
                            </div>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="test">
                <img src={collagefront} alt="background" className="background-image" />
            </div>
        </div>
    );
}

export default NavScrollExample;





