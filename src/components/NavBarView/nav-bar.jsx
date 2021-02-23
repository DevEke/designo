import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logodark from '../../assets/shared/desktop/logo-dark.png';
import './nav-bar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="app-nav-bar__container">
                <div className="nav-bar__container">
                    <Link to="/"><img className="nav-bar__logo" src={logodark} alt="logo" /></Link>
                    <div className="nav-bar__links">
                        <Link to="/about" className="nav-bar__link">Our Company</Link>
                        <Link to="/locations" className="nav-bar__link">Locations</Link>
                        <Link to="/contact" className="nav-bar__link">Contact</Link>
                    </div>
                    <button className="nav-bar__mobile-menu"/>
                </div>
            </div>
        )
    }
}

export default NavBar