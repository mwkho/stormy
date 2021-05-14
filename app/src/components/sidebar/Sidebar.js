import React from 'react';
import SidebarElement from './SidebarElement'
import '../styles/SideNav.css'
import axios from 'axios';
export default function Sidebar(props) {
  const {setPage, setFavourites}=props

// get favourites when clicked on favourites and show loading page
const getFavourites = function(){
  setPage('LOADING')
  axios.get('/get/favourites')
  .then((results) => {
    setFavourites(results.data.rows)
    setTimeout(() => setPage('FAVOURITES'), 500)
  })
}

  return(
    <>
     <div className="sidenav">
  <SidebarElement image="../../../Images/profile_pic.png" text="Egg Eggerson" onClick={() => 'hi'} />
  <SidebarElement image="../../../Images/home.png" text="Home" onClick={() => setPage('HOME')}/>
  <SidebarElement image="../../../Images/heart.png" text="Favourites" onClick={getFavourites}/>
  
</div>
    </>
  )

};