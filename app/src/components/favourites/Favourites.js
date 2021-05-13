import React from 'react';
import Profile from "./profile"
import DisplayFavourites from "./DisplayFavourites"

export default function Favourites(props){
    
  return(
    <>
      <h1>Check out your favourite spots!</h1>
      <h2>Move the mouse over the button to open the dropdown menu.</h2>
      <Profile/>
      <DisplayFavourites display={props.display} setPOI={props.setPOI} />
    </>
  )

};