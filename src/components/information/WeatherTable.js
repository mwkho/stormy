import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  stickyHeader: {
    position:'sticky',
    left:'0',
    color: 'white',
    background: 'grey'
  },
  caption:{
    position:'static',
  }
})

export default function WeatherTable(props){
  const consolidate = props.weather;
  const classes = useStyles();
  const iconPath = "../../../weatherIcon/"

  const dateList = consolidate.dt.map((time, index) => {
    const date = new Date(time*1000);
    const hours = `${date.getHours()}:00`;
    const isZero = hours !== '0:00'
    return <TableCell key={"date-" + index}>{ isZero ? hours : `${props.convertDate(date, isZero)}`}</TableCell>
  })

  return(
    <Paper>
      <TableContainer>
    <Table size="small">
      <caption className={classes.caption}> 
        * total volume for the hour <br/>
        Weather data is provided by <a href="https://openweathermap.org/api/one-call-api">OpenWeatherMap</a>. 
      </caption>
      <TableHead>
        <TableRow>
          <TableCell className={classes.stickyHeader}>Hour</TableCell>
          {dateList}
        </TableRow>
      </TableHead>
      <TableBody>

        <TableRow>
          {/* <TableCell className={classes.stickyHeader}></TableCell> */}
          <TableCell rowSpan={2} className={classes.stickyHeader} variant='head'>Weather</TableCell>
          {consolidate.icon.map((icon, index) => {
      return <TableCell key={"icon"+index}><img alt="" src={`${iconPath}${icon}.png`}/> </TableCell>
      })}
        </TableRow>
    <TableRow>
    {consolidate.main.map((main, index) => {
      return <TableCell key={"main"+index}>{main}</TableCell>
    })}
  </TableRow>
    <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Weather Description</TableCell>
    {consolidate.description.map((description, index) => {
      return <TableCell key={"description"+index}>{description}</TableCell>
    })}
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Temperature (°C)</TableCell>
    {consolidate.temp.map((temp, index) => {
      return <TableCell key={"temp"+index}>{temp}</TableCell>
    })}
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Wind Speed (m/s)</TableCell>
    {consolidate.windSpeed.map((windSpeed, index) => {
      return <TableCell key={"windSpeed"+index}>{windSpeed}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Wind Direction</TableCell>
    {consolidate.windDeg.map((windDeg, index) => {
      return <TableCell key={"windDeg"+index}>{windDeg}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Percent of Precipitation</TableCell>
    {consolidate.pop.map((pop, index) => {
      return <TableCell key={"pop"+index}>{Math.round(pop*100) + "%"}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Rain (mm)*</TableCell>
    {consolidate.rain.map((rain, index) => {
      return <TableCell key={"rain"+index}>{rain ? rain : 0}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell className={classes.stickyHeader} variant='head'>Snow (mm)*</TableCell>
    {consolidate.snow.map((snow, index) => {
      return <TableCell key={"snow"+index}>{snow ? snow : 0}</TableCell>
    })}  
  </TableRow>
  </TableBody>
  </Table>
    
  </TableContainer>
  </Paper>
  )
};
