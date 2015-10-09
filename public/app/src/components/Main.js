require('normalize.css');

import React from 'react/addons';
import {default as actions} from '../actions/actions.js';
import routeActions from '../actions/routeActions.js';
import store from '../stores/routeStore.js';
import {
  vector_api_key,
  mapbox_access_token
} from '../globals/credentials.js';

import {mapboxStyles} from '../globals/mapbox.js';
import {connect} from 'fynx-decorators';
// require('esri-leaflet/dist/esri-leaflet-src.js');

let yeomanImage = require('../images/yeoman.png');

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
    let paths = L.esri.featureLayer({
      url: 'http://services.arcgis.com/tNJpAOha4mODLkXz/ArcGIS/rest/services/BikePaths/FeatureServer/0',
      where: '1=1',
      style: (feature) => {
        return types[feature.properties.Facility_T];
      }
    })
    paths.addTo(this.map);
    paths.bindPopup((feature)=> {
      return feature.properties.Facility_N;
    });

  }

  render() {
    return (
      <div className="index" id="map" style={{height: '100vh', width: '100%'}}></div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
