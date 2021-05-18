import React, {useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const AvalancheProblemsItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
  <>        
    <TableRow>
      <TableCell >
        <IconButton aria-label="expand row" size='small' onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        <Typography variant="h6"> {props.type} </Typography>
        </IconButton>
      </TableCell>
    </TableRow>
    
    <TableRow>
      <Collapse in={open} timeout="auto">
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell colSpan={4}>{props.comment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant='head' >Elevation</TableCell >
              <TableCell variant='head' >Aspects</TableCell >
              <TableCell variant='head' >Likelihood</TableCell >
              <TableCell variant='head' >Expected size</TableCell >
            </TableRow>
            <TableRow>
              <TableCell> <img alt='' src={props.elevation}/> </TableCell>
              <TableCell> <img alt='' src={props.aspects}/> </TableCell>
              <TableCell> <img alt='' src={props.likelihood}/> </TableCell>
              <TableCell> <img alt='' src={props.expectedSize}/> </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Collapse>
    </TableRow>
  </>
  )
}

export default AvalancheProblemsItem