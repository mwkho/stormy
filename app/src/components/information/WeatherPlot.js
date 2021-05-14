import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plotly = require('plotly.js-basic-dist');
const Plot = createPlotlyComponent(Plotly);

const precipitationTotal = (precipitations) => {
  const totalPrecipitationList = []
  precipitations.reduce((total, precipitation) => {
    total += precipitation
    totalPrecipitationList.push(total)
    return total
  }, 0)
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
      marker: {color: 'red'}
    }


  const windSpeed = {
    x: dateList,
    y: consolidate.windSpeed,
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'green'}
  }
  const rain = {
    x: dateList,
    y: consolidate.rain,
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'blue'}
  }
  const snow = {
    x: dateList,
    y: consolidate.snow,
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'grey'}
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
    // autosize:true
    // width:
    // height: 
  }

  const data = [temp, windSpeed, rain, snow]

  return (
    <div className="weather-graph">
      <Plot data={[temp]} layout={layout}/>
      <Plot data={[windSpeed]} layout={layout}/>
      <Plot data={[rain]} layout={layout}/>
      <Plot data={[snow]} layout={layout}/>
      {/* <Plot data={data} layout={layout}/> */}
    </div>
  )
}