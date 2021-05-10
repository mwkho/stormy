import React, { useState } from 'react';
import axios from 'axios';
import Profile from "./profile"
import DisplayFavourites from "./DisplayFavourites"

export default function Favourites(props){

  return(
    <>
    <Profile />
    <DisplayFavourites />
    </>
  )

};