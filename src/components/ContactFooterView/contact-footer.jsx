import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './contact-footer.scss';

class ContactFooterView extends Component {
    render() {
        return (
            <section className="app-contact-footer-view__container">
                <div className="contact-footer-view__container">
                    <div className="contact-footer-view__information">
                        <h1 className="contact-footer-view__title">Let's talk about your project</h1>
                        <p className="contact-footer-view__text">
                            Ready to take it to the next level? Contact us today and 
                            find out how our expertise can help your business grow.
                        </p>
                    </div>
                    <Link to="/contact" className="link-style">
                        <button className="contact-footer-view__button">Get in touch</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default ContactFooterView;