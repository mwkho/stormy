import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Logo from './Logo'
import Filter from './Filter'
import ResultsList from './ResultList';
import Loading from '../Loading';

import '../styles/homePage.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';


const {getMountainCoordinates, getTrailCoordinates} = require("../../lib/getCoordinates")
const SEARCHING = 'SEARCHING'
const SHOW = 'SHOW'


export default function HomePage(props){
  const [userInput, setUserInput] = useState("")
  const [results, setResults] = useState([])
  const [mode, setMode] = useState('trail')
  const [loadStatus, setLoadStatus] = useState('SHOW')

  useEffect(() => {
    if (userInput.trim()){
      setLoadStatus('SEARCHING')
    }
    (mode === 'mountain' ? getMountainCoordinates(userInput) : getTrailCoordinates(userInput))
    .then((res) => {
      setResults([...res])
      setLoadStatus('SHOW')
    })
    .catch(err => {
      // reset user input on error
      setResults([])
      console.log(err.message)
    })
  }, [userInput])

 
  return(
  <main class="homepage">
    <Logo width={200}/>
    <Typography  display="block" gutterBottom>
      {`Look up weather forecasts and avalanche bulletins all in one place!`}
    </Typography>
    <Typography>
      {`Select either \'Trail\' or 'Mountain' and start typing to begin.`}
    </Typography>
    <Filter mode={mode} setMode={setMode}/>
    <SearchBar setStatus={setLoadStatus} searchMode={mode} onSearch={userInput => {setUserInput(userInput)}}/>
    
    {loadStatus === SHOW && <ResultsList results={results} display={props.display} setPOI={props.setPOI} setInformation={props.setInformation} type={mode} setPlaceId={props.setPlaceId}/>}
    {loadStatus === SEARCHING && <Loading> Searching </Loading> }

  </main>
  )

};