import React, { useState } from 'react';
import "../styles/DropDown.css"
import selected from "../../lib/selected"

export default function Favourites(props){
  const {poi, display, setPOI, setInformation, } = props
  return(
  <>
    <a onClick={() => selected(poi ,setPOI, setInformation, display)}>{props.children}</a>
  </>
    
  )

};