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
      <MapItem name={display_name} coordinates={`${lat}, ${lon}`} map="../../../images/trail.png"/>
      <WeatherItem weather={weather}/>
      <AvalancheBulletin bulletin={bulletin}/>
      <CommentList image="../../../images/profile_pic.png"/>
    </>
  )
};