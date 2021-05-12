import Axios from 'axios'
import React from 'react'

const ResultListItem  = (props) => {
<<<<<<< HEAD
  const getInformation = (poi) => {
    props.setPOI(poi)
    props.display('INFORMATION')
    Axios.post('/information', {poi: poi})
    props.onClick()
=======
  const selected = (poi) => {
    Axios.post('/information', {poi: props.poi})
    .then((information) => {
      props.setPOI(poi)
      props.setInformation(information.data)
      props.display('INFORMATION')
    })
>>>>>>> Information_Component
  }
  
  return (
    <li onClick={()=> selected(props.poi)} className="ResultListItem">
      <h2>{props.poi.display_name}</h2>
    </li>
  )
}

export default ResultListItem;