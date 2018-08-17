import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import  {bootstrapUtils} from 'react-bootstrap/lib/utils'

const NavBar = (props) => {
    bootstrapUtils.addStyle(Navbar, 'custom');
    return (
        <Navbar collapseOnSelect fixedTop bsStyle='custom'>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#brand">Voting App</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Register
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
)}

export default NavBar;