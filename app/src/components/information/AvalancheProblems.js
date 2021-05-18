import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import AvalancheProblemsItem from './AvalancheProblemsItem'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const AvalancheProblems = (props) => {
  const message = 'No problems have been reported.'

  const problemsList = props.problems.map((problem) => {
    return <AvalancheProblemsItem type={problem.type} comment={problem.comment} elevation={problem.icons.elevation} aspects={problem.icons.aspects} likelihood={problem.icons.likelihood} expectedSize={problem.icons.expectedSize}/>
  })

return(
  props.problems.length ? (
    <Card style={{height:"5rem"}}>
      <CardContent>
        <Typography>{message}</Typography> 
      </CardContent>
    </Card>
      ) : (
    <TableContainer component={Paper}>
      <Table size='small'>
      <caption> Avalanche bulletin is provided by <a href="https://avalanche.ca/">Avalanche Canada</a>. </caption>
        <TableBody>
          <AvalancheProblemsItem type='Cornice' comment='fake comment fake comment fake comment fake comment fake comment fake comment fake comment fake comment fake comment fake comment' elevation='https://www.avalanche.ca/assets/images/Elevation/Elevation-0-0-1_EN.png' aspects='https://www.avalanche.ca/assets/images/Compass/compass-1-1-1-0-0-0-0-1_EN.png' likelihood='https://www.avalanche.ca/assets/images/Likelihood/Likelihood-3_EN.png' expectedSize='https://www.avalanche.ca/assets/images/size/Size-15-25_EN.png'/>
          {/* <AvalancheProblemsItem type='Cornice' comment='fake comment' elevation='https://www.avalanche.ca/assets/images/Elevation/Elevation-0-0-1_EN.png' aspects='https://www.avalanche.ca/assets/images/Compass/compass-1-1-1-0-0-0-0-1_EN.png' likelihood='https://www.avalanche.ca/assets/images/Likelihood/Likelihood-3_EN.png' expectedSize='https://www.avalanche.ca/assets/images/size/Size-15-25_EN.png'/> */}
          {problemsList}
        </TableBody>
      </Table>
    </TableContainer>
      )
)}

export default AvalancheProblems;