import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import passionate from '../../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg';
import './home-view.scss';
import ContactFooterView from '../ContactFooterView/contact-footer';


class HomeView extends Component {
    render() {
        return (
            <div className="app-home-view__container">
                <section className="home-view-hero__container">
                    <h1 className="home-view__title">Award-winning custom designs and digital branding solutions</h1>
                    <p className="home-view__text">
                        With over 10 years in the industry, we are experienced in 
                        creating fully responsive websites, app design, and engaging 
                        brand experiences. Find out more about our services.
                    </p>
                    <Link to="/about" className="link-style">
                        <button className="home-view__button">Learn More</button>
                    </Link>
                </section>
                <section className="home-view-projects__container">
                    <Link to="/web-design" className="link-style home-view-projects__web">
                        <div className="home-view__background">
                            <h2 className="home-view-projects__title">Web Design</h2>
                            <p className="home-view-projects__link">
                                View Projects
                                <span className="home-view-projects__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                    <Link to="/app-design" className="link-style home-view-projects__app">
                        <div className="home-view__background">
                            <h2 className="home-view-projects__title">App Design</h2>
                            <p className="home-view-projects__link">
                                View Projects
                                <span className="home-view-projects__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                    <Link to="/graphic-design" className="link-style home-view-projects__graphic">
                        <div className="home-view__background">
                            <h2 className="home-view-projects__title">Graphic Design</h2>
                            <p className="home-view-projects__link">
                                View Projects
                                <span className="home-view-projects__arrow"><img src={arrow} alt="right arrow"/></span>
                            </p>
                        </div>
                    </Link>
                </section>
                <section className="home-view-stats__container">
                    <div className="home-view-stats__item">
                        <img className="home-view-stats__image" src={passionate} alt="passionate graphic"/>
                        <h3 className="home-view-stats__title">Passionate</h3>
                        <p className="home-view-stats__text">
                            Each project starts with an in-depth brand research to ensure 
                            we only create products that serve a purpose. We merge art, 
                            design, and technology into exciting new solutions.  
                        </p>
                    </div>
                    <div className="home-view-stats__item">
                        <img className="home-view-stats__image" src={resourceful} alt="passionate graphic"/>
                        <h3 className="home-view-stats__title">Resourceful</h3>
                        <p className="home-view-stats__text">
                            Everything that we do has a strategic purpose. We use an agile 
                            approach in all of our projects and value customer collaboration. 
                            It guarantees superior results that fulfill our clients’ needs.  
                        </p>
                    </div>
                    <div className="home-view-stats__item">
                        <img className="home-view-stats__image" src={friendly} alt="passionate graphic"/>
                        <h3 className="home-view-stats__title">Friendly</h3>
                        <p className="home-view-stats__text">
                            We are a group of enthusiastic folks who know how to put people 
                            first. Our success depends on our customers, and we strive to 
                            give them the best experience a company can provide. 
                        </p>
                    </div>
                </section>
                <ContactFooterView />
            </div>
        )
    }
}

export default HomeView;