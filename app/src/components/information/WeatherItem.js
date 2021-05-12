import React from 'react';


// create a helper function to sort the weather data
const consolidateWeather = (weather) => {
  const initial = {dt:[], temp:[], windSpeed:[], windDeg:[], rain:[], snow:[], pop:[], description:[], main:[], icon:[]}
  return weather.reduce((accumalator, current) => {
    accumalator.dt.push(current.dt)
    accumalator.temp.push(current.temp)
    accumalator.windSpeed.push(current.wind_speed)
    accumalator.windDeg.push(current.wind_deg)
    accumalator.pop.push(current.pop)
    accumalator.rain.push(current.rain && current.rain.lh)
    accumalator.snow.push(current.snow && current.snow.lh)
    accumalator.description.push(current.weather[0].description)
    accumalator.main.push( current.weather[0].main)
    accumalator.icon.push(`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`)
    return accumalator
  }, initial)
}

export default function WeatherItem(props){
  const consolidate = consolidateWeather(props.weather)

  console.log(consolidate)
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
      return <td key={"icon"+index}><img src={icon}/> </td>
      })}
        </tr>
    <tr>
    <th>Weather:</th>
    {consolidate.main.map((main, index) => {
      return <td key={"main"+index}>{main}</td>
    })}
  </tr>
    <tr>
    <th>Weather Description:</th>
    {consolidate.description.map((description, index) => {
      return <td key={"description"+index}>{description}</td>
    })}
  </tr>
  <tr>
    <th>Temperature:</th>
    {consolidate.temp.map((temp, index) => {
      return <td key={"temp"+index}>{temp}</td>
    })}
  </tr>
  <tr>
    <th>Wind Speed:</th>
    {consolidate.windSpeed.map((windSpeed, index) => {
      return <td key={"windSpeed"+index}>{windSpeed}</td>
    })}  
  </tr>
  <tr>
    <th>Wind Degrees:</th>
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
    <th>Rain</th>
    {consolidate.rain.map((rain, index) => {
      return <td key={"rain"+index}>{rain ? rain : 0}</td>
    })}  
  </tr>
  <tr>
    <th>Snow</th>
    {consolidate.snow.map((snow, index) => {
      return <td key={"snow"+index}>{snow ? snow : 0}</td>
    })}  
  </tr>
  </tbody>
  </table>
    </>
  )
};
