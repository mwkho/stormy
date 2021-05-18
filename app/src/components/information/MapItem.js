import React from 'react';
import "./MapItem.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function MapItem(props){
  const lat = props.lat
  const lon = props.lon
  const bound = 0.5;

  // max boundaries based on these two corners
  const corner1 = [lat - bound, lon + bound]
  const corner2 = [lat + bound, lon - bound]

  return(
   // map that is centered around poi coordinates and a marker showing the poi */}
    <MapContainer center={[lat, lon]} maxBounds={[corner1, corner2]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
          
      <Marker position={[lat, lon]}/>
    </MapContainer>
  )
};