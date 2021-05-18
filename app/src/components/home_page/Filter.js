import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from'@material-ui/core/FormControlLabel'
import { Container } from '@material-ui/core';
 

export default function Filter(props){

  return (
<>
    <RadioGroup 
      style={{display: 'flex', alignItems:'center'}}
      row 
      onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}>
      <FormControlLabel
      control={<Radio />} 
      checked= {props.mode === 'trail'}       
      label="Trail"
      />
    <FormControlLabel
      control={<Radio/>}
      checked={props.mode === 'mountain'}
      // onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}
      label="Mountain"
      />
    {/* <FormControlLabel
      control={<Checkbox 
        checked={props.mode === 'mountain'}
        onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}
        >
      </Checkbox>}
      label="Mountain"
    /> */}     
      </RadioGroup>
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