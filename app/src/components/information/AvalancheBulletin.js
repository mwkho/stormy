import React from 'react';
import AvalancheDangerItem from './AvalancheDangerItem';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography'

export default function AvalancheBulletin(props){
  
  const {bulletin, convertDate} = props
  const {region, dateIssued, validUntil, highlights, avalancheSummary, snowpackSummary, dangerRatings, problems} = bulletin
  
  // render a message when region doesn't have avalanche bulletin
  if (!region) {
    return(
      <Paper> 
      <Typography variant="h2" className="unfound-bulletin"> {bulletin} </Typography>
    </Paper>
    )
  }
  
  // function to render strings to html using dangerouslySetInnerHTML
  const htmlSummary = (summary) => ({__html: summary})
  
  const dangersList = dangerRatings.map((rating) => {
    const {alp, tln, btl} = rating.dangerRating
    const date = convertDate(new Date(rating.date))
    return <AvalancheDangerItem date={date} alp={alp} tln={tln} btl={btl}/> 
  });

  return(
    <Paper>

    <TableContainer>
    <Table>
    <caption> Avalanche bulletin is provided by <a href="https://avalanche.ca/">Avalanche Canada</a>. </caption>

      <TableHead>
        <TableRow>
          <TableCell>Region</TableCell> 
          <TableCell variant='body'>{region.split('-').map(word => word[0].toUpperCase()+word.slice(1 , word.length)).join(' ')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell variant='head'>Date Issued</TableCell>
          <TableCell>{convertDate(new Date(dateIssued))}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant='head'>Valid Until</TableCell>
          <TableCell>{validUntil > dateIssued ? convertDate(new Date(validUntil)): 'Until further notice'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant='head'>HighLights</TableCell>
          <TableCell> <div dangerouslySetInnerHTML={htmlSummary(highlights)}/></TableCell>
        </TableRow>
        {dangersList}
        <TableRow>
          <TableCell variant='head'>Avalanche Summary</TableCell>
          <TableCell> <div dangerouslySetInnerHTML={htmlSummary(avalancheSummary)}/>  </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant='head'>Snowpack Summary</TableCell>
          <TableCell>   <div dangerouslySetInnerHTML={htmlSummary(snowpackSummary)}/></TableCell>
        </TableRow>
    </TableBody>
  </Table>
    </TableContainer>
  </Paper>  
  
  )

};


