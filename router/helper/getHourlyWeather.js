const axios = require('axios');
require('dotenv').config()

const OPENWEATHER_KEY = process.env.OPENWEATHER_API_KEY
// getting hourly data to put into a graph/table

 const getHourlyWeather = (coordinates) => {
   console.log(coordinates)
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${OPENWEATHER_KEY}&exclude=current,minutely,daily,alerts&units=metric`)
  .then(res => {
    const {dt, temp, wind_speed, wind_deg, pop, rain, snow, weather} = res.data.hourly[0]
    const {main, description, icon} = weather[0]
    return {dt, temp, wind_speed, wind_deg, pop, rain, snow, main, description, icon: `http://openweathermap.org/img/wn/${icon}@2x.png`}
  })
}
module.exports = getHourlyWeather;
//waether icons can be found here
// http://openweathermap.org/img/wn/10d@2x.png

// getting elavation of item
// item
//   .then((item) => {
//     console.log(item[0].lat)
//     return axios.get(`http://geogratis.gc.ca/services/elevation/cdem/altitude?lat=${item[0].lat}&lon=${item[0].lon}`)
//     })
//   .then((res) => {
//     console.log(res.data.altitude)
//   })
