import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <nav className="nav">
                        <NavLink exact to="/" className="links"><h1>Billiard Outfitters</h1></NavLink>
                        <div className="links">
                            <NavLink className="links" to="/about">About Us</NavLink>
                            <NavLink className="links" to="/contact">Contact Us</NavLink>
                        </div>
                    </nav>
                </div>
                <div className="subheader">
                    <nav className="sublinks">
                        <NavLink className="sublinks" to="/cues">Cues</NavLink>
                        <NavLink className="sublinks" to="/cases">Cases</NavLink>
                        <NavLink className="sublinks" to="/accessories">Accessories</NavLink>
                    </nav>
                </div>
                <div>
                {this.props.children}
                </div>
            </div>
        );
    }
}

export default BaseLayout;