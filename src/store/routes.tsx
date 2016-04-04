import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import MapPage from '../containers/map-page';
import ProfilePage from '../containers/profile-page';
import EventPage from '../containers/event-page';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="user/:id" component={ ProfilePage } />
    <Route path="event/:id" component={ EventPage } />
    <Route path="map" component={ MapPage } />
    <Route path="about" component={ AboutPage }/>
  </Route>
);
