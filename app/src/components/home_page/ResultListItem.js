import Axios from 'axios'
import React from 'react'

const ResultListItem  = (props) => {
  const getInformation = (poi) => {
    props.setPOI(poi)
    props.display('INFORMATION')
    Axios.post('/information', {poi: poi})
    props.onClick()
  }
  
  return (
    <li onClick={()=> getInformation(props.poi)} className="ResultListItem">
      <h2>{props.poi.display_name}</h2>
    </li>
  )
}

export default ResultListItem;