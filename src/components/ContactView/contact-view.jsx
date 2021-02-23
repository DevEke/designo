import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './contact-view.scss';
import ca from '../../assets/shared/desktop/illustration-canada.svg';
import au from '../../assets/shared/desktop/illustration-australia.svg';
import uk from '../../assets/shared/desktop/illustration-united-kingdom.svg';

class ContactView extends Component {
    render() {
        return (
            <div className="contact-view__container">
                <div className="contact-view__contact-form">
                    <div className="contact-view__information">
                        <h2 className="contact-view__information-title">Contact Us</h2>
                        <p className="contact-view__information-text">
                            Ready to take it to the next level? Let’s talk about your project 
                            or idea and find out how we can help your business grow. If 
                            you are looking for unique digital experiences that’s relatable 
                            to your users, drop us a line.
                        </p>
                    </div>
                    <form className="contact-view__form">
                        <div className="contact-view__input-container">
                            <label htmlFor="name" className="contact-view__label">Name</label>
                            <input className="contact-view__input" type="text" placeholder="Name" id="name"/>
                        </div>
                        <div className="contact-view__input-container">
                            <label htmlFor="email" className="contact-view__label">Email</label>
                            <input className="contact-view__input" type="text" placeholder="Email" id="email"/>
                        </div>
                        <div className="contact-view__input-container">
                            <label htmlFor="phone" className="contact-view__label">Phone</label>
                            <input className="contact-view__input" type="text" placeholder="Phone" id="phone"/>
                        </div>
                        <div className="contact-view__input-container">
                            <label htmlFor="message" className="contact-view__label">Message</label>
                            <textarea className="contact-view__textarea" type="text" placeholder="Message" id="message"/>
                        </div>
                        <button className="contact-view__submit-button">Submit</button>
                    </form>
                </div>
                <div className="contact-view__location-grid">
                    <div className="contact-view__location">
                        <img src={ca} className="contact-view__location-image" alt="canada graphic"/>
                        <h3 className="contact-view__location-name">Canada</h3>
                        <Link to="/locations"><button className="contact-view__location-button">See Location</button></Link>
                    </div>
                    <div className="contact-view__location">
                        <img src={au} className="contact-view__location-image" alt="australia graphic"/>
                        <h3 className="contact-view__location-name">Australia</h3>
                        <Link to="/locations"><button className="contact-view__location-button">See Location</button></Link>
                    </div>
                    <div className="contact-view__location">
                        <img src={uk} className="contact-view__location-image" alt="uk graphic"/>
                        <h3 className="contact-view__location-name">United Kingdom</h3>
                        <Link to="/locations"><button className="contact-view__location-button">See Location</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactView;