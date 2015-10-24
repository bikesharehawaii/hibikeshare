require('normalize.css');
require('../styles/app.scss');

import React from 'react/addons';
import {default as actions} from '../actions/actions.js';
import routeActions from '../actions/routeActions.js';
import store from '../stores/routeStore.js';
import {
  vector_api_key,
  mapbox_access_token
} from '../globals/credentials.js';

import Navigation from './navigation.js';

import {
  mapboxStyles,
  route_server
} from '../globals/mapbox.js';

import {connect} from 'fynx-decorators';

const types = {
  "Lane": {
    color: "#FF851B",
    width: 1,
    opacity: 1
  },
  "Route": {
    color: "#3D9970",
    width: 1,
    opacity: 1
  },
  "Path": {
    color: "#FF851B",
    width: 1,
    opacity: 1
  },
  "Separated Bike Lane": {
    color: "#FFDC00",
    width: 3,
    opacity: 1
  }
}

@connect(store, 'data')
class AppComponent extends React.Component {
  componentDidMount() {
    L.mapbox.accessToken = mapbox_access_token;
    this.map = new L.mapbox.map('map', 'russellvea2.nlehndmb', {
      center: [21.331, -157.777],
      zoom: 13
    })
    const routes = [];
    let paths = L.esri.featureLayer({
      url: route_server,
      where: '1=1',
      style: (feature) => types[feature.properties.Facility_T],
      onEachFeature: (feature) => actions.addRoute(feature)
    })
    paths.addTo(this.map);
    paths.bindPopup((feature)=> {
      return feature.properties.Facility_N;
    });

  }

  render() {
    return (
      <div className="container">
        <div className="index" id="map" style={{height: '100vh', width: '100%'}}></div>
        <Navigation></Navigation>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
