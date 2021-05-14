import React, { useState } from 'react';
import "../styles/DropDown.css"
import selected from "../../lib/selected"
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';


export default function Favourites(props){
  const {poi, display, setPOI, setInformation } = props

  return(
  <>
    <a onClick={() => selected(poi ,setPOI, setInformation, display)}>{props.children}</a>
    <Button variant='contained' color='secondary' onClick={() => props.deleteFavourite(poi)} startIcon={<RemoveIcon/>}> Remove </Button>
  </>
    
  )

};