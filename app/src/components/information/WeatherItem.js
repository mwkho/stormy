import React, { useState } from 'react';
import axios from 'axios';


export default function WeatherItem(props){

  const WeatherData = {
    "hourly": [
      {
        "dt": 1618315200,
        "temp": 282.58,
        "feels_like": 280.4,
        "pressure": 1019,
        "humidity": 68,
        "dew_point": 276.98,
        "uvi": 1.4,
        "clouds": 19,
        "visibility": 306,
        "wind_speed": 4.12,
        "wind_deg": 296,
        "wind_gust": 7.33,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      }
    ]
  }

      


  return(
    <>
    <h1>Hourly Weather Data</h1>
    <table>
    <tr>
    <th>Weather:</th>
    <td>{WeatherData.hourly[0].weather[0].main}</td>
  </tr>
  <tr>
    <th>Weather Description:</th>
    <td>{WeatherData.hourly[0].weather[0].description}</td>
  </tr>
  <tr>
    <th>Temperature:</th>
    <td>{WeatherData.hourly[0].temp}</td>
  </tr>
  <tr>
    <th>Wind Speed:</th>
    <td>{WeatherData.hourly[0].wind_speed}</td>
  </tr>
  <tr>
    <th>Wind Degrees:</th>
    <td>{WeatherData.hourly[0].wind_deg}</td>
  </tr>
  <tr>
    <th>Probability of Precipitation:</th>
    <td>{WeatherData.hourly[0].pop}</td>
  </tr>
  {WeatherData.hourly[0].rain && (
    <tr>
    <th>Rain:</th>
    <td>{WeatherData.hourly[0].rain}</td>
  </tr>
  )}
  {WeatherData.hourly[0].snow && (
    <tr>
    <th>Snow:</th>
    <td>{WeatherData.hourly[0].snow}</td>
  </tr>
  )}
  </table>
    </>
  )

};


/*.temp
.wind_speed
.wind_deg
.pop
.rain (if no rain, desn't show up) so need to check 
.snow (if no snow, desn't show up) so need to check 
.weather -> an object of {main, description, icon}
*/