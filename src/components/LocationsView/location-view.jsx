import React, { Component } from 'react';
import ContactFooterView from '../ContactFooterView/contact-footer';
import './location-view.scss';

class LocationView extends Component {
    render() {
        return (
            <div className="location-view__container">
                <div className="location-view__grid">
                    <div className="location-view__ca-information">
                        <h2 className="location-view__title">Canada</h2>
                        <div className="location-view__contact-information">
                            <p className="location-view__information">
                                <strong>Designo Central Office</strong><br/>
                                3886 Wellington Street<br/>
                                Toronto, Ontario M9C 3J5
                            </p>
                            <p className="location-view__information">
                                <strong>Contact</strong><br/>
                                P: +1 253-863-8967<br/>
                                M: contact@designo.co
                            </p>
                        </div>  
                    </div>
                    <div className="location-view__ca-map"/>
                    <div className="location-view__au-map"/>
                    <div className="location-view__au-information">
                        <h2 className="location-view__title">Australia</h2>
                        <div className="location-view__contact-information">
                            <p className="location-view__information">
                                <strong>Designo AU Office</strong><br/>
                                19 Balonne Street<br/>
                                New South Wales 2443
                            </p>
                            <p className="location-view__information">
                                <strong>Contact</strong><br/>
                                P: (20) 6720 9092<br/>
                                M: contact@designo.au
                            </p>
                        </div>
                    </div>
                    <div className="location-view__uk-information">
                        <h2 className="location-view__title">United Kingdom</h2>
                        <div className="location-view__contact-information">
                            <p className="location-view__information">
                                <strong>Designo UK Office</strong><br/>
                                13 Colorado Way<br/>
                                Rhyd-y-fro SA8 9GA
                            </p>
                            <p className="location-view__information">
                                <strong>Contact</strong><br/>
                                P: 078 3115 1400<br/>
                                M: contact@designo.uk
                            </p>
                        </div>
                    </div>
                    <div className="location-view__uk-map"/>
                </div>
                <ContactFooterView/>
            </div>
        )
    }
}

export default LocationView;