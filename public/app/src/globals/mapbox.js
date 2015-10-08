import {vector_api_key} from './credentials.js';


const styles = {
  "sans": "Open Sans Regular, Arial Unicode MS Regular",
  "sans-it": "Open Sans Italic, Arial Unicode MS Regular",
  "sans-md": "Open Sans Semibold, Arial Unicode MS Bold",
  "sans-bd": "Open Sans Bold, Arial Unicode MS Bold",
  "big-label": "#cb4b49",
  "medium-label": "#f27a87",
  "small-label": "#384646",
  "label-halo": "rgba(255,255,255,0.5)",
  "label-halo-dark": "rgba(0,0,0,0.2)",
  land: "#ededed",
  water: "#7acad0",
  park: "#c2cd44",
  building: "#afd3d3",
  highway: "#5d6765",
  road: "#c0c4c2",
  path: "#5d6765",
  subway: "#ef7369",
  "highway-width": {
   "base": 1.55,
   "stops": [[4, 0.5], [8, 1.5], [20, 40]]
  },
  "road-width": {
   "base": 1.55,
   "stops": [[4, 0.25], [20, 30]]
  },
  "path-width": {
   "base": 1.8,
   "stops": [[10, 0.15], [20, 15]]
  },
  "road-misc-width": {
   "base": 1,
   "stops": [[4, 0.25], [20, 30]]
  },
  "stream-width":{
   "base": 0.5,
   "stops": [[4, 0.5], [10, 1.5], [20, 5]]
  }
 };

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
