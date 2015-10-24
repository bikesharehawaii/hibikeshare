import {vector_api_key} from './credentials.js';
export const route_server = 'http://services.arcgis.com/tNJpAOha4mODLkXz/ArcGIS/rest/services/BikePaths/FeatureServer/0';

/**
 *  Source: https://github.com/mapzen/mapboxgl-vector-tiles/blob/master/index.html
 */
export const mapboxStyles = {
  "version": 8,
  "glyphs": "mapbox://fontstack/{fontstack}/{range}.pbf",
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": [`https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=${vector_api_key}`]
    }
  },
}
