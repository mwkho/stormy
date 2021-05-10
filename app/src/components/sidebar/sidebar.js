import React, { useState } from 'react';
import axios from 'axios';
import SidebarElement from './sidebarElement'
import '../styles/SideNav.css'

export default function Sidebar(props){

  return(
    <>
     <div class="sidenav">
  <SidebarElement image="../../../images/profile_pic.png" text="Egg Eggerson"/>
  <SidebarElement image="../../../images/home.png" text="Home"/>
  <SidebarElement image="../../../images/heart.png" text="Favourites"/>
  
</div>
    </>
  )

};