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
      {(page !== LOADING && page !== CONDITIONS) && <Sidebar setPage={setPage} setFavourites={setFavourites}/>}
      {page === HOME && <HomePage display={setPage} setPOI={setPOI} setInformation={setInformation} setPlaceId={setPlaceId}/>}
      {page === INFORMATION && <Information  information={information} poi={poi} placeId={placeId}/>}
      {page === FAVOURITES && <Favourites display={setPage} setInformation={setInformation} setPOI={setPOI} favourites={favourites} setFavourites={setFavourites} setPlaceId={setPlaceId}/>}

      {page === LOADING && 
        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent="center"
        height='100vh'
        >
          <Loading> 
            Mapping your favourites 
          </Loading>
        </Box>
         }
      {page === CONDITIONS && 
        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent="center"
        height='100vh'
        >
        <Loading> 
          Looking outside... 
        </Loading>
      </Box>}
    </div>
    )
}

