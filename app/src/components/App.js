import React, { useState } from 'react';
import './App.css';
import HomePage from './home_page/HomePage'
import Favourites from "./favourites/Favourites"
import Sidebar from './sidebar/Sidebar'
import Information from "./information/Information"
import CircularProgress from '@material-ui/core/CircularProgress';

const HOME = 'HOME'
const INFORMATION = 'INFORMATION'
const FAVOURITES = 'FAVOURITES'
const LOADING = 'LOADING'

export default function App(props) {
  const [ page, setPage] = useState(HOME)
  const [ poi, setPOI] = useState({});
  const [favourites, setFavourites] = useState([])
  const [information, setInformation] = useState({})


  return (
    
    <div className="App">
      <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossOrigin=""
/>
      {page !== LOADING && <Sidebar setPage={setPage} setFavourites={setFavourites}/>}
      {/* { !mode && <HomePage display={setPage} setPOI={setPOI} onClick={displayInformation} setInformation={setInformation}/>} */}
      {page === HOME && <HomePage display={setPage} setPOI={setPOI} setInformation={setInformation}/>}
      {page === INFORMATION && <Information  information={information} poi={poi}/>}
      {page === FAVOURITES && <Favourites display={setPage} setInformation={setInformation} setPOI={setPOI} favourites={favourites} setFavourites={setFavourites} />}
      {page === LOADING && <CircularProgress/>}
    </div>
    )
}

