import React, { useState } from 'react';
import './App.css';
import HomePage from './home_page/HomePage'
import Favourites from "./favourites/Favourites"
import Sidebar from './sidebar/Sidebar'
import Information from "./information/Information"
import useVisualMode from "../hooks/useVisualMode"


const HOME = 'HOME'
const INFORMATION = 'INFORMATION'
const FAVOURITES = 'FAVOURITES'


export default function App(props) {
  const [ page, setPage] = useState('HOME')
  const [ poi, setPOI] = useState({});
  const { mode, transition, back } = useVisualMode();
  const [information, setInformation] = useState({})

  const displayFavourites = function() {
    transition(FAVOURITES)
  }
  const displayHomePage = function() {
    transition(HOME)
  }
  const displayInformation = function(){
    transition(INFORMATION)
  }
  //transition(HOME)
  // different viewing modes for the web app


  return (
    <div className="App">
      <Sidebar display={setPage} favourites={displayFavourites} homePage={displayHomePage}/>
      {/* { !mode && <HomePage display={setPage} setPOI={setPOI} onClick={displayInformation} setInformation={setInformation}/>} */}
      {page === HOME && <HomePage display={setPage} setPOI={setPOI} onClick={displayInformation} setInformation={setInformation}/>}
      {page === INFORMATION && <Information  display={setPage} information={information} poi={poi}/>}
      {page === FAVOURITES && <Favourites />}
    </div>
    )

}

