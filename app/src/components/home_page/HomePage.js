import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Button from '../button'
import Logo from './Logo'
import Filter from './Filter'
import ResultsList from './ResultList';

const {getMountainCoordinates, getTrailCoordinates} = require("../../lib/getCoordinates")

export default function HomePage(props){
  const [userInput, setUserInput] = useState("")
  const [results, setResults] = useState([])
  const [mode, setMode] = useState(0)

  useEffect(() => {
    (mode ? getMountainCoordinates(userInput) : getTrailCoordinates(userInput))
    .then((res) => {
      setResults([...res])
    })
    .catch(err => console.log(err.message))
  }, [userInput])


  return(
  <main>
    <Logo/>
    <Filter mode={mode} setMode={setMode}/>
    <SearchBar searchMode={mode} onSearch={userInput => setUserInput(userInput)}/>
    <ResultsList results={results}/>
  </main>
  )

};