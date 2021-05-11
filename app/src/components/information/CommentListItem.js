import React, { useState } from 'react';
import axios from 'axios';


export default function CommentListItem(props){

  return(
    <>
    <div>
      <p> {props.comment}</p>
      <p>{props.timestamp}</p>
    </div>
    </>
  )

};