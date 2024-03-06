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
        <div className="row justify-content-center">
            <div className="col-md-10 navbar-container">
                <Navbar expand="lg" className="navbar">
                    <Container>

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
                                color: hoveredLink === 0 ? '#d6d6d6' : '#F28705',
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                            to="/about"
                            onMouseEnter={() => handleLinkHover(1)}
                            onMouseLeave={handleLinkLeave}
                            style={{
                                fontSize: '28px', /* Default font size */
                                fontWeight: 'normal',
                                marginLeft: '30px',
                                marginRight: '30px',
                                color: hoveredLink === 1 ? '#d6d6d6' : '#F28705',
                            }}
                        >
                            About
                        </Link>
                        <Link
                            className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                            to="/projects"
                            onMouseEnter={() => handleLinkHover(2)}
                            onMouseLeave={handleLinkLeave}
                            style={{
                                fontSize: '28px', /* Default font size */
                                fontWeight: 'normal',
                                marginLeft: '30px',
                                marginRight: '30px',
                                color: hoveredLink === 2 ? '#d6d6d6' : '#F28705',
                            }}
                        >
                            Projects
                        </Link>
                        <Link
                            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                            to="/contact"
                            onMouseEnter={() => handleLinkHover(3)}
                            onMouseLeave={handleLinkLeave}
                            style={{
                                fontSize: '28px', /* Default font size */
                                fontWeight: 'normal',
                                marginLeft: '30px',
                                marginRight: '30px',
                                color: hoveredLink === 3 ? '#d6d6d6' : '#F28705',
                            }}
                        >
                            Contact
                        </Link>


                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;

