import React from 'react'
import ResultListItem from './ResultListItem';
import List from '@material-ui/core/List';
import { Box, Container } from '@material-ui/core';


const  ResultsList = (props) => {
  const {setPlaceId, type, setPOI} = props
  const resultList = props.results.map((result, index) => {
    return <ResultListItem setPlaceId={setPlaceId}  key={index} poi={result} setInformation={props.setInformation} display={props.display} setPOI={setPOI} type={type}/>
  });
  
  return (
    <>
    <Container>
    {/* <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
    > */}
      {resultList}
    </Container>
    {/* </Box> */}
    <p style={{marginBottom: 500 + 'px'}}>
    </p>
    </>
  ) 
}

export default ResultsList;