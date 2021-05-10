const axios = require('axios');

// getting hourly data to put into a graph/table
axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${bt[0]}&lon=${bt[1]}&appid=94c45c13d9200c5e84dab55fa9169755&exclude=current,minutely,daily,alerts&units=metric`)
.then(res => {
  const hourly = res.data.hourly
  return hourly
})