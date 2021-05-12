import React, { useState } from 'react';
import axios from 'axios';
import "../styles/DropDown.css"
import Axios from 'axios';


export default function Favourites(props){
console.log(props.favourite)

  return(
  <>
  <a href="#">{props.favourite}</a>
  </>
    
  )

};