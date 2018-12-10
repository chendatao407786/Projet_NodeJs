import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
require('./navigator.css');
class Navigation extends Component {
    render() {
        return (
            <div className="site-header">
                <div className="site-header_main">
                    <div className="header">
                        <div className="site-header__logo center">
                            <NavLink to="/">
                                <img src="https://www.moddevices.com/hubfs/assets/logos/mod-devices-logo-on-dark.png"/>
                            </NavLink>      
                        </div>
                        <ul className="site-header__main-menu center">
                            <li>Product</li>
                            <li><NavLink to="/plugin-store">Plugin Gallery</NavLink></li>
                            <li>Play</li>
                            <li>Learn</li>
                            <li>Community</li>
                        </ul>
                        <ul className="site-header__secondary-menu center">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li><NavLink to="/login">My account</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navigation;