import React, { useState } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';

import HomePage from './home_page/HomePage'
import Favourites from "./favourites/Favourites"
import Sidebar from './sidebar/Sidebar'
import Information from "./information/Information"
import Loading from './Loading';


const HOME = 'HOME'
const INFORMATION = 'INFORMATION'
const FAVOURITES = 'FAVOURITES'
const CONDITIONS = 'CONDITIONS'
const LOADING = 'LOADING'

export default function App(props) {
  const [ page, setPage] = useState(HOME)
  const [poi, setPOI] = useState({});
  const [favourites, setFavourites] = useState([])
  const [information, setInformation] = useState({})
  const [placeId, setPlaceId] = useState(0)

  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossOrigin=""
/>
      {(page !== LOADING && page !== CONDITIONS) && <Sidebar setPage={setPage} setFavourites={setFavourites}/>}
      {/* { !mode && <HomePage display={setPage} setPOI={setPOI} onClick={displayInformation} setInformation={setInformation}/>} */}
      {page === HOME && <HomePage display={setPage} setPOI={setPOI} setInformation={setInformation} setPlaceId={setPlaceId}/>}
      {page === INFORMATION && <Information  information={information} poi={poi} placeId={placeId}/>}
      {page === FAVOURITES && <Favourites display={setPage} setInformation={setInformation} setPOI={setPOI} favourites={favourites} setFavourites={setFavourites} setPlaceId={setPlaceId}/>}
    
      <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent="center"
            height='90vh'
      >

      {page === LOADING && <Loading> Mapping your favourites </Loading>}
      {page === CONDITIONS && <Loading> Looking outside... </Loading>}
      </Box>
    </div>
    )
}

