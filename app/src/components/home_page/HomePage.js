import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar"
import Button from '../button'
import Logo from './Logo'
import Filter from './Filter'

export default function HomePage(props){

  return(
  <>
    <Logo />
    <Filter />
    <SearchBar/>
    <Button />
  </>
  )

};