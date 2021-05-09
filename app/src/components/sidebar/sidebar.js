import React, { useState } from 'react';
import axios from 'axios';
import SidebarElement from './sidebarElement'
import '../styles/SideNav.css'

export default function Sidebar(props){

  return(
    <>
     <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
    </>
  )

};