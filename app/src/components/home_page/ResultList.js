import React from 'react'
import ResultListItem from './ResultListItem';

const  ResultsList = (props) => {
  const resultList = props.results.map((result, index) => {
    return <ResultListItem key={index} poi={result} display={props.display} setPOI={props.setPOI} onClick={props.onClick}/>
  });
  return (
    <ul>
      {resultList}
    </ul>
  ) 
}

export default ResultsList;