import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import selected from "../../lib/selected"

export default function FavouritesTableItem(props){
  const {poi, display, setPOI, setInformation, setPlaceId } = props



  return(
    <>
    <TableRow>
      <TableCell>
        <Typography variant='body2'>
          {poi.name}
        </Typography>
      </TableCell>

      <TableCell>
      <Typography variant='body2'>
        {poi.region}
      </Typography>
      </TableCell>
      <TableCell className=''>
      <Button variant='contained' color='primary' endIcon={<ChevronRightIcon/>} onClick={() => selected(poi ,setPOI, setInformation, display, setPlaceId)}>
          Conditions
        </Button>
      </TableCell>
      <TableCell className=''>
        <Button variant='contained' color='secondary' onClick={() =>{props.deleteFavourite(poi)}} endIcon={<RemoveIcon/>}> 
          Remove 
        </Button>
      </TableCell>
    </TableRow>
    </>
  )
};
