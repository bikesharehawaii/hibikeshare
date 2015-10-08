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

let yeomanImage = require('../images/yeoman.png');

@connect(store, 'data')
class AppComponent extends React.Component {
  componentDidMount() {
    actions.initRoutes();
    L.mapbox.accessToken = mapbox_access_token;
    this.map = new L.mapbox.map('map', 'russellvea2.nl7ij7em', {
      center: [21.456597,-157.857164],
      zoom: 12
    })
  }

  componentWillUpdate() {

  }

  render() {
    return (
      <div className="index" id="map" style={{height: '100vh'}}></div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
