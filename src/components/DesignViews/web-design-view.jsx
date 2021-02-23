import React, { Component } from 'react';
import ContactFooterView from '../ContactFooterView/contact-footer';
import { Link } from 'react-router-dom';
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import './design-view.scss';

class WebDesignView extends Component {
    render() {
        return (
            <div className="design-view__container">
                <section className="design-view__hero-container">
                    <h1 className="hero__title">Web Design</h1>
                    <p className="hero__text">
                        We build websites that serve as powerful marketing tools 
                        and bring memorable brand experiences.
                    </p>
                </section>
                <section className="design-view__demo-container">
                    <div className="design__grid-item">
                        <div id="express" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Express</h3>
                            <p className="grid-info__text">
                                A multi-carrier shipping website for ecommerce businesses
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="transfer" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Transfer</h3>
                            <p className="grid-info__text">
                                Site for low-cost money transfers and sending money within seconds
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="photon" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Photon</h3>
                            <p className="grid-info__text">
                                A state-of-the-art music player with high-resolution audio and DSP effects
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="builder" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Builder</h3>
                            <p className="grid-info__text">
                                Connects users with local contractors based on their location
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="blogr" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Blogr</h3>
                            <p className="grid-info__text">
                                Blogr is a platform for creating an online blog or publication
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="camp" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Camp</h3>
                            <p className="grid-info__text">
                                Get expert training in coding, data, design, and digital marketing
                            </p>
                        </div>
                    </div>
                </section>
                <section className="design-view__designs-container">
                    <Link id="app-design" className="designs__grid-item" to="/app-design">
                        <div className="designs-grid__background">
                            <h2 className="designs-grid__title">App Design</h2>
                            <p className="designs-grid__link">View Projects
                                <span className="designs-grid__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                    <Link id="graphic-design" className="designs__grid-item" to="/graphic-design">
                        <div className="designs-grid__background">
                            <h2 className="designs-grid__title">Graphic Design</h2>
                            <p className="designs-grid__link">View Projects
                                <span className="designs-grid__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                </section>
            <ContactFooterView />
            </div>
        )
    }
}

export default WebDesignView;

