import React, { useState } from 'react';
import axios from 'axios';
import AvalancheItem from "./AvalancheItem"
import WeatherItem from "./WeatherItem"


export default function Information(props){

  return(
    <>
    <AvalancheItem />
    <WeatherItem />
    </>
  )

};