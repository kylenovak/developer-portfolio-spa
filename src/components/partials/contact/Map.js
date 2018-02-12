import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const config = require('../../../config');
const mapStyle = require('./styles/mapStyle.json');

class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 38.624716, lng: -90.184793 }}
        defaultOptions={
          {
            styles: mapStyle,
            gestureHandling: 'cooperative',
          }
        }
      >
        {this.props.isMarkerShown && <Marker title='St. Louis, MO' position={{ lat: 38.624716, lng: -90.184793 }} />}
      </GoogleMap>
    );
  }
}
const MapWrapper = withScriptjs(withGoogleMap(Map));

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.api_uri = "https://maps.googleapis.com/maps/api/js?key=";
    this.api_key = config.GOOGLE_MAPS_API_KEY;
    this.api_params = "&v=3.exp&libraries=geometry,drawing,places";
    this.api_url = this.api_uri + this.api_key + this.api_params;
  }

  render() {
    return (
      <MapWrapper
        isMarkerShown={true}
        googleMapURL={this.api_url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default MyMap;
