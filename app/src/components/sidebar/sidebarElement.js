import React, { useState } from 'react';
import axios from 'axios';



export default function SidebarElement(props){

  return(
    <>
    <img src={props.image} width="50" height="50"/> 
    <a href="#" onClick={props.onClick}>{props.text} </a>
    </>
  )

};