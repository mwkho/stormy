import React from 'react';
 
export default function Filter(props){

  return (
    // hackish way to allow radio buttons to change the states
    <div onChange={event => props.setMode((props.mode+1)%2)}>
      <input type="radio" name="option" id="trail" checked={props.mode === 0}/>
      <label htmlFor="trail"> Trail</label>
      <input type="radio" id="mountain" name="option"checked={props.mode === 1}/>
      <label htmlFor="mountain"> Mountain</label>
    </div>
  )};
