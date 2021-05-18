import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Logo from './Logo'
import Filter from './Filter'
import ResultsList from './ResultList';

import '../styles/homePage.css';


const {getMountainCoordinates, getTrailCoordinates} = require("../../lib/getCoordinates")

export default function HomePage(props){
  const [userInput, setUserInput] = useState("")
  const [results, setResults] = useState([])
  const [mode, setMode] = useState('trail')
  
  useEffect(() => {
    (mode === 'mountain' ? getMountainCoordinates(userInput) : getTrailCoordinates(userInput))
    .then((res) => {
      setResults([...res])
    })
    .catch(err => {
      // reset user input on error
      setResults([])
      console.log(err.message)
    })
  }, [userInput])

  const reset = () => {
    setUserInput("")
  }
  return(
  <main class="homepage">
    <Logo width={200}/>
    <Filter mode={mode} setMode={setMode} reset={reset}/>
    <SearchBar searchMode={mode} onSearch={userInput => {setUserInput(userInput)}}/>
    <ResultsList results={results} display={props.display} setPOI={props.setPOI} setInformation={props.setInformation} type={mode} setPlaceId={props.setPlaceId}/>
  </main>
  )

};