import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useAuth from '../../context/useAuth'

const Header = () => {
    const {users, logOut} = useAuth();
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">Trip Master</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-list">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#certificates">Certificates</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#phase">Phase</Nav.Link>
                        {users?.email? <Nav.Link as={HashLink} to="/addservice">Add Service</Nav.Link> : ''}
                        {users?.email? <Nav.Link as={HashLink} to="/myorder">My Order</Nav.Link> : ''}
                        {users?.email? <Nav.Link as={HashLink} to="/manage-all-order">Manage All Order</Nav.Link> : ''}
                        {users?.email?
                            <Button className="logout-btn" onClick={logOut} variant="light">Logout</Button>  :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text><a href="#login">{users?.displayName && users.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                <Nav className="me-auto">
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;