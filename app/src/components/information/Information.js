import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from "axios"

import AvalancheBulletin from "./AvalancheBulletin"
import WeatherItem from "./WeatherItem"
import CommentList from "./CommentList"
import MapItem from "./MapItem"
import TabPanel from './TabPanel';
import Button from '../button'
import WeatherPlot from './WeatherPlot';

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

export default function Information(props){
  const {display_name, lat, lon} = props.poi
  const {weather, bulletin} = props.information
  
  const consolidate = consolidateWeather(weather)

  // all of tab changing code goes below here
  const [tab, setTab] = useState(0)
  const [weatherTab, setWeatherTab] = useState(0)
  const [avalancheTab, setAvalancheTab] = useState(0)
  const [place, setPlace] = useState()

  const changeTab = (event, tabValue) => {
    setTab(tabValue)
  }

  const changeWeatherTab = (event, tabValue) => {
    setWeatherTab(tabValue)
  }
  const changeAvalancheTab = (event, tabValue) => {
    setAvalancheTab(tabValue)  
  }

  // comment and favourite backend calls
  useEffect(()=>{axios.post(`/api/addPlace/${lat}/${lon}/trail/${display_name}`)
  .then(resp =>{
    console.log("place was added")
  })
  .catch(err=>{
    console.log(err.message)
  })
  }, [])

  useEffect(()=>{axios.get(`api/getPlace/${lat}/${lon}`)
    .then(resp=>{
      setPlace([...resp.data.rows])
      const id =resp.data.rows[0].id
    })
  }, [])

  
  const addToFavourites = function(){
    
      axios.post(`api/addFavourites/${place[0].id}`)
      .then(resp=>{
        console.log('success!')
      })
      .catch(err=>{
        console.log(err)
      })
  }
  console.log(bulletin)


  return(
    <>
      <h1>{display_name}</h1>
      <Button name="favourite" onClick={addToFavourites}/>
      <h2>Weather and avalanche bulletin for  lat: {lat}, lon:{lon} </h2>
      <Tabs orientation='vertical' onChange={changeTab}>
        <Tab label='Weather'/>
        <Tab label='Avalanche Bulletin'/>
      </Tabs>
      <TabPanel tab={tab} index={0}>
        <Tabs onChange={changeWeatherTab}>
          <Tab label='Graph'/>
          <Tab label='Table'/>
        </Tabs>
        <TabPanel tab={weatherTab} index={0}>
          <WeatherPlot weather={consolidate} />
        </TabPanel>
        <TabPanel tab={weatherTab} index={1}>
          <WeatherItem weather={consolidate}/>
        </TabPanel>
      </TabPanel>
      <TabPanel tab={tab} index={1}>
      <Tabs onChange={changeAvalancheTab}>
          <Tab label='Danger Ratings'/>
          <Tab label='Problems'/>
        </Tabs>
        <TabPanel tab={avalancheTab} index={0}>
        <AvalancheBulletin bulletin={bulletin}/>
        </TabPanel>
        <TabPanel tab={avalancheTab} index={1}>
          Avalanche problems goes here
        </TabPanel>
      </TabPanel>
      <MapItem name={display_name} lat={lat} lon={lon} map="../../../images/trail.png"/>
      <CommentList image="../../../images/profile_pic.png" place={place}/>
      </>
  )
};