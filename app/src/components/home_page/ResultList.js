import React from 'react'
import ResultListItem from './ResultListItem';

const  ResultsList = (props) => {
  const resultList = props.results.map((result, index) => {
    return <ResultListItem key={index} name={result.display_name} />
  });

  return (
    <ul>
      {resultList}
    </ul>
  ) 
}

export default ResultsList;