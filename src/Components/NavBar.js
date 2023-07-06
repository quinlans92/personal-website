import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLinkHover = (index) => {
        setHoveredLink(index);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className="nav-link"
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 'normal',
                                    marginLeft: '30px',
                                    marginRight: '30px',
                                    color: hoveredLink === 0 ? '#20A876' : '#fff',
                                }}
                                href="#home"
                                onMouseEnter={() => handleLinkHover(0)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                className="nav-link"
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 'normal',
                                    marginLeft: '30px',
                                    marginRight: '30px',
                                    color: hoveredLink === 1 ? '#6929F2' : '#fff',
                                }}
                                href="#about"
                                onMouseEnter={() => handleLinkHover(1)}
                                onMouseLeave={handleLinkLeave}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                className="nav-link"
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 'normal',
                                    marginLeft: '30px',
                                    marginRight: '30px',
                                    color: hoveredLink === 2 ? '#F1B807' : '#fff',
                                }}
                                href="#portfolio"
                                onMouseEnter={() => handleLinkHover(2)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link
                                className="nav-link"
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 'normal',
                                    marginLeft: '30px',
                                    marginRight: '30px',
                                    color: hoveredLink === 3 ? '#F24968' : '#fff',
                                }}
                                href="#contact"
                                onMouseEnter={() => handleLinkHover(3)}
                                onMouseLeave={handleLinkLeave}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
