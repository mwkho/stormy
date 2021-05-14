import React from 'react';
 
export default function Filter(props){

  return (
    // hackish way to allow radio buttons to change the states
    <div onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}>
      <input type="radio" name="option" id="trail" checked={props.mode === 'trail'}/>
      <label htmlFor="trail"> Trail</label>
      <input type="radio" id="mountain" name="option"checked={props.mode === 'mountain'}/>
      <label htmlFor="mountain"> Mountain</label>
    </div>
  )};
