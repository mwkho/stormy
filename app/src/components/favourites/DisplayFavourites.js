import React, { useState, useEffect } from 'react';
import "../styles/DropDown.css"
import Axios from 'axios';
import FavouriteItem from "./FavouriteItem"


export default function Favourites(props){
  const {display, setInformation, setPOI} = props

  const [favourites, setFavourites] = useState([])
  
  useEffect(()=>{
    Axios.get('/api/getFavourites')
    .then((results) => {
      setFavourites(results.data.rows)
      console.log(results.data.rows)
      console.log("testing", favourites)
    })
  },[])

  const favouritesList = !favourites ? undefined : favourites.map(favourite => {
    return <FavouriteItem display={display} setPOI={setPOI} setInformation={setInformation} >{favourite.name}</FavouriteItem>
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


 /*{favourites.map(favourite=>{
      return <FavouriteItem favourite={favourites.name}/>
    })}*/