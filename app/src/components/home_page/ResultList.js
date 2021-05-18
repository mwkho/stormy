import React from 'react'
import ResultListItem from './ResultListItem';



const  ResultsList = (props) => {
  const {setPlaceId, type, setPOI} = props
  const resultList = props.results.map((result, index) => {
    return <ResultListItem setPlaceId={setPlaceId}  key={index} poi={result} setInformation={props.setInformation} display={props.display} setPOI={setPOI} type={type}/>
  });
  
  return (
    <>
    <ul>
      {resultList}
    </ul>
    <p style={{marginBottom: 500 + 'px'}}>

    </p>
    </>
  ) 
}

export default ResultsList;