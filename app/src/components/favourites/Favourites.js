import React, { useState, useEffect } from 'react';
import Profile from "./profile"
import DisplayFavourites from "./DisplayFavourites"

export default function Favourites(props){

  


  return(
    <>
    <Profile />
    <DisplayFavourites display={props.display} />
    </>
  )

};