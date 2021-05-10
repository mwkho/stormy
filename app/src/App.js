import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './components/home_page/HomePage'
import Favourites from "./components/favourites/favourites"

export default function App(props) {
  const [ state, setState] = useState('')
  
  
  const fetchData = () => {
    axios.get('/') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
        setState({
        message: response.data.message
      });
    }) 
  }

    return (
      
      /*<h1> Hello world! </h1>
        <button onClick={fetchData} >
          Fetch Data
        </button> */
      <div className="App">
        <Favourites />
      </div>
    );
}
