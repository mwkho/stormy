import React, {useEffect, useState}  from 'react';
import Profile from "./Profile"
import "../styles/DropDown.css"
import Axios from 'axios'
import { Container, Typography } from '@material-ui/core';
import { MapContainer, TileLayer} from 'react-leaflet'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FavouriteItem from "./FavouriteItem"
import FavouriteListItem from "./FavouriteListItem"
// import FavouritesList from "./FavouritesList"
import SuccessAlert from '../SuccessAlert'

export default function Favourites(props){
  const [open, setOpen] = useState(false)
  const { favourites, setFavourites, display, setInformation, setPOI} = props
  const britishColumbia = [55.001251,-125.002441]

  
  const headerNames = ["Name", 'Region', 'Actions']
  const header = headerNames.map((name) => {
    return <TableCell variant='head' colSpan={name=='Actions'? 2 : 1 }> {name} </TableCell>
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
        <FavouriteItem poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}></FavouriteItem>
      )
    })

    // favourites Table item
    const favouritesTables = !favourites ? null : favourites.map(favourite => {
      const lat = parseFloat(favourite.lat)
      const lon = parseFloat(favourite.lon)
      const name = favourite.name
      const region = favourite.region 
      return (
        <FavouriteListItem poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}></FavouriteListItem>
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
    
      <Typography variant='h4'>
        Move the mouse over the button to open the dropdown menu.
      </Typography>
    
      {/* <Profile/> */}
      <MapContainer center={britishColumbia} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {favouritesMarkers}
    </MapContainer>
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
    </Container>
  )
};



  // return(
  //   <>
  //   <div class="dropdown">
  //     <button class="dropbtn">Dropdown</button>
  //     <div class="dropdown-content">
  //       { favouritesList }
  //     </div>
  //   </div>
  //   </>
  // )
