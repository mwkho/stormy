import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  'danger-no-rating': {
    background:'white',
    color: 'black'
  },
  'danger-low':{
    background:'green',
    color: 'black'
  },
  'danger-moderate':{
    background:'yellow',
    color: 'black'
  },
  'danger-considerable':{
    background:'orange',
    color: 'black'
  },
  'danger-high':{
    background:'red',
    color: 'black'
  },
  'danger-extreme':{
    background:'black',
    color: 'white'
  },
  'danger-date': {
    background:'black',
    color: 'white'
  },
  'alpine': {
    background:'#cceeff',
    color: 'black'
  },
  "treeline": {
    background:'#76ff03',
    color: 'black'
  },
  "below-treeline": {
    background:'#52b202',
    color: 'black'
  }
})

const dangerColour = (rating) => {
  if (rating.includes('N/A')) {
    return "-no-rating"
  }
  if (rating.includes('1')) {
    return "-low"
  }
  if (rating.includes('2')) {
    return "-moderate"
  }
  if (rating.includes('3')) {
    return "-considerable"
  }
  if (rating.includes('4')) {
    return "-high"
  }
  if (rating.includes('5')) {
    return "-extreme"
  }
}

export default function AvalancheDangerItem(props) {
  const {alp, btl, tln} = props
  const classes = useStyles();
  return(
    <>
      <TableRow>
        <TableCell variant='head' classes={{root: classes["danger-date"]}}>{props.date}</TableCell>
        <TableCell classes={{root: classes["danger-date"]}}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant='head' classes={{root: classes["alpine"]}}>Alpine</TableCell>
        <TableCell classes={{root: classes['danger' + dangerColour(alp)]}}>{alp}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant='head' classes={{root: classes["treeline"]}}>Treeline</TableCell>
        <TableCell classes={{root: classes['danger' + dangerColour(tln)]}}>{tln}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant='head' classes={{root: classes["below-treeline"]}}>Below Treeline</TableCell>
        <TableCell classes={{root: classes['danger' + dangerColour(btl)]}}>{btl}</TableCell>
      </TableRow>
    </>
  )
}