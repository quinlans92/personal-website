import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from '../images/logo.png';

function NavBar() {
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLinkHover = (index) => {
        setHoveredLink(index);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    return (
        <div className="navbar-container"  >
            <Navbar expand="lg" className="navbar">
                <Container style={{ backgroundClip: '##D9B1A3' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link">
                                <Link
                                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                    to="/"
                                    onMouseEnter={() => handleLinkHover(0)}
                                    onMouseLeave={handleLinkLeave}
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'normal',
                                        marginLeft: '30px',
                                        marginRight: '30px',
                                        color: hoveredLink === 0 ? '#000' : '#A65151'
                                    }}
                                >
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                                    to="/about"
                                    onMouseEnter={() => handleLinkHover(1)}
                                    onMouseLeave={handleLinkLeave}
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'normal',
                                        marginLeft: '30px',
                                        marginRight: '30px',
                                        color: hoveredLink === 1 ? '#000' : '#A65151',
                                    }}
                                >
                                    About
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                                    to="/projects"
                                    onMouseEnter={() => handleLinkHover(2)}
                                    onMouseLeave={handleLinkLeave}
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'normal',
                                        marginLeft: '30px',
                                        marginRight: '30px',
                                        color: hoveredLink === 2 ? '#000' : '#fff',
                                    }}
                                >
                                    Projects
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                                    to="/contact"
                                    onMouseEnter={() => handleLinkHover(3)}
                                    onMouseLeave={handleLinkLeave}
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'normal',
                                        marginLeft: '30px',
                                        marginRight: '30px',
                                        color: hoveredLink === 3 ? '#000' : '#fff',
                                    }}
                                >
                                    Contact
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
