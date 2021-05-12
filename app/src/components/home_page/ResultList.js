import React from 'react'
import ResultListItem from './ResultListItem';

const  ResultsList = (props) => {
  const resultList = props.results.map((result, index) => {
<<<<<<< HEAD
    return <ResultListItem key={index} poi={result} display={props.display} setPOI={props.setPOI} onClick={props.onClick}/>
=======
    return <ResultListItem key={index} poi={result} setInformation={props.setInformation} display={props.display} setPOI={props.setPOI}/>
>>>>>>> Information_Component
  });
  return (
    <ul>
      {resultList}
    </ul>
  ) 
}

export default ResultsList;