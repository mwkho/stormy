import React from 'react';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

export default function CommentListItem(props){

  return(
    <>
    <div>
      <Box
      borderBottom={1}
      >
      <p>{props.children}</p>
      </Box>
      <p>{props.timestamp}</p>
    </div>
    </>
  )

};