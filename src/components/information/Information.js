import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudIcon from '@material-ui/icons/Cloud';
import AppBar from '@material-ui/core/AppBar';
import TerrainIcon from '@material-ui/icons/Terrain';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MapIcon from '@material-ui/icons/Map';

import axios from "axios"

import AvalancheBulletin from "./AvalancheBulletin"
import WeatherTable from "./WeatherTable"
import CommentList from "./CommentList"
import MapItem from "./MapItem"
import TabPanel from './TabPanel';
import WeatherPlot from './WeatherPlot';
import AvalancheProblems from './AvalancheProblems';
import SuccessAlert from '../SuccessAlert'

// create a helper function to sort the weather data
const consolidateWeather = (weather) => {
  const initial = {dt:[], temp:[], windSpeed:[], windDeg:[], rain:[], snow:[], pop:[], description:[], main:[], icon:[]}
  return weather.reduce((accumalator, current) => {
    accumalator.dt.push(current.dt)
    accumalator.temp.push(current.temp)
    accumalator.windSpeed.push(current.wind_speed)
    accumalator.windDeg.push(current.wind_deg)
    accumalator.pop.push(current.pop)
    accumalator.rain.push(current.rain ? current.rain['1h'] : 0)
    accumalator.snow.push(current.snow ? current.snow['1h'] : 0)
    accumalator.description.push(current.weather[0].description)
    accumalator.main.push( current.weather[0].main)
    accumalator.icon.push(current.weather[0].icon)
    return accumalator
  }, initial)
}

// healper function convert date
const convertDate = (date, time=false) => {
  const options = {month:'long', day:'numeric', year:'numeric', hour12: false}
  if (time) {
    options.hour = 'numeric'
    options.minute = 'numeric'
  }
  return new Intl.DateTimeFormat('en', options).format(date)
}

export default function Information(props){
  const {placeId} = props
  const {name, region, lat, lon, type} = props.poi
  const {weather, bulletin} = props.information
  const consolidate = consolidateWeather(weather)
  
  const [weatherTab, setWeatherTab] = useState(0)
  const [avalancheTab, setAvalancheTab] = useState(0)
  const [fav, setFav] = useState(false)
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(false)

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

  // function that disables favourite button after it is clicked
  const addToFavourites = () => {
    axios.post(`add/favourites`, {placeId: placeId})
    .then(() => {
      console.log(placeId)
      setFav(true)
      setOpen(true)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  // disable favourites after rendering
  useEffect(() => {
    axios.get(`get/favourite/${placeId}`)
    .then((resp) => {
      for (const favourite of resp.data.rows) {
        if (favourite.place_id === placeId) {
          setFav(true)
          break;
        }
      }
  })
  .catch(err=>{
    console.log(err.message)
  })
}, [])
 
  return(
    <Container 
    maxWidth='md'
    style={{marginLeft: '165px'}}
    > 

      <Typography variant="h3">
        {name}
      </Typography>
      <Typography variant="h5">
        Region: {region}
      </Typography>
      <Button startIcon={<FavoriteIcon />} onClick={addToFavourites} color="secondary" variant="contained" disabled={fav} >
        Favourite
      </Button >

      <SuccessAlert open={open} onClose={() => setOpen(false)}>
        Added to favourites!
      </SuccessAlert>

      <Typography variant="h6">
        Weather and avalanche bulletin for  lat: {lat}, lon:{lon}
      </Typography>

      <AppBar position="static" color="default">      
      <Tabs  value={tab} indicatorColor="primary" textColor="primary" onChange={changeTab}>
        <Tab wrapped={true} icon={<CloudIcon/>} label={"Hourly Weather (48h)"}/>
        <Tab icon={<TerrainIcon/>} label='Avalanche Bulletin'/>
        <Tab icon={<MapIcon/>} label='Map'/>
      </Tabs>
      </AppBar>
      <TabPanel tab={tab} index={0}>
      <AppBar position="static" color='default'>
        <Tabs  indicatorColor='primary' value={weatherTab} onChange={changeWeatherTab}>
          <Tab label='Graph'/>
          <Tab label='Table'/>
        </Tabs>
      </AppBar>
        <TabPanel tab={weatherTab} index={0}>
          <WeatherPlot weather={consolidate} />
        </TabPanel>
        <TabPanel tab={weatherTab} index={1}>
          <WeatherTable convertDate={convertDate} weather={consolidate}/>
        </TabPanel>
      </TabPanel>
      <TabPanel tab={tab} index={1}>
      <AppBar position="static" color='default'>
        <Tabs indicatorColor='primary' value={avalancheTab}  onChange={changeAvalancheTab}>
          <Tab label='Danger Ratings'/>
          <Tab label='Problems'/>
        </Tabs>
      </AppBar>
        <TabPanel tab={avalancheTab} index={0}>
          <AvalancheBulletin  convertDate={convertDate} bulletin={bulletin}/>
        </TabPanel>
        <TabPanel tab={avalancheTab} index={1}>
          <AvalancheProblems convertDate={convertDate} problems={bulletin.problems}/>
        </TabPanel>
      </TabPanel>
      <TabPanel tab={tab} index={2}>
      <AppBar position="static" color='default'>
      </AppBar>
        <MapItem lat={lat} lon={lon} map="../../../images/trail.png"/>
      </TabPanel>
      <CommentList placeId={placeId} convertDate={convertDate}/>
    </Container> 
  )
};