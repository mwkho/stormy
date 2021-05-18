import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Logo from './Logo'
import Filter from './Filter'
import ResultsList from './ResultList';
import Loading from '../Loading';

import '../styles/homePage.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


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
<<<<<<< HEAD
    <>

<Box
    width='100%'
    display="flex"
    flexDirection='column'
    alignItems='center'
  justifyContent='center' 
    >
      <Logo/>
      <Filter mode={mode} setMode={setMode} reset={reset}/>
    </Box>
    <Container maxWidth='md'>
      <SearchBar searchMode={mode} onSearch={userInput => {setUserInput(userInput)}}/>
    </Container>
      <ResultsList results={results} display={props.display} setPOI={props.setPOI} setInformation={props.setInformation} type={mode} setPlaceId={props.setPlaceId}/>
  </>
=======
  <main class="homepage">
    <Logo width={200}/>
    <Filter mode={mode} setMode={setMode}/>
    <SearchBar setStatus={setLoadStatus} searchMode={mode} onSearch={userInput => {setUserInput(userInput)}}/>
    
    {loadStatus === SHOW && <ResultsList results={results} display={props.display} setPOI={props.setPOI} setInformation={props.setInformation} type={mode} setPlaceId={props.setPlaceId}/>}
    {loadStatus === SEARCHING && <Loading> Searching </Loading> }

  </main>
>>>>>>> 3712faf5b748003144c629c932c7f9e6955c568c
  )

};