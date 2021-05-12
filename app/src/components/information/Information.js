import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AvalancheBulletin from "./AvalancheBulletin"
import WeatherItem from "./WeatherItem"
import CommentList from "./CommentList"
import MapItem from "./MapItem"
import TabPanel from './TabPanel';


export default function Information(props){
  const [tab, setTab] = useState(0)

  const {display_name, lat, lon} = props.poi
  const {weather, bulletin} = props.information

  const changeTab = (event, tabValue) => {
    setTab(tabValue)
  }

  console.log(bulletin)
  return(
    <>
      <h1>{display_name}</h1>
      <button> favourite</button>
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