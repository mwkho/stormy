import React, { useState } from 'react';
import './App.css';
import HomePage from './home_page/HomePage'
import Favourites from "./favourites/Favourites"
import Sidebar from './sidebar/sidebar'
import Information from "./information/Information"
import useVisualMode from "../hooks/useVisualMode"


const HOME = 'HOME'
const INFORMATION = 'INFORMATION'
const FAVOURITES = 'FAVOURITES'

export default function App(props) {

  const [ state, setState] = useState('')

  const { mode, transition, back } = useVisualMode();

  // different viewing modes for the web app

  const [ page, setPage] = useState('HOME')
  const [ poi, setPOI] = useState({});
  const [information, setInformation] = useState({})
  
  return (
    <div className="App">
      {page === HOME && <HomePage display={setPage} setPOI={setPOI} setInformation={setInformation}/>}
      {page === INFORMATION && <Information information={information} poi={poi}/>}
      {page === FAVOURITES && <Favourites  /> }
    </div>
  );
}
