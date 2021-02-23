import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logolight from '../../assets/shared/desktop/logo-light.png';
import facebook from '../../assets/shared/desktop/icon-facebook.svg';
import youtube from '../../assets/shared/desktop/icon-youtube.svg';
import twitter from '../../assets/shared/desktop/icon-twitter.svg';
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import instagram from '../../assets/shared/desktop/icon-instagram.svg';
import './footer-view.scss';

class FooterView extends Component {
    render() {
        return (
            <div className="footer-view__container">
                <div className="footer-view__bottom-nav">
                    <img className="footer-view__logo" src={logolight} alt="logo"/>
                    <div className="footer-view__links">
                        <Link to="/about" className="footer-view__link">Our Company</Link>
                        <Link to="/locations" className="footer-view__link">Locations</Link>
                        <Link to="/contact" className="footer-view__link">Contact</Link>
                    </div>
                </div>
                <div className="line"/>
                <div className="footer-view__social">
                    <p className="footer-view__address">
                        <span>Designo Central Office</span><br/>
                        3886 Wellington Street<br/>
                        Toronto, Ontario M9C 3J5
                    </p>
                    <p className="footer-view__contact">
                        Contact Us (Central Office)<br/>
                        P: +1 253-863-8947<br/>
                        M: contact@designo.co
                    </p>
                    <div className="footer-view__social-icons">
                        <a href="#"><img className="footer-view__social-icon" src={facebook} alt="facebook icon"/></a>
                        <a href="#"><img className="footer-view__social-icon" src={youtube} alt="youtube icon"/></a>
                        <a href="#"><img className="footer-view__social-icon" src={twitter} alt="twitter icon"/></a>
                        <a href="#"><img className="footer-view__social-icon" src={pinterest} alt="pinterest icon"/></a>
                        <a href="#"><img className="footer-view__social-icon" src={instagram} alt="instagram icon"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterView;