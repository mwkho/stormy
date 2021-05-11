import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './home_page/HomePage'
import Favourites from "./favourites/Favourites"
import Sidebar from './sidebar/sidebar'
import Information from "./sidebar/sidebar"
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
  return (
    <div className="App">
      {page === HOME && <HomePage display={setPage} setPOI={setPOI}/>}
      {page === INFORMATION && `Information page here: ${[poi.lat, poi.lon]}`}
      {page === FAVOURITES && <Favourites /> }
    </div>
  );
}
