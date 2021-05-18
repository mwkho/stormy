import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading(props) {

  return ( 
    <> 
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent="center"
            height='100vh'
      >

      <CircularProgress/>
        <Typography>
          {props.children}
      </Typography>
      </Box>
      </>
  
  )
}