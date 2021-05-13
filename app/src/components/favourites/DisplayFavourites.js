import React, { useState, useEffect } from 'react';
import "../styles/DropDown.css"
import Axios from 'axios';
import FavouriteItem from "./FavouriteItem"


export default function Favourites(props){
  const {setInformation, setPOI} = props
  
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
    return <FavouriteItem display={props.display} setPOI={setPOI} setInformation={setInformation} >{favourite.name}</FavouriteItem>
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