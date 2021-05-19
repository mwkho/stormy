import React, { useState}  from 'react';
import Axios from 'axios'
import { Container, Typography } from '@material-ui/core';
import { MapContainer, TileLayer} from 'react-leaflet'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FavouritesMarker from "./FavouritesMarker"
import FavouritesTableItem from "./FavouritesTableItem"
import SuccessAlert from '../SuccessAlert'

export default function Favourites(props){
  const [open, setOpen] = useState(false)

  const { favourites, setFavourites, display, setInformation, setPOI, setPlaceId} = props
  
  const britishColumbia = [55.001251,-125.002441]
  const headerNames = ["Name", 'Region', 'Actions']
  const header = headerNames.map((name) => {
    return <TableCell variant='head' colSpan={name === 'Actions'? 2 : 1 }> {name} </TableCell>
  })  

  // deleting favourites and showing popup on success
  const deleteFavourite = (poi) => {
    // display('LOADING')
      Axios.get(`get/place/${poi.lat}/${poi.lon}`)
      .then((results) => {
        const id = results.data.rows[0].id
        return Axios.post('delete/favourite', {id: id})
      })
      .then(() => Axios.get('get/favourites'))
      .then((results) => {
        setOpen(true)
        setFavourites(results.data.rows)
      })
      .catch(err => console.log(err))
  }

    // generating favourite markers in map
    const favouritesMarkers = !favourites ? null : favourites.map(favourite => {
      const lat = parseFloat(favourite.lat)
      const lon = parseFloat(favourite.lon)
      const name = favourite.name
      const region = favourite.region 
      return (
        <FavouritesMarker setPlaceId={setPlaceId} poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}></FavouritesMarker>
      )
    })

    // favourites Table item
    const favouritesTables = !favourites ? null : favourites.map(favourite => {
      const lat = parseFloat(favourite.lat)
      const lon = parseFloat(favourite.lon)
      const name = favourite.name
      const region = favourite.region 
      return (
        <FavouritesTableItem setPlaceId={setPlaceId} poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}></FavouritesTableItem>
      )
    })

  // render the favourites page again on load
  return(

    <Container     maxWidth='md'>

      <Typography variant='h3'>
      Check out your favourite spots!
      </Typography>
      <SuccessAlert open={open} onClose={() => setOpen(false)}>
        Removed from favourites!
      </SuccessAlert>
    

      <Typography variant='body1'>
        To see the conditions for your favourite locations, click on a point in the map or scroll down for your list of favourites and click on the 'Information'
      </Typography>
    
      {/* <Profile/> */}
      <MapContainer center={britishColumbia}  minZoom={4.5} zoomSnap={0.5} zoom={4.5} maxBounds={[[60, -140],[ 49.1, -114.2]]} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {favouritesMarkers}
    </MapContainer>
    <Paper style={{marginBottom:"2rem"}}>
    <TableContainer>
      <Table>
      <TableHead>
      <TableRow>
        {header}
      </TableRow>
    </TableHead>
    <TableBody>
        {favouritesTables}
    </TableBody>
      {/* <FavouritesList setFavourites={props.setFavourites} setInformation={props.setInformation} favourites={props.favourites} display={props.display} setPOI={props.setPOI} /> */}
      </Table>
    </TableContainer>
        </Paper>
    </Container>
  )
};

