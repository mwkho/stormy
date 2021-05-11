import React, { useState } from 'react';
import axios from 'axios';
import AvalancheItem from "./AvalancheItem"
import WeatherItem from "./WeatherItem"
import CommentList from "./CommentList"
import MapItem from "./MapItem"


export default function Information(props){

  return(
    <>
    <AvalancheItem />
    <WeatherItem />
    <MapItem name="Howe Sound Crest" coordinates="49.447102, -123.349380" map="../../../images/trail.png"/>
    <CommentList image="../../../images/profile_pic.png"/>
    </>
  )

};