import React from 'react'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading(props) {

  return ( 
    <> 
      <CircularProgress/>
        <Typography>
          {props.children}
      </Typography>
    </>
  
  )
}