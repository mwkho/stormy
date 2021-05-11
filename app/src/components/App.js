import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './components/home_page/HomePage'
import Favourites from "./components/favourites/favourites"
import Sidebar from './components/sidebar/sidebar'
import Information from "./components/information/Information"
import useVisualMode from "./hooks/useVisualMode"

export default function App(props) {

  const [ state, setState] = useState('')

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // different viewing modes for the web app
  const HOME = 'HOME'
  const INFORMATION = 'INFORMATION'
  const FAVOURITES = 'FAVOURITES'

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
