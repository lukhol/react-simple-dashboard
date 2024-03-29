import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLng } from "leaflet";

const MapPage = () => {
    const position = new LatLng(51.505, -0.09);

    return (
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
    )
};

export default MapPage;