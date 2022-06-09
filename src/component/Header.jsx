import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const listUsers = useSelector((state)=>state.user.listUsers);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown style={{ marginLeft: "50px" }} title={`(${listUsers.length}) Users`} id="basic-nav-dropdown">
                            {
                                listUsers && listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <NavDropdown.Item key={`user-${index}`} href="#">{item.email}</NavDropdown.Item>
                                    )
                                })
                            }
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
