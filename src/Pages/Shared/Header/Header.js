import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.JPG'

const Header = () => {
    return (
        <>
            <Navbar height={'150px'} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" height={'50px'} width={'60px'} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;