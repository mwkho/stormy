import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function TabPanel(props) {
  const {tab, index,  children} = props 
  return (
    <>
      <div role="tabpanel" hidden={tab !== index} >
        {tab === index && (
         <Box>
           <Typography>{children} </Typography>
         </Box>
        )}
      </div>
    </>
  )
}