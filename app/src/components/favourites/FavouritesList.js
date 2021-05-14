import React, { useState, useEffect } from 'react';
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
    return <FavouriteItem poi={{lat, lon, display_name: favourite.name }} display={display} setPOI={setPOI} setInformation={setInformation} deleteFavourite={deleteFavourite}>{favourite.name}</FavouriteItem>
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
