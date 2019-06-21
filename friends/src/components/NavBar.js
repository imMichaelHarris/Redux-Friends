import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;