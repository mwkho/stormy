import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

export default function SucessAlert(props) {

  return ( 
    <Snackbar
    key={'topright'}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    autoHideDuration = {2000}
    open = {props.open}
    onClose = {props.onClose} 
    >
    <SnackbarContent style={{
      backgroundColor:'#4caf50'
    }}
    message= {props.children}
    />
    </Snackbar>
  )
}