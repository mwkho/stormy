import React, { useState } from 'react';
 
import axios from 'axios';

export default function Filter(props){

  return (
  <div className="Filter">
    <input type="checkbox" id="trail" name="trail" value="Trail"/>
    <label for="trail"> Trail</label>
    <input type="checkbox" id="mountain" name="mountain" value="Mountain" />
    <label for="mountain"> Mountain</label>
  {/* <input type="checkbox" id="type3" name="type3" value=/>
  <label for="type3"> </label> */}
  </div>
  )
};
