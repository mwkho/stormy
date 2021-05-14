import React, { useState } from 'react';
import axios from 'axios';


export default function CommentListItem(props){

  return(
    <>
    <div>
      <p>{props.children}</p>
      <p>{props.timestamp}</p>
    </div>
    </>
  )

};