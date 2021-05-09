import React, { useState } from 'react';
import axios from 'axios';

export default function Filter(props){

  return (
  <>
  <input type="checkbox" id="type1" name="" value="Trail" />
  <label for="type1"> Trail</label>
  <input type="checkbox" id="type2" name="type2" value="Ski Route" />
  <label for="type2"> Ski Route</label>
  <input type="checkbox" id="type3" name="type3" value="Mountain" />
  <label for="type3"> Mountain</label>
  </>
  )
};


/*(
    
  <input type="checkbox" name="box1"></input>
  <label for></label>

  )*/