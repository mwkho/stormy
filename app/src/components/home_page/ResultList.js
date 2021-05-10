import React from 'react'
import ResultListItem from './ResultListItem';

const  ResultsList = (props) => {
  return (
    <section>
      {props.results.map((result) => {
        return <ResultListItem name={result.display_name} />
        })
      }
    </section>
  ) 
}

export default ResultsList;