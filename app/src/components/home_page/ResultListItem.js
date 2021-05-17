import Axios from 'axios'
import React, { useState } from 'react'
import MapItem from '../information/MapItem'

const ResultListItem  = (props) => {
  const {poi, type} = props;

  const [hover, setHover] = useState(false)

  const selected = (poi) => {
    props.display('LOADING')
    Axios.post('/information', {poi: poi})
    .then((information) => {      
      setTimeout(() => {
        props.setPOI({...poi, type: type})
        props.setInformation(information.data)
        props.display('INFORMATION')
      }, 1000)
    })
  }
  
  return (
    <li  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDoubleClick={()=> selected(poi)} className="ResultListItem">
      <h2>Name: {poi.name}</h2>
      <h3>Region: {poi.region}</h3> 
      {hover && <MapItem lat={poi.lat} lon={poi.lon}/>}
    </li>
  )
}

export default ResultListItem;