import React from 'react';
import selected from "../../lib/selected"
import Button from '@material-ui/core/Button';
import {Marker, Popup } from 'react-leaflet'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RemoveIcon from '@material-ui/icons/Remove';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function FavouritesMarker(props){
  const {poi, display, setPOI, setInformation, setPlaceId } = props

  return(
  <Marker position={[poi.lat, poi.lon]}>
    <Popup>
      <Typography variant='body2'>
        {poi.name}
      </Typography>

      <Typography variant='body2'>
        Region: {poi.region}
      </Typography>
      <Box 
        display='flex'
        flexDirection="row"
      >
        <Button variant='contained' color='primary' endIcon={<ChevronRightIcon/>} onClick={() => selected(poi ,setPOI, setInformation, display, setPlaceId)}>
          Information
        </Button>
        <Button variant='contained' color='secondary' onClick={() =>{props.deleteFavourite(poi)}} endIcon={<RemoveIcon/>}> 
          Remove 
        </Button>
      </Box>
    </Popup>
  </Marker>
  )

  // return(
  // <>
  //   <a onClick={() => selected(poi ,setPOI, setInformation, display)}>{props.children}</a>
  //   <Button variant='contained' color='secondary' onClick={() => props.deleteFavourite(poi)} startIcon={<RemoveIcon/>}> Remove </Button>
  // </>
    
  // )

};