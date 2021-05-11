import React, { useState } from 'react';
import axios from 'axios';
import SidebarElement from './sidebarElement'
import '../styles/SideNav.css'

export default function Sidebar(props){

const test = function(){
  alert("Hiya!")
}

  return(
    <>
     <div class="sidenav">
  <SidebarElement image="../../../images/profile_pic.png" text="Egg Eggerson" onClick={test} />
  <SidebarElement image="../../../images/home.png" text="Home" onClick={props.homePage}/>
  <SidebarElement image="../../../images/heart.png" text="Favourites" onClick={props.favourites}/>
  
</div>
    </>
  )

};