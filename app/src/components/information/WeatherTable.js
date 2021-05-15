import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default function WeatherTable(props){
  const consolidate = props.weather

  const dateList = consolidate.dt.map((time, index) => {
    const date = new Date(time*1000)
    const hours = `${date.getHours()}:00`
    return <TableCell key={"date-" + index}>{hours !== '0:00' ? hours : `${props.convertDate(date)}`+ "\n" +`${hours}`}</TableCell>
  })

  return(
    <Paper>
      <TableContainer>
    <Table>
    <caption> Weather data is provided by <a href="https://openweathermap.org/api/one-call-api">OpenWeatherMap</a>. </caption>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          {dateList}
        </TableRow>
      </TableHead>
      <TableBody>

        <TableRow>
          <TableCell></TableCell>
          {consolidate.icon.map((icon, index) => {
      return <TableCell key={"icon"+index}><img alt="" src={icon}/> </TableCell>
      })}
        </TableRow>
    <TableRow>
    <TableCell>Weather</TableCell>
    {consolidate.main.map((main, index) => {
      return <TableCell key={"main"+index}>{main}</TableCell>
    })}
  </TableRow>
    <TableRow>
    <TableCell>Weather Description</TableCell>
    {consolidate.description.map((description, index) => {
      return <TableCell key={"description"+index}>{description}</TableCell>
    })}
  </TableRow>
  <TableRow>
    <TableCell>Temperature (°C)</TableCell>
    {consolidate.temp.map((temp, index) => {
      return <TableCell key={"temp"+index}>{temp}</TableCell>
    })}
  </TableRow>
  <TableRow>
    <TableCell>Wind Speed (m/s)</TableCell>
    {consolidate.windSpeed.map((windSpeed, index) => {
      return <TableCell key={"windSpeed"+index}>{windSpeed}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell>Wind Degrees</TableCell>
    {consolidate.windDeg.map((windDeg, index) => {
      return <TableCell key={"windDeg"+index}>{windDeg}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell>Percent of Precipitation</TableCell>
    {consolidate.pop.map((pop, index) => {
      return <TableCell key={"pop"+index}>{Math.round(pop*100) + "%"}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell>Rain <br/> (volume for last hour, mm)</TableCell>
    {consolidate.rain.map((rain, index) => {
      return <TableCell key={"rain"+index}>{rain ? rain : 0}</TableCell>
    })}  
  </TableRow>
  <TableRow>
    <TableCell>Snow <br/> (volume for last hour, mm)</TableCell>
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
