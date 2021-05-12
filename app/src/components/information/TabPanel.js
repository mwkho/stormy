import Box from '@material-ui/core/Box';
import React from 'react';


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