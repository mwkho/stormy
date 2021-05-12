import React from 'react';

export default function SidebarElement(props){

  return(
    <>
    <img src={props.image} width="50" height="50"/> 
    <a href="">{props.text} </a>
    </>
  )

};