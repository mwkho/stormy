import Axios from 'axios'
import React from 'react'

const ResultListItem  = (props) => {
  const selected = (poi) => {
    Axios.post('/information', {poi: props.poi})
    .then((information) => {
      props.setPOI(poi)
      props.setInformation(information)
      props.display('INFORMATION')
    })
  }
  
  return (
    <li onClick={()=> selected(props.poi)} className="ResultListItem">
      <h2>{props.poi.display_name}</h2>
    </li>
  )
}

export default ResultListItem;