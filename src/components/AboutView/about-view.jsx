import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about-view.scss';
import ContactFooterView from '../ContactFooterView/contact-footer';
import ca from '../../assets/shared/desktop/illustration-canada.svg';
import au from '../../assets/shared/desktop/illustration-australia.svg';
import uk from '../../assets/shared/desktop/illustration-united-kingdom.svg';

class AboutView extends Component {
    render() {
        return (
            <div className="about-view__container">
                <div className="about-view__hero-container">
                    <div className="about-view__hero-introduction">
                        <h2 className="about-view__hero-title">About Us</h2>
                        <p className="about-view__hero-text">
                            Founded in 2010, we are a creative agency that produces 
                            lasting results for our clients. We’ve partnered with 
                            many startups, corporations, and nonprofits alike to 
                            craft designs that make real impact. We’re always looking 
                            forward to creating brands, products, and digital experiences 
                            that connect with our clients’ audiences.
                        </p>
                    </div>
                    <div className="about-view__hero-image"/>
                </div>
                <div className="about-view__talent-container">
                    <div className="about-view__talent-image">

                    </div>
                    <div className="about-view__talent-information">
                        <h2 className="about-view__talent-title">
                            World-class talent
                        </h2>
                        <p className="about-view__talent-text">
                            We are a crew of strategists, problem-solvers, and technologists. 
                            Every design is thoughtfully crafted from concept to launch, 
                            ensuring success in its given market. We are constantly updating 
                            our skills in a myriad of platforms.   
                            <br/><br/>
                            Our team is multi-disciplinary and we are not merely interested 
                            in form — content and meaning are just as important. We give great 
                            importance to craftsmanship, service, and prompt delivery. Clients 
                            have always been impressed with our high-quality outcomes that 
                            encapsulates their brand’s story and mission.
                        </p>
                    </div>
                </div>
                <div className="about-view__location-grid">
                    <div className="about-view__location">
                        <img src={ca} className="about-view__location-image" alt="canada graphic"/>
                        <h3 className="about-view__location-name">Canada</h3>
                        <Link to="/locations"><button className="about-view__location-button">See Location</button></Link>
                    </div>
                    <div className="about-view__location">
                        <img src={au} className="about-view__location-image" alt="australia graphic"/>
                        <h3 className="about-view__location-name">Australia</h3>
                        <Link to="/locations"><button className="about-view__location-button">See Location</button></Link>
                    </div>
                    <div className="about-view__location">
                        <img src={uk} className="about-view__location-image" alt="uk graphic"/>
                        <h3 className="about-view__location-name">United Kingdom</h3>
                        <Link to="/locations"><button className="about-view__location-button">See Location</button></Link>
                    </div>
                </div>
                <div className="about-view__deal-container">
                    <div className="about-view__deal-information">
                        <h2 className="about-view__deal-title">The real deal</h2>
                        <p className="about-view__deal-text">
                            As strategic partners in our clients’ businesses, we are ready 
                            to take on any challenge as our own. Solving real problems 
                            require empathy and collaboration, and we strive to bring a 
                            fresh perspective to every opportunity. We make design and 
                            technology more accessible and give you tools to measure success.
                            <br/><br/>
                            We are visual storytellers in appealing and captivating ways. 
                            By combining business and marketing strategies, we inspire 
                            audiences to take action and drive real results.
                        </p>
                    </div>
                    <div className="about-view__deal-image"/>
                </div>
                <ContactFooterView/>
            </div>
        )
    }
}

export default AboutView;