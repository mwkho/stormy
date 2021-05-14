import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Logo from './Logo'
import Filter from './Filter'
import ResultsList from './ResultList';

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
    .catch(err => console.log(err.message))
  }, [userInput])

  const reset = () => {
    setUserInput("")
  }
  return(
  <main>
    <Logo/>
    <Filter mode={mode} setMode={setMode} reset={reset}/>
    <SearchBar searchMode={mode} onSearch={userInput => {setUserInput(userInput)}}/>
    <ResultsList results={results} display={props.display} setPOI={props.setPOI} setInformation={props.setInformation} type={mode}/>
  </main>
  )

};