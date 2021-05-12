import React from 'react';

import AvalancheBulletin from "./AvalancheBulletin"
import WeatherItem from "./WeatherItem"
import CommentList from "./CommentList"
import MapItem from "./MapItem"


export default function Information(props){
  const {display_name, lat, lon} = props.poi
  const {weather, bulletin} = props.information

  console.log(bulletin)
  return(
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />

      <h1>{display_name}</h1>
      <h2>Getting weather and avalanche bulletin for  lat: {lat}, lon:{lon} </h2>
      <WeatherItem weather={weather}/>
      <AvalancheBulletin bulletin={bulletin}/>
      <MapItem name={display_name} lat={lat} lon={lon} map="../../../images/trail.png"/>
      <CommentList image="../../../images/profile_pic.png"/>
      </>
  )
};