import React, {useEffect, useState}  from 'react';
import Profile from "./Profile"
import Axios from 'axios'
import { Container, Typography } from '@material-ui/core';
import { MapContainer, TileLayer} from 'react-leaflet'
import "../styles/DropDown.css"

import FavouriteItem from "./FavouriteItem"
// import FavouritesList from "./FavouritesList"
import SuccessAlert from '../SuccessAlert'

export default function Favourites(props){
  const [open, setOpen] = useState(false)
  const { favourites, setFavourites, display, setInformation, setPOI} = props
  const britishColumbia = [55.001251,-125.002441]

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
    const favouritesMarker = !favourites ? null : favourites.map(favourite => {
      const lat = parseFloat(favourite.lat)
      const lon = parseFloat(favourite.lon)
      const name = favourite.name
      const region = favourite.region 
      return (
        <FavouriteItem poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}></FavouriteItem>
      )
    })
  // render the favourites page again on load
  return(
    <Container>
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
      {favouritesMarker}
    </MapContainer>
      {/* <FavouritesList setFavourites={props.setFavourites} setInformation={props.setInformation} favourites={props.favourites} display={props.display} setPOI={props.setPOI} /> */}
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
