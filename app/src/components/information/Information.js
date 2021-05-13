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


export default function Information(props){
  const [tab, setTab] = useState(0)

  const {display_name, lat, lon} = props.poi
  const {weather, bulletin} = props.information

  const changeTab = (event, tabValue) => {
    setTab(tabValue)
  }
  useEffect(()=>{axios.post(`/api/addPlace/${lat}/${lon}/trail/${display_name}`)
  .then(resp =>{
    console.log(resp)
  })
  .catch(err=>{
    console.log(err.message)
  })
  }, [])
  
  const addToFavourites = function(){
    axios.get(`api/getPlace/${lat}/${lon}`)
    .then(resp=>{
      const id =resp.data.rows[0].id
      axios.post(`api/addFavourites/${id}`)
      .then(resp=>{
        console.log('success!')
      })
      .catch(err=>{
        console.log(err)
      })
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
        <WeatherItem weather={weather}/>
      </TabPanel>
      <TabPanel tab={tab} index={1}>
        <AvalancheBulletin bulletin={bulletin}/>
      </TabPanel>
      <MapItem name={display_name} lat={lat} lon={lon} map="../../../images/trail.png"/>
      <CommentList image="../../../images/profile_pic.png"/>
      </>
  )
};