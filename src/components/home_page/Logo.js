import React from 'react';
import '../styles/homePage.css';
export default function Logo(props){

  return(
      <div class="container">
         <img alt='logo' className="logo" style={{width: props.width + "px"}} src="../../../images/stormy.png" /> 
         <div class="text">
           <h1 class="h1">Stormy BC</h1>
         </div>
      </div>
  )

};