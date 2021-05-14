import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plotly = require('plotly.js-basic-dist');
const Plot = createPlotlyComponent(Plotly);

// function to calculate total precipitation from snow or rain
const precipitationTotal = (precipitations) => {
  const totalPrecipitationList = []
  precipitations.reduce((total, precipitation) => {
    total += precipitation
    totalPrecipitationList.push(total)
    return total
  }, 0)
  return totalPrecipitationList
}

export default function WeatherPlot(props) { 
  const consolidate = props.weather
  const dateList= consolidate.dt.map((time) => new Date(time*1000))
  const snowTotal = precipitationTotal(consolidate.snow)
  const rainTotal = precipitationTotal(consolidate.rain)

  const temp = {
      x: dateList,
      y: consolidate.temp,
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
      hovertemplate: 'Temperature: %{y}\u00B0C'
    }

    console.log(rainTotal)
  const windSpeed = {
    x: dateList,
    y: consolidate.windSpeed,
    customdata:consolidate.windDeg,
    hovertemplate:
    'Wind Speed: %{y} m/s'+
    '<br>Wind Direction: %{customdata} ',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'green'},
  }
  const rain = {
    x: dateList,
    y: consolidate.rain,
    customdata:rainTotal,
    hovertemplate:
    '1 hour rain: %{y} mm'+
    '<br>Total rain: %{customdata} mm',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'blue'},
  }
  const totalRain = {
    x: dateList,
    y: rainTotal,
    type: 'bar',
    marker: {color: '#cd7eaf'},
  }
  const snow = {
    x: dateList,
    y: consolidate.snow,
    customdata:snowTotal,
    hovertemplate:
    '1 hour snow: %{y} mm'+
    '<br>Total snow: %{customdata} mm',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: '#grey'},
    name:'Snow volume for last hour, mm'
  }

  const totalSnow = {
    x: dateList,
    y: snowTotal,
    type: 'bar',
    marker: {color: '#cd7eaf'},
    name:'Total Snow, mm'
  }
  
  const layout = {
    grid:{
      rows:4,
      columns:1,
      patter: 'independent'
    },
    xaxis: {
      tickformat:'%b %e \n %H:%M',
      nticks:16
    },
    margin:{
      l: 50,
      r: 50,
      b: 10,
      t: 10,
      pad: 4
    },
    width:1000,
    height:500,
  }

  const data = [temp, windSpeed, rain, snow]

  return (
    <div className="weather-graph">
      <Plot data={[temp]} layout={layout}/>
      <Plot data={[windSpeed]} layout={layout}/>
      <Plot data={[rain, totalRain]} layout={layout}/>
      <Plot data={[snow, totalSnow]} layout={layout}/>
      {/* <Plot data={data} layout={layout}/> */}
    </div>
  )
}