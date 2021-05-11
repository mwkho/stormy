import React, { useState } from 'react';
import axios from 'axios';


export default function AvalanceItem(props){

  
  return(
    <>
    <h1>{props.name}</h1>
    <img src={props.map} ></img>
    <p>{props.coordinates}</p>
    </>
  
    
  )

};