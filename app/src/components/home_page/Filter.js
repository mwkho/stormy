import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from'@material-ui/core/FormControlLabel'
<<<<<<< HEAD
import { Container } from '@material-ui/core';
=======
import {Box, Radio } from '@material-ui/core';
>>>>>>> 3712faf5b748003144c629c932c7f9e6955c568c
 

export default function Filter(props){

  return (
<<<<<<< HEAD
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
=======
    // hackish way to allow radio buttons to change the states
    <>
    <Box>
    <FormControlLabel 
      control={<Radio 
        checked={props.mode === 'trail'}
        onChange={event => {props.setMode(props.mode === 'trail' ? 'mountain' : 'trail');}}
        >
      </Radio>}
      label="Trail"
      />
    <FormControlLabel 
      control={<Radio
        checked={props.mode === 'mountain'}
        onChange={event => props.setMode(props.mode === 'trail' ? 'mountain' : 'trail')}
        >
      </Radio>}
      label="Mountain"
      />
      </Box>
>>>>>>> 3712faf5b748003144c629c932c7f9e6955c568c
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