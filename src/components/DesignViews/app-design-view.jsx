import React, { Component } from 'react';
import ContactFooterView from '../ContactFooterView/contact-footer';
import { Link } from 'react-router-dom';
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import './design-view.scss';

class AppDesignView extends Component {
    render() {
        return (
            <div className="design-view__container">
                <section id="app__hero" className="design-view__hero-container">
                    <h1 className="hero__title">App Design</h1>
                    <p className="hero__text">
                        Our mobile designs bring intuitive digital solutions
                        to your customers right at their fingertips.
                    </p>
                </section>
                <section className="design-view__demo-container">
                    <div className="design__grid-item">
                        <div id="airfilter" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Airfilter</h3>
                            <p className="grid-info__text">
                                Solving the problem of poor indoor air quality by filtering the air
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="eyecam" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Eyecam</h3>
                            <p className="grid-info__text">
                                Product that lets you edit your favorite photos and videos at any time
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="faceit" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Faceit</h3>
                            <p className="grid-info__text">
                                Get to meet your favorite internet superstar with the faceit app
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="todo" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Todo</h3>
                            <p className="grid-info__text">
                                A todo app that features cloud sync with light and dark mode
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="loop" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Loopstudios</h3>
                            <p className="grid-info__text">
                                Blogr is a platform for creating an online blog or publication
                            </p>
                        </div>
                    </div>
                </section>
                <section className="design-view__designs-container">
                    <Link id="web-design" className="designs__grid-item" to="/web-design">
                        <div className="designs-grid__background">
                            <h2 className="designs-grid__title">Web Design</h2>
                            <p className="designs-grid__link">View Projects
                                <span className="designs-grid__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                    <Link id="graphic-design"className="designs__grid-item" to="/graphic-design">
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

export default AppDesignView;

