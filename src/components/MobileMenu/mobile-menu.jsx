import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mobile-menu.scss';

class MobileMenu extends Component {
    render() {
        const { hideMenu } = this.props;
        return (
            <div id="mobile-menu" className="mobile-menu__overlay hide">     
                <div className="mobile-menu__container">
                    <div className="mobile-menu__links">
                        <Link onClick={hideMenu} to="/about" className="mobile-menu__link">Our Company</Link>
                        <Link onClick={hideMenu} to="/locations" className="mobile-menu__link">Locations</Link>
                        <Link onClick={hideMenu} to="/contact" className="mobile-menu__link">Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileMenu;