import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CloudIcon from '@material-ui/icons/Cloud';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AppBar from '@material-ui/core/AppBar';
import TerrainIcon from '@material-ui/icons/Terrain';
import Typography from '@material-ui/core/Typography';


import axios from "axios"

import AvalancheBulletin from "./AvalancheBulletin"
import WeatherTable from "./WeatherTable"
import CommentList from "./CommentList"
import MapItem from "./MapItem"
import TabPanel from './TabPanel';
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
    accumalator.rain.push(current.rain ? current.rain.lh : 0)
    accumalator.snow.push(current.snow ? current.snow.lh : 0)
    accumalator.description.push(current.weather[0].description)
    accumalator.main.push( current.weather[0].main)
    accumalator.icon.push(`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`)
    return accumalator
  }, initial)
}

export default function Information(props){
  const {display_name, lat, lon, type} = props.poi
  const {weather, bulletin} = props.information
  const consolidate = consolidateWeather(weather)
  
  const [weatherTab, setWeatherTab] = useState(0)
  const [avalancheTab, setAvalancheTab] = useState(0)
  const [place, setPlace] = useState()
  const [fav, setFav] = useState(false)
  const [tab, setTab] = useState(0)
  
  // all of tab changing code goes below here
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
  useEffect(()=>{axios.post(`/add/place`, {lat: lat, lon: lon, type:type, name: display_name})
  .then(console.log("place was added"))
  .catch(err=>{
    console.log(err.message)
  })
  }, [])

  useEffect(()=>{axios.get(`get/place/${lat}/${lon}`)
    .then(resp=>{
      setPlace([...resp.data.rows])
      const id = resp.data.rows[0].id
      console.log(id)
      axios.get(`get/favourite/${id}`)
      .then((resp)=>{
        if(resp.data.rows[0]){
          setFav(true)
          console.log("you like this")
        }
        })
    })
  }, [])

  /*useEffect(()=>{axios.get(`get/favourites`)
  .then((resp)=>{
    console.log("favourites", resp.data.rows)
    
  })
}, [])*/
  
  const addToFavourites = function(){
      axios.post(`add/favourites`, {placeId: place[0].id})
      .then(console.log('success!'))
      .catch(err=>{
        console.log(err)
      })
  }

  console.log(bulletin)
  
  const activeButton = (<Button  
    onClick={addToFavourites}
    color="primary"
    variant="contained"
    >
      Favourite
    </Button >)
  
    const inactiveButton = 
    <Button 
    color="secondary"
    variant="contained"
    disabled
    >
      Favourited
    </Button>


  return(
    <Container maxWidth='lg'>
      <h1>{display_name}</h1>
      {!fav ? activeButton : inactiveButton}

      <h2>Weather and avalanche bulletin for  lat: {lat}, lon:{lon} </h2>
      {/* <AppBar position="static" class={{colorDefault=''}} color="default">       */}
      <AppBar position="static" color="default">      
      <Tabs  indicatorColor="primary" textColor="primary" onChange={changeTab}>
        <Tab wrapped={true} icon={<CloudIcon/>} label={"Hourly Weather (48h)"}/>
        <Tab icon={<TerrainIcon/>} label='Avalanche Bulletin'/>
      </Tabs>
      </AppBar>
      <TabPanel tab={tab} index={0}>
        <Tabs  onChange={changeWeatherTab}>
          <Tab label='Graph'/>
          <Tab label='Table'/>
        </Tabs>
        <Typography> Data shown are for the next 48 hours </Typography>
        <TabPanel tab={weatherTab} index={0}>
          <WeatherPlot weather={consolidate} />
        </TabPanel>
        <TabPanel tab={weatherTab} index={1}>
          <WeatherTable weather={consolidate}/>
        </TabPanel>
      </TabPanel>
      <TabPanel tab={tab} index={1}>
      <Tabs  onChange={changeAvalancheTab}>
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
      </Container>
  )
};