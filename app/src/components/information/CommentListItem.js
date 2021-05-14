import React from 'react';

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