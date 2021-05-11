import React from 'react';
import AvalancheProblemsItem from './AvalancheProblemsItem'

export default function AvalanceItem(props){
  const {region, dateIssued, validUntil, highlights, avalancheSummary, snowpackSummary, dangerRatings, problems} = props.bulletin

  const problemsList = problems.map((problem) => {
    return <AvalancheProblemsItem type={problem.type} comment={problem.comment} elevation={problem.icons.elevation} aspects={problem.icons.aspects} likelihood={problem.icons.likelihood} expectedSize={problem.icons.expectedSize}/>
  })

  return(
    <>
    <h1> Avalanche Data</h1>
    <table>
      <thead>
        <tr>
          <th>Region</th> 
          <td>{region}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Date Issued:</th>
          <td>{dateIssued}</td>
        </tr>
        <tr>
          <th>Valid Until:</th>
          <td>{validUntil}</td>
        </tr>
        <tr>
          <th>HighLights:</th>
          <td>{highlights}</td>
        </tr>
        <tr>
          <th>Avalanche Summary:</th>
          <td>{avalancheSummary}</td>
        </tr>
        <tr>
          <th>Snowpack Summary:</th>
          <td>{snowpackSummary}</td>
        </tr>
        <tr>
          <th>Danger Ratings:</th>
          <td>{dangerRatings}</td>
        </tr>
        {problemsList}
    </tbody>
  </table>
  </>
  
    
  )

};


