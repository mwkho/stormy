import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from'@material-ui/core/FormControlLabel'
import {Box, Radio } from '@material-ui/core';
 
export default function Filter(props){

  return (
    // hackish way to allow radio buttons to change the states
    <>
    <Box>
    <FormControlLabel 
      control={<Radio 
        checked={props.mode === 'trail'}
        onChange={event => {props.setMode(props.mode === 'trail' ? 'mountain' : 'trail'); props.reset()}}
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