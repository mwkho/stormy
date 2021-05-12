import React from 'react';
import SidebarElement from './SidebarElement'
import '../styles/SideNav.css'

export default function Sidebar(props) {

const test = function(){
  alert("Hiya!")
}

  return(
    <>
     <div class="sidenav">
  <SidebarElement image="../../../images/profile_pic.png" text="Egg Eggerson" onClick={test} />
  <SidebarElement image="../../../images/home.png" text="Home" onClick={() => props.setPage('HOME')}/>
  <SidebarElement image="../../../images/heart.png" text="Favourites" onClick={() => props.setPage('FAVOURITES')}/>
  
</div>
    </>
  )

};