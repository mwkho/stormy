import React from 'react';

import AvalancheItem from "./AvalancheItem"
import WeatherItem from "./WeatherItem"
import CommentList from "./CommentList"
import MapItem from "./MapItem"


export default function Information(props){
  const {display_name, lat, lon} = props.poi
  const {weather, bulletin} = props.information

  console.log('***********bulletin*************')
  console.log(bulletin)
  return(
    <>
      <AvalancheItem bulletin={bulletin}/>
      <WeatherItem weather={weather}/>
      <MapItem name={display_name} coordinates={[lat, lon]} map="../../../images/trail.png"/>
      <CommentList image="../../../images/profile_pic.png"/>
    </>
  )
};