import React, { useState, useEffect, useCallback} from 'react';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import useDebounce from "../../hooks/useDebounce";

export default function SearchBar(props){
  const [value, setValue] = useState("")

  const userInput = useDebounce(value, 200);
  const onSearch = useCallback(props.onSearch, [userInput]);

  useEffect(() => {
    if (userInput.trim()){
      props.setLoadStatus('SEARCHING')
    }
    onSearch(userInput);
  }, [userInput, onSearch])


  useEffect(() => {
    setValue('')  
  }, [props.searchMode])
  return(
  <>

        <TextField  
          // style={{ width: '70%' }}
          style={{ width: '80%', marginRight: '100px', paddingLeft: '200px' }}
          variant='filled'
          onChange={(event) => setValue(event.target.value)}
          value={value}     
        />  
  </>
  )
};


    /*<form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        data-testid="trail-name-input"
        className="search-input"
        name="search_bar"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Where do you wanna search?"
      />
    </form>*/