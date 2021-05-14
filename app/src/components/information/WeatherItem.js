import React from 'react';



export default function WeatherItem(props){
  const consolidate = props.weather

  const dateList = consolidate.dt.map((time, index) => {
    const options = {month:'long', day:'numeric', year:'numeric'}
    const date = new Date(time*1000)
    const hours = date.getHours()
    return <th key={"date-"+index}>{hours !== 0 ? hours : `${new Intl.DateTimeFormat('en', options).format(date)} ${hours}`}</th>
  })

  return(
    <>
    <h1>Hourly Weather Data</h1>
    <table>
      <thead>
        <tr>
          <th>Hour</th>
          {dateList}
        </tr>
      </thead>
      <tbody>

        <tr>
          <th></th>
          {consolidate.icon.map((icon, index) => {
      return <td key={"icon"+index}><img alt="" src={icon}/> </td>
      })}
        </tr>
    <tr>
    <th>Weather</th>
    {consolidate.main.map((main, index) => {
      return <td key={"main"+index}>{main}</td>
    })}
  </tr>
    <tr>
    <th>Weather Description</th>
    {consolidate.description.map((description, index) => {
      return <td key={"description"+index}>{description}</td>
    })}
  </tr>
  <tr>
    <th>Temperature (°C)</th>
    {consolidate.temp.map((temp, index) => {
      return <td key={"temp"+index}>{temp}</td>
    })}
  </tr>
  <tr>
    <th>Wind Speed (m/s)</th>
    {consolidate.windSpeed.map((windSpeed, index) => {
      return <td key={"windSpeed"+index}>{windSpeed}</td>
    })}  
  </tr>
  <tr>
    <th>Wind Degrees</th>
    {consolidate.windDeg.map((windDeg, index) => {
      return <td key={"windDeg"+index}>{windDeg}</td>
    })}  
  </tr>
  <tr>
    <th>Percent of Precipitation</th>
    {consolidate.pop.map((pop, index) => {
      return <td key={"pop"+index}>{Math.round(pop*100) + "%"}</td>
    })}  
  </tr>
  <tr>
    <th>Rain <br/> (volume for last hour, mm)</th>
    {consolidate.rain.map((rain, index) => {
      return <td key={"rain"+index}>{rain ? rain : 0}</td>
    })}  
  </tr>
  <tr>
    <th>Snow <br/> (volume for last hour, mm)</th>
    {consolidate.snow.map((snow, index) => {
      return <td key={"snow"+index}>{snow ? snow : 0}</td>
    })}  
  </tr>
  </tbody>
  </table>
    </>
  )
};
