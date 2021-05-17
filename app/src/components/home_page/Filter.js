import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from'@material-ui/core/FormControlLabel'
 
export default function Filter(props){

  return (
    // hackish way to allow radio buttons to change the states
    <>
    <FormControlLabel 
      control={<Checkbox 
        checked={props.mode === 'trail'}
        onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}
       >
      </Checkbox>}
      label="Trail"
    />
    <FormControlLabel 
      control={<Checkbox 
        checked={props.mode === 'mountain'}
        onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}
       >
      </Checkbox>}
      label="Mountain"
    />
     
    </>
  )};



  /*
  // hackish way to allow radio buttons to change the states
  <div onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}>
      <input type="radio" name="option" id="trail" checked={props.mode === 'trail'} readOnly/>
      <label htmlFor="trail"> Trail</label>
      <input type="radio" id="mountain" name="option" checked={props.mode === 'mountain'} readOnly/>
      <label htmlFor="mountain"> Mountain</label>
    </div>
  */