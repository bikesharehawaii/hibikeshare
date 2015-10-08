import {default as actions} from './actions';
import qs from 'qs';
import request from 'reqwest-without-xhr2';
import routeStore from '../stores/routeStore.js';
import {Promise} from 'es6-promise';

const server = 'http://services.arcgis.com/tNJpAOha4mODLkXz/ArcGIS/rest/services/BikePaths/FeatureServer/0/query';

/**
 * Fetches routes from api server
 */
actions.initRoutes.listen(() => {
  let params = {
    where:'1=1',
    geometryType:'esriGeometryEnvelope',
    spatialRel:'esriSpatialRelIntersects',
    units:'esriSRUnit_Meter',
    outFields:'*',
    returnGeometry:'true',
    returnIdsOnly:'false',
    returnCountOnly:'false',
    returnExtentOnly:'false',
    returnDistinctValues:'false',
    returnZ:'false',
    returnM:'false',
    f:'pjson'
  }
  let url = `${server}?${qs.stringify(params)}`;
  request({
    url: url,
    type: 'json'
  }).then((data) => {
    routeStore().set('routes', data.features);
    console.log(routeStore().get('routes'));
  });
});
