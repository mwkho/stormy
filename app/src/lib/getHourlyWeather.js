const axios = require('axios');

// getting hourly data to put into a graph/table

const getHourlyWeather = (coordinates) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${ENV.OPENWEATHER_API_KEY}&exclude=current,minutely,daily,alerts&units=metric`)
  .then(res => {
    const hourly = res.data.hourly
    return 
  })
}
//waether icons can be found here
// http://openweathermap.org/img/wn/10d@2x.png
export default getHourlyWeather;

// getting elavation of item
// item
//   .then((item) => {
//     console.log(item[0].lat)
//     return axios.get(`http://geogratis.gc.ca/services/elevation/cdem/altitude?lat=${item[0].lat}&lon=${item[0].lon}`)
//     })
//   .then((res) => {
//     console.log(res.data.altitude)
//   })
