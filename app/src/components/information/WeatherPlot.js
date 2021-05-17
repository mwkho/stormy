import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Box from '@material-ui/core/Box';

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
      hovertemplate: '%{x}<br>Temperature: %{y}\u00B0C<extra></extra>',
      showlegend: false
    }

    console.log(rainTotal)
  const windSpeed = {
    x: dateList,
    y: consolidate.windSpeed,
    customdata:consolidate.windDeg,
    hovertemplate:
    '%{x}<br>Wind Speed: %{y} m/s'+
    '<br>Wind Direction: %{customdata}<extra></extra>',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'green'},
    showlegend: false
  }
  const rain = {
    x: dateList,
    y: consolidate.rain,
    customdata:rainTotal,
    hovertemplate:
    '%{x}'+
    '<br>1 hour rain: %{y} mm'+
    '<br>Total rain: %{customdata:.2f} mm <extra></extra>',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'blue'},
    showlegend: false

  }
  const totalRain = {
    x: dateList,
    y: rainTotal,
    type: 'bar',
    marker: {color: '#cd7eaf'},
    hovertemplate:'<extra></extra>',
    showlegend: false
  }
  const snow = {
    x: dateList,
    y: consolidate.snow,
    customdata:snowTotal,
    hovertemplate:
    '%{x}<br>1 hour snow: %{y} mm'+
    '<br>Total snow: %{customdata:.2f} mm <extra></extra>',
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: '#grey'},
    showlegend: false
  }

  const totalSnow = {
    x: dateList,
    y: snowTotal,
    type: 'bar',
    marker: {color: '#cd7eaf'},
    hovertemplate:'<extra></extra>',
    showlegend: false
  }
  // const data = [temp, windSpeed, rain, snow, totalRain, totalSnow]
  
  const layout = {
    xaxis: {
      tickformat:'%b %e \n %H:%M',
      nticks:16,
      // showspikes:true,
      // spikesnap:"hovered data"
    },
    margin:{
      l: 40,
      r: 40,
      b: 60,
      t: 30,
      pad: 4
    },
    // autosize:true
    width:900,
    height:300
  }

  return (
    <div className="weather-graph">
      <Plot data={[temp]} layout={{...layout,title: {text: 'Temperature'}, yaxis:{title: {text: 'Temperature (\u00B0C)'}}}} config={{displayModeBar: false}}/>
      <Plot data={[windSpeed]} layout={{...layout,title: {text: 'Wind Speed and Direction'}, yaxis:{title: {text: 'Wind speed (m/s)'}}}} config={{displayModeBar: false}}/>
      <Plot data={[rain, totalRain]} layout={{...layout,title: {text: 'Rain'}, yaxis:{title: {text: 'Rain (mm)'}}}} config={{displayModeBar: false}}/>
      <Plot data={[snow, totalSnow]} layout={{...layout,title: {text: 'Snow'}, yaxis:{title: {text: 'Snow (mm)'}}}}  config={{displayModeBar: false}}/>
      {/* <Plot data={data} layout={layout}/> */}
    </div>
  )
}