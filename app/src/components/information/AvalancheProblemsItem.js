import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';


const AvalancheProblemsItem = (props) => {
  return (
    <>
 
      <TableRow>
        <TableCell varient="head">{props.type}</TableCell >
      </TableRow>
      <TableRow>
        <TableCell>{props.comment}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell varient="head">Elevation</TableCell >
      </TableRow>
      <TableRow>
        <TableCell> {props.elevation} </TableCell>
      </TableRow>
      <TableRow>
        <TableCell varient="head">Aspects</TableCell >
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{props.aspects}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell varient="head">Expected size</TableCell >
        <TableCell varient="head">Likelihood</TableCell >
      </TableRow>
      <TableRow>
        <TableCell>{props.expectedSize}</TableCell>
        <TableCell>{props.likelihood}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell varient="head">Aspects</TableCell>
        <TableCell>{props.aspects}</TableCell>
      </TableRow>
    </>

  )
}

export default AvalancheProblemsItem