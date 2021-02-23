import React, { Component } from 'react';
import ContactFooterView from '../ContactFooterView/contact-footer';
import { Link } from 'react-router-dom';
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import './design-view.scss';

class GraphicDesignView extends Component {
    render() {
        return (
            <div className="design-view__container">
                <section id="graphic__hero" className="design-view__hero-container">
                    <h1 className="hero__title">Graphic Design</h1>
                    <p className="hero__text">
                        We deliver eye-catching branding materials that are 
                        tailored to meet your business objectives.
                    </p>
                </section>
                <section id="single__grid" className="design-view__demo-container">
                    <div className="design__grid-item">
                        <div id="brown" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Tim Brown</h3>
                            <p className="grid-info__text">
                                A book cover designed for Tim Brown’s new release, ‘Change’
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="water" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Boxed Water</h3>
                            <p className="grid-info__text">
                                A simple packaging concept made for Boxed Water
                            </p>
                        </div>
                    </div>
                    <div className="design__grid-item">
                        <div id="science" className="design__grid-image"/>
                        <div className="design__grid-info">
                            <h3 className="grid-info__title">Science!</h3>
                            <p className="grid-info__text">
                                A poster made in collaboration with the Federal Art Project
                            </p>
                        </div>
                    </div>
                </section>
                <section className="design-view__designs-container">
                    <Link id="app-design" className="designs__grid-item" to="/web-design">
                        <div className="designs-grid__background">
                            <h2 className="designs-grid__title">App Design</h2>
                            <p className="designs-grid__link">View Projects
                                <span className="designs-grid__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                    <Link id="web-design"className="designs__grid-item" to="/graphic-design">
                        <div className="designs-grid__background">
                            <h2 className="designs-grid__title">Web Design</h2>
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

export default GraphicDesignView;

