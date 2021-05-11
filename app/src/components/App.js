import React, { useState } from 'react';
import axios from 'axios';
// import "bootstrap/dist/bootstrap.min.css";
import './App.css';
import HomePage from './home_page/HomePage';
import Favourites from './favourites/Favourites'

export default function App(props) {

  // different viewing modes for the web app
  const HOME = 'HOME'
  const INFORMATION = 'INFORMATION'
  const FAVOURITES = 'FAVOURITES'

  const [ page, setPage] = useState('HOME')
  return (
    <div className="App">
      {page === HOME && <HomePage display={setPage}/>}
      {page === INFORMATION && "Information page here"}
      {page === FAVOURITES && <Favourites /> }
    </div>
  );
}
