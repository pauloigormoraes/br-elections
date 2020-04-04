import React from 'react';

import MenuItem from './ButtonMenu.jsx'

import { Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        
        return(
            <div className="d-flex flex-column flex-md-row col">
                <div className="text-right mt-menu">
                    <MenuItem/>
                </div>
                <b className="mr-md-auto mt-menu-name">
                    <a href="/" className="text-menu-name no-line">
                    PAULO &ensp; <br/>
                    &ensp;IGOR  &ensp;<br/>
                    &ensp;MORAES
                    </a>
                </b>
                <Nav className="justify-content-end mt-3">
                    <NavItem>
                        <NavLink href="https://www.instagram.com/pauloigorms/" target="_blank" rel="noopener noreferrer">
                            @INSTAGRAM/pauloigorms
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            @about
                        </NavLink>
                    </NavItem>
                </Nav>
                                 
            </div>
        );
    }
}

export default Menu;