import React from 'react';
import Profile from "./Profile"
import FavouritesList from "./FavouritesList"

export default function Favourites(props){
  // render the favourites page again on load
  return(
    <>
      <h1>Check out your favourite spots!</h1>
      <h2>Move the mouse over the button to open the dropdown menu.</h2>
      <Profile/>
      <FavouritesList setFavourites={props.setFavourites} setInformation={props.setInformation} favourites={props.favourites} display={props.display} setPOI={props.setPOI} />
    </>
  )

};