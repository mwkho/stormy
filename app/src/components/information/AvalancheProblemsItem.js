import React from 'react';

const AvalancheProblemsItem = (props) => {
  return (
    <>
      <tr>
        <th>{props.type}</th>
      </tr>
      <tr>
        <td>{props.comment}</td>
      </tr>
      <tr>
        <th>Elevation</th>
      </tr>
      <tr>
        <td> {props.elevation} </td>
      </tr>
      <tr>
        <th>Aspects</th>
        <td></td>
      </tr>
      <tr>
        <td>{props.aspects}</td>
      </tr>
      <tr>
        <th>Expected size</th>
        <th>Likelihood</th>
      </tr>
      <tr>
        <td>{props.expectedSize}</td>
        <td>{props.likelihood}</td>
      </tr>
      <tr>
        <th>Aspects</th>
        <td>{props.aspects}</td>
      </tr>
    </>
  )
}

export default AvalancheProblemsItem