import React from 'react';

export default function SidebarElement(props){

  return(
    <>
    <img onClick={props.onClick} src={props.image} width="50" height="50"/> 
    <a onClick={props.onClick} >{props.text} </a>
    </>
  )

};