import Axios from 'axios'
import React from 'react'

const ResultListItem  = (props) => {
  const getInformation = (coordinates) => {
  Axios.post("/information", {coordinates: coordinates})
  .then(() => {
    props.display('INFORMATION')
  })
  }
  
  return (
    <li onClick={()=> getInformation(props.coordinates)} className="ResultListItem">
      <h2>{props.name}</h2>
    </li>
  )
}

export default ResultListItem;