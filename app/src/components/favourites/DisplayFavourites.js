import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/DropDown.css"
import Axios from 'axios';
import FavouriteItem from "./favouriteItem"


export default function Favourites(props){
  const [favourites, setFavourites] = useState()
  
  useEffect(()=>{Axios.get('/api/getFavourites')
  .then(resp =>{
    setFavourites([...resp.data.rows])
  })
  }, [])
  console.log(favourites)
  return(
<body>

<h2>Check out your favourite spots!</h2>
<p>Move the mouse over the button to open the dropdown menu.</p>

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  {!favourites ? 
  <FavouriteItem favourite="" /> : 
  favourites.map(favourite=>{
    return <FavouriteItem favourite={favourite.name}/>
  })
  }
  </div>
</div>

</body>
    
  )

};


 /*{favourites.map(favourite=>{
      return <FavouriteItem favourite={favourites.name}/>
    })}*/