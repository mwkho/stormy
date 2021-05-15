import React from 'react';
import AvalancheDangerItem from './AvalancheDangerItem';
import AvalancheProblemsItem from './AvalancheProblemsItem'

export default function AvalancheBulletin(props){
  const {region, dateIssued, validUntil, highlights, avalancheSummary, snowpackSummary, dangerRatings, problems} = props.bulletin

  if (!region) {
    return(
    <> 
      <h1> Avalanche Data</h1>
      <h2 className="unfound-bulletin"> {props.bulletin} </h2>
    </>
    )
  }

  const problemsList = problems.map((problem) => {
    return <AvalancheProblemsItem type={problem.type} comment={problem.comment} elevation={problem.icons.elevation} aspects={problem.icons.aspects} likelihood={problem.icons.likelihood} expectedSize={problem.icons.expectedSize}/>
  });

  const dangersList = dangerRatings.map((rating) => {
    const {alp, tln, btl} = rating.dangerRating
    return <AvalancheDangerItem date={rating.date} alp={alp} tln={tln} btl={btl}/> 
  });

  return(
    <>
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
        {dangersList}
        <tr>
          <th>Avalanche Summary:</th>
          <td>{avalancheSummary}</td>
        </tr>
        <tr>
          <th>Snowpack Summary:</th>
          <td>{snowpackSummary}</td>
        </tr>
        {problemsList}
    </tbody>
  </table>
  </>
  
    
  )

};


