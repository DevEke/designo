import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBarView/nav-bar';
import HomeView from './components/HomeView/home-view';
import WebDesignView from './components/DesignViews/web-design-view';
import AppDesignView from './components/DesignViews/app-design-view';
import GraphicDesignView from './components/DesignViews/graphic-design-view';
import AboutView from './components/AboutView/about-view';
import LocationView from './components/LocationsView/location-view';
import FooterView from './components/FooterView/footer-view';
import ContactView from './components/ContactView/contact-view';
import './_styles-library.scss';

class Designo extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" render={() => <HomeView />}/>
        <Route path="/web-design" render={() => <WebDesignView />}/>
        <Route path="/app-design" render={() => <AppDesignView />}/>
        <Route path="/graphic-design" render={() => <GraphicDesignView />}/>
        <Route path="/about" render={() => <AboutView />}/>
        <Route path="/locations" render={() => <LocationView />}/>
        <Route path="/contact" render={() => <ContactView />}/>
        <FooterView/>
      </Router>
    )
  }
}


export default Designo;