import React from 'react';
import Box from '@material-ui/core/Box';

export default function TabPanel(props) {
  const {tab, index,  children} = props 
  return (
    <>
      <div role="tabpanel" hidden={tab !== index} >
        {tab === index && (
         <Box>
           {children}
         </Box>
        )}
      </div>
    </>
  )
}