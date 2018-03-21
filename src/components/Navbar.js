import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Navbar, NavItem, NavList } from '../styles/Navbar';

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <NavList>
                    <NavItem><Link to="/">Home</Link></NavItem>
                    <NavItem><Link to="/test">Test</Link></NavItem>
                </NavList>
            </Navbar>
        );
    }
};

export default NavBar;