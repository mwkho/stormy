import React, { useState } from 'react';
import axios from 'axios';


export default function AvalanceItem(props){

  const AvalancheData = {dateIssued: "March 10, 2020", 
    validUntil: "March 20, 2020", 
    highlights: "These are the highlights", 
    avalancheSummary: "This is the avalanche Summary", 
    snowpackSummary: "This is the snowpack Summary", 
    dangerRatings: "MUCH DANGER", 
    problems: "Here are some problems"
  }
 
  return(
    <>
    <h1> Avalanche Data</h1>
    <table>
  <tr>
    <th>Date Issued:</th>
    <td>{AvalancheData['dateIssued']}</td>
  </tr>
  <tr>
    <th>Valid Untill:</th>
    <td>{AvalancheData['validUntil']}</td>
  </tr>
  <tr>
    <th>HighLights:</th>
    <td>{AvalancheData['highlights']}</td>
  </tr>
  <tr>
    <th>Avalanche Summary:</th>
    <td>{AvalancheData['avalancheSummary']}</td>
  </tr>
  <tr>
    <th>Snowpack Summary:</th>
    <td>{AvalancheData['snowpackSummary']}</td>
  </tr>
  <tr>
    <th>Danger Ratings:</th>
    <td>{AvalancheData['dangerRatings']}</td>
  </tr>
  <tr>
    <th>Problems:</th>
    <td>{AvalancheData['problems']}</td>
  </tr>
  </table>
  </>
  
    
  )

};


