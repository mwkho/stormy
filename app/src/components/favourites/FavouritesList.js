import React from 'react';
import Axios from 'axios';

import "../styles/DropDown.css"
import FavouriteItem from "./FavouriteItem"


export default function FavouritesList(props){
  const { favourites, setFavourites, display, setInformation, setPOI} = props

  const deleteFavourite = (poi) => {
    display('LOADING')
      Axios.get(`get/place/${poi.lat}/${poi.lon}`)
      .then((results) => {
        const id = results.data.rows[0].id
        return Axios.post('delete/favourite', {id: id})
      })
      .then(() => Axios.get('get/favourites'))
      .then((results) => {
        setFavourites(results.data.rows)
        setTimeout(() => display('FAVOURITES'), 500)
      })
      .catch(err => console.log(err))
  }

  const favouritesList = !favourites ? null : favourites.map(favourite => {
    const lat = parseFloat(favourite.lat)
    const lon = parseFloat(favourite.lon)
    const name = favourite.name
    const region = favourite.region 
    return <FavouriteItem poi={{lat, lon, name, region}} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}>{name}</FavouriteItem>
  })

  return(
    <>
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        { favouritesList }
      </div>
    </div>
    </>
    
  )

};
