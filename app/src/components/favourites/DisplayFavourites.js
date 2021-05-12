import React, { useState } from 'react';
import axios from 'axios';
import "../styles/DropDown.css"
import Axios from 'axios';


export default function Favourites(props){
  console.log("I am working")
  Axios.get('/api/getFavourites')
  .then(resp =>{
    console.log(resp.data)
    console.log("I am not working")
  })

  return(
<body>

<h2>Check out your favourite spots!</h2>
<p>Move the mouse over the button to open the dropdown menu.</p>

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

</body>
    
  )

};