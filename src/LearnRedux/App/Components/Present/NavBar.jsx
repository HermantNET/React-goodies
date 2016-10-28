import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = (props) => (
    <div>
        <ul className="navbar">
            <li><IndexLink activeStyle={{color: 'red'}} to="/">Home</IndexLink></li>
            <li><Link activeStyle={{color: 'red'}} to="/cats">Cats</Link></li>
            <li><Link activeStyle={{color: 'red'}} to="/dogs">Dogs</Link></li>
            <li><Link activeStyle={{color: 'red'}} to="/bananas">Bananas</Link></li>
        </ul>
        <div className="content">
            {props.children}
        </div>
    </div>
);

export default NavBar;